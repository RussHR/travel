/* eslint-disable no-undef, quotes */
import { shallow, render } from 'enzyme';
import React from 'react';
import { expect } from 'chai';

import TourList from './TourList';
import mockData from '../../data/mockData';

describe('<TourList />', () => {
    const props = JSON.parse(mockData);

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
});