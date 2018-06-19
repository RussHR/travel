import React from 'react';
import PropTypes from 'prop-types';

import { filter, orderBy, values } from 'lodash';

import sortModes from '../../constants/sortModes';

import TourListItem from './TourListItem';

/**
 * Contains a list of tours.
 */
const TourList = ({ tours, searchTerm, sortMode }) => {

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

    const sortedTours = orderBy(filteredTours, iteratees, orders);

    return (
        <section>
            <ul>
                {sortedTours.map((tour) => <TourListItem tour={tour} key={tour.title} />)}
            </ul>
        </section>
    );
};

TourList.propTypes = {
    /* List of tours user may be interested in */
    tours: PropTypes.arrayOf(PropTypes.object).isRequired,
    /* Term to filter the tours by */
    searchTerm: PropTypes.string.isRequired,
    /* Whether to not sort, or to sort by price */
    sortMode: PropTypes.oneOf(values(sortModes)).isRequired
};

export default TourList;