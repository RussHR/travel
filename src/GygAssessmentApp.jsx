import React, { Component } from 'react';

import mockData from './data/mockData';

/**
 * Main app.
 */
export default class GygAssessmentApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tours: []
        };
    }

    /*
     * Makes a fake API call soon after mounting.
     */
    componentDidMount() {
        this.fetchInitialData();
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
        return (
            <div>GygAssessmentApp</div>
        );
    }
}