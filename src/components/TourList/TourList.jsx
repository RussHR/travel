import React from 'react';
import PropTypes from 'prop-types';

import { values } from 'lodash';

import sortModes from '../../constants/sortModes';
import { filterAndSortTours } from '../../helpers/tours';

import TourListItem from './TourListItem';

import './tour_list.scss';

/**
 * Contains a list of tours.
 */
const TourList = ({ tours, searchTerm, sortMode }) => {

    const sortedTours = filterAndSortTours({ tours, searchTerm, sortMode });

    let tourListContents;

    if (sortedTours.length === 0) {
        tourListContents = <span>Sorry, there are no tours matching your search!</span>;
    } else {
        tourListContents = (
            <ul className="TourList__list">
                {sortedTours.map((tour) => <TourListItem tour={tour} key={tour.title} />)}
            </ul>
        );
    }

    return (
        <section>
            {tourListContents}
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