import React from 'react';
import PropTypes from 'prop-types';

const TourListItem = ({ tour }) => {
    const { title, currency, price, rating, isSpecialOffer } = tour;

    return (
        <li data-qa="tour-list-item">
            {title}
            {currency}{price}
            {rating}
            {isSpecialOffer && 'special'}
            <button type="button">Details</button>
        </li>
    );
};

TourListItem.propTypes = {
    tour: PropTypes.shape({
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
    }).isRequired
};

export default TourListItem;