/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { merge } from 'lodash';

import mockData from '../data/mockData';
import sortModes from '../constants/sortModes';
import { filterAndSortTours } from './tours';

describe('helpers/tours', () => {
    describe('filterAndSortTours', () => {
        const defaultData = {
            tours: JSON.parse(mockData).tours,
            searchTerm: '',
            sortMode: sortModes.recommended
        };

        it('sorts by special alone when sortMode is "recommended" (default)', () => {
            const sortedTours = filterAndSortTours(defaultData);
            expect(sortedTours[0].title).to.eq('Berlin: 2.5-Hour Boat Tour Along the River Spree');
            expect(sortedTours[6].title).to.eq('Skip the Line: Berlin TV Tower Ticket');
            expect(sortedTours[13].title).to.eq('Skip the Line: TV Tower Early Bird Tickets');
        });

        it('sorts when sortMode is "priceAscending"', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, { sortMode: sortModes.priceAscending }));
            expect(sortedTours[0].title).to.eq('Berlin: 2.5-Hour Boat Tour Along the River Spree');
            expect(sortedTours[6].title).to.eq('1-Hour City Tour by Boat with Guaranteed Seating');
            expect(sortedTours[13].title).to.eq('Berlin Hop-on Hop-off Bus Tour: 1- or 2-Day Ticket');
        });

        it('sorts when sortMode is "priceDescending"', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, { sortMode: sortModes.priceDescending }));
            expect(sortedTours[0].title).to.eq('Reichstag: Rooftop Coffee Break at Käfer');
            expect(sortedTours[6].title).to.eq('German Tour: Reichstag with dome Chamber &amp;');
            expect(sortedTours[13].title).to.eq('Berlin Hop-on Hop-off Bus Tour with Live Commentary');
        });
        it('sorts when sortMode is "ratingAscending"', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, { sortMode: sortModes.ratingAscending }));
            expect(sortedTours[0].title).to.eq('Berlin: 2.5-Hour Boat Tour Along the River Spree');
            expect(sortedTours[6].title).to.eq('Museum Pass Berlin: 3-Day Entry to Over 40 Top Museums');
            expect(sortedTours[13].title).to.eq('German Tour: Reichstag with dome Chamber &amp;');
        });

        it('sorts when sortMode is "ratingDescending"', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, { sortMode: sortModes.ratingDescending }));
            expect(sortedTours[0].title).to.eq('Skip the Line: Neues Museum Berlin Tickets');
            expect(sortedTours[6].title).to.eq('German Tour: Reichstag with dome Chamber &amp;');
            expect(sortedTours[13].title).to.eq('Berlin Hop-on Hop-off Bus Tour with Live Commentary');
        });

        it('filters by search term when sortMode is "recommended" (default)', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, { searchTerm: 'berlin' }));
            expect(sortedTours.length).to.eq(8);
        });

        it('filters by search term when sortMode is not "recommended" (priceAscending)', () => {
            const sortedTours = filterAndSortTours(merge({}, defaultData, {
                sortMode: sortModes.priceAscending,
                searchTerm: 'berlin'
            }));

            expect(sortedTours[0].title).to.eq('Berlin: 2.5-Hour Boat Tour Along the River Spree');
            expect(sortedTours[2].title).to.eq('Berlin Hop-on Hop-off Bus Tour with Live Commentary');
        });
    });
});