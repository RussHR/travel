import { filter, orderBy } from 'lodash';

import sortModes from '../constants/sortModes';

/*
 * Returns a list of tours that meet the search criteria given.
 *
 * @param {object} data
 * @param {array} data.tours - array of all possible tour objects
 * @param {string} data.searchTerm - text from input user uses for searching for tours
 * @param {string} data.sortMode - how to sort the filtered tours
 * @return {array} sorted list of the tours that match the search criteria
 */
export function filterAndSortTours({ tours, searchTerm, sortMode }) {
    // split all the words in the search term
    const searchTermWords = searchTerm.split(/\s+/);

    // only keep the tours that have a title that includes each of the search words
    const filteredTours = filter(tours, ({ title }) => {

        const titleLowerCase = title.toLowerCase();

        return searchTermWords.every(searchTermWord => {
            return titleLowerCase.includes(searchTermWord.toLowerCase());
        });
    });

    // by default, put the sorted tours at the top
    const iteratees = ['isSpecialOffer'];
    const orders = ['desc'];

    if (sortMode === sortModes.priceAscending || sortMode === sortModes.priceDescending) {
        iteratees.push(tour => parseInt(tour.price, 10));
        orders.push(sortMode === sortModes.priceAscending ? 'asc' : 'desc');
    } else if (sortMode === sortModes.ratingAscending || sortMode === sortModes.ratingDescending) {
        iteratees.push(tour => parseFloat(tour.rating));
        orders.push(sortMode === sortModes.ratingAscending ? 'asc' : 'desc');
    }

    return orderBy(filteredTours, iteratees, orders);
}