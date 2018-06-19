import React from 'react';
import PropTypes from 'prop-types';

import sortModes from '../../constants/sortModes';

/*
 * Includes the input for search.
 */
const SearchCriteria = ({ onChangeSearchTerm, onChangeSortMode }) => {
    return (
        <section>
            <label htmlFor="search-term">Search: </label>
            <input id="search-term" type="text" onChange={onChangeSearchTerm} data-qa="search-criteria-search-term" />
            <label htmlFor="sort-mode">Sort by: </label>
            <select id="sort-mode" name="sort-mode" data-qa="search-criteria-sort-mode" onChange={onChangeSortMode}>
                <option value={sortModes.recommended}>Recommended</option>
                <option value={sortModes.priceAscending}>Price - Lowest</option>
                <option value={sortModes.priceDescending}>Price - Highest</option>
                <option value={sortModes.ratingAscending}>Rating - Lowest</option>
                <option value={sortModes.ratingDescending}>Rating - Highest</option>
            </select>
        </section>
    );
};

SearchCriteria.propTypes = {
    /* Called every time the text input changes to filter tours that match text */
    onChangeSearchTerm: PropTypes.func.isRequired,
    /* Changes whether to not sort the tours or to sort by price */
    onChangeSortMode: PropTypes.func.isRequired
};

export default SearchCriteria;