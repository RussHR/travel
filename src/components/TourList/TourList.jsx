import React from 'react';
import PropTypes from 'prop-types';

import { filter, orderBy, values } from 'lodash';

import sortModes from '../../constants/sortModes';
import { filterAndSortTours } from '../../helpers/tours';

import TourListItem from './TourListItem';

/**
 * Contains a list of tours.
 */
const TourList = ({ tours, searchTerm, sortMode }) => {

    const sortedTours = filterAndSortTours({ tours, searchTerm, sortMode });

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