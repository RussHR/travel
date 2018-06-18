import React from 'react';
import PropTypes from 'prop-types';

import { filter, sortBy } from 'lodash';

import TourListItem from './TourListItem';

/**
 * Contains a list of tours.
 */
const TourList = ({ tours, searchTerm }) => {

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
    const sortedTours = sortBy(filteredTours, tour => !tour.isSpecialOffer);

    return (
        <section>
            <ul>
                {/* Preferrably, an id would be used rather than index */}
                {sortedTours.map((tour, i) => <TourListItem tour={tour} key={i} />)}
            </ul>
        </section>
    );
};

TourList.propTypes = {
    /* List of tours user may be interested in */
    tours: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default TourList;