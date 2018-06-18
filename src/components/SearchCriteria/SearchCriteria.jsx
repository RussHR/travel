import React from 'react';
import PropTypes from 'prop-types';

/*
 * Includes the input for search.
 */
const SearchCriteria = ({ onChangeSearchTerm }) => {
    return (
        <section>
            <label htmlFor="search-term">Search: </label>
            <input id="search-term" type="text" onChange={onChangeSearchTerm} data-qa="search-criteria-search-term" />
        </section>
    );
};

SearchCriteria.propTypes = {
    /* Called every time the text input changes to filter tours that match text */
    onChangeSearchTerm: PropTypes.func.isRequired
};

export default SearchCriteria;