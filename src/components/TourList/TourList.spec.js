/* eslint-disable no-undef, quotes */
import { shallow, render } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import { merge } from 'lodash';

import TourList from './TourList';
import mockData from '../../data/mockData';
import sortModes from '../../constants/sortModes';

describe('<TourList />', () => {
    const props = merge({}, JSON.parse(mockData), { searchTerm: '', sortMode: sortModes.recommended });

    it('should render without any issues', () => {
        shallow(<TourList {...props} />);
    });

    it('renders the text for a given tour', () => {
        const wrapper = render(<TourList {...props} />);

        const firstNonSpecialTourInList = wrapper.find('[data-qa="tour-list-item"]').eq(3).text();
        const firstSpecialTourInList = wrapper.find('[data-qa="tour-list-item"]').first().text();

        // check that the first non-special tour has the correct text
        expect(firstNonSpecialTourInList).to.contain('German Tour: Parliament Quarter &amp; Reichstag glass dome');
        expect(firstNonSpecialTourInList).to.contain('$14');
        expect(firstNonSpecialTourInList).to.contain('4.8');
        expect(firstNonSpecialTourInList).to.not.contain('special');

        // check that the first special tour has the correct text
        expect(firstSpecialTourInList).to.contain('Berlin: 2.5-Hour Boat Tour Along the River Spree');
        expect(firstSpecialTourInList).to.contain('$41');
        expect(firstSpecialTourInList).to.contain('4.5');
        expect(firstSpecialTourInList).to.contain('special');
    });

    it('filters tours that match multiple words in the search terms (non-case-sensitive)', () => {
        const mockProps = merge({}, props, { searchTerm: 'skip line' });
        const wrapper = render(<TourList {...mockProps} />);
        const tourListItems = wrapper.find('[data-qa="tour-list-item"]');
        expect(tourListItems.length).to.eq(4);
    });

    it('sorts tours in ascending cost, listing specials first', () => {
        const mockProps = merge({}, props, { sortMode: sortModes.priceAscending });
        const wrapper = render(<TourList {...mockProps} />);
        const tourListItems = wrapper.find('[data-qa="tour-list-item"]');

        // check that the first two tours are in ascending cost
        const firstSpecialTourInList = tourListItems.first().text();
        const secondSpecialTourInList = tourListItems.eq(1).text();
        expect(firstSpecialTourInList).to.contain('$41');
        expect(secondSpecialTourInList).to.contain('$46');

        // check that the last special tour is in front of the first non-special tour
        const lastSpecialTourInList = tourListItems.eq(2).text();
        const firstNonSpecialTourInList = tourListItems.eq(3).text();
        expect(lastSpecialTourInList).to.contain('$50');
        expect(firstNonSpecialTourInList).to.contain('$8');

        // check that the second non-special tour costs more than the first non-special one
        const secondNonSpecialTourInList = tourListItems.eq(4).text();
        expect(secondNonSpecialTourInList).to.contain('$10');
    });

    it('sorts tours in descending cost, listing specials first', () => {
        const mockProps = merge({}, props, { sortMode: sortModes.priceDescending });
        const wrapper = render(<TourList {...mockProps} />);
        const tourListItems = wrapper.find('[data-qa="tour-list-item"]');

        // check that the first two tours are in descending cost
        const firstSpecialTourInList = tourListItems.first().text();
        const secondSpecialTourInList = tourListItems.eq(1).text();
        expect(firstSpecialTourInList).to.contain('$50');
        expect(secondSpecialTourInList).to.contain('$46');

        // check that the last special tour is in front of the first non-special tour
        const lastSpecialTourInList = tourListItems.eq(2).text();
        const firstNonSpecialTourInList = tourListItems.eq(3).text();
        expect(lastSpecialTourInList).to.contain('$41');
        expect(firstNonSpecialTourInList).to.contain('$210');

        // check that the second non-special tour costs more than the first non-special one
        const secondNonSpecialTourInList = tourListItems.eq(4).text();
        expect(secondNonSpecialTourInList).to.contain('$143');
    });
});