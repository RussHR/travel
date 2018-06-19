import React from 'react';

import './tours_loading.scss';

/*
 * Loading icon when the tours are being initially fetched.
 */
const ToursLoading = () => {
    return (
        <span className="ToursLoading">
            <span className="ToursLoading__ring">&#9676;</span><br />Loading...
        </span>
    );
};

export default ToursLoading;