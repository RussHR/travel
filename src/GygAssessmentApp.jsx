import React, { Component } from 'react';

import mockData from './data/mockData';

import SearchCriteria from './components/SearchCriteria';
import TourList from './components/TourList';

/**
 * Main app. Houses API logic.
 */
export default class GygAssessmentApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tours: [],
            searchTerm: ''
        };

        this.setSearchTerm = this.setSearchTerm.bind(this);
    }

    /*
     * Makes a fake API call soon after mounting.
     */
    componentDidMount() {
        this.fetchInitialData();
    }

    /*
     * Sets the search term to filter by.
     *
     * @param {object} e - DOM event when text input is changed
     * @param {object} e.currentTarget - input (search term) that the change occurs in
     * @return {undefined}
     */
    setSearchTerm({ currentTarget }) {
        const searchTerm = currentTarget.value;
        this.setState(() => ({ searchTerm }));
    }

    /*
     * Makes the fake API call to retrieve initial data for tours.
     *
     * @return {undefined}
     */
    fetchInitialData() {
        const fetchDataPromise = new Promise((resolve, reject) => {
            // mocking an API call and currently assuming a 200 response
            setTimeout(resolve, Math.random() * 3000, JSON.parse(mockData));
        });

        fetchDataPromise.then(({ tours }) => {
            if (!tours) {
                return Promise.reject(new Error('"tours" not present in top level of data'));
            }

            this.setState({ tours });

        }).catch(() => {
            // handle error
        });
    }

    render() {
        const { tours, searchTerm } = this.state;

        return (
            <main>
                <SearchCriteria onChangeSearchTerm={this.setSearchTerm} />
                <TourList tours={tours}searchTerm={searchTerm} />
            </main>
        );
    }
}