import React from 'react';
import PropTypes from 'prop-types';

/**
 * Contains a list of tours.
 */
const TourList = ({ tours }) => {
    return (
        <section>
            <ul>
                {/* Preferrably, an id would be used rather than index */}
                {tours.map(({ title, price, currency, rating, isSpecialOffer }, i) => (
                    <li key={i} data-qa="tour-list-item">
                        {title}
                        {currency}{price}
                        {rating}
                        {isSpecialOffer && 'special'}
                        <button type="button">Details</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

TourList.propTypes = {
    /* List of tours user may be interested in */
    tours: PropTypes.arrayOf(PropTypes.shape({
        /* Name of the tour */
        title: PropTypes.string.isRequired,
        /* Numeric price of the tour*/
        price: (props, propName, componentName) => {
            const price = parseInt(props[propName], 10);
            if (typeof price !== 'number' || price < 0) {
                return new Error(`Invalid prop ${propName} of value ${price} supplied to ${componentName}`);
            }
        },
        /* Currency of the tour */
        currency: PropTypes.string.isRequired,
        /* Rating of the tour as a float from a scale of 1 (?) to 5 */
        rating: (props, propName, componentName) => {
            const rating = parseFloat(props[propName]);
            if (typeof rating !== 'number' || rating < 0 || rating > 5) {
                return new Error(`Invalid prop ${propName} of value ${rating} supplied to ${componentName}`);
            }
        },
        /* Whether the tour is a special offer */
        isSpecialOffer: PropTypes.bool.isRequired
    })).isRequired
};

export default TourList;