import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
 * React element for a tour in the list.
 */
const TourListItem = ({ tour }) => {
    const { title, currency, price, rating, isSpecialOffer } = tour;

    const tourListItemClassNames = classNames('TourList__tourListItem', {
        'TourList__tourListItem--special': isSpecialOffer
    });

    return (
        <li data-qa="tour-list-item" className={tourListItemClassNames}>
            <span className="TourList__tourCopy">
                {/* Very dangerous! */}
                <span
                    className="TourList__tourName"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <br />
                {`${currency}${price} - ${rating} / 5`}
                {isSpecialOffer && (<Fragment><br /><span className="TourList__isSpecial">SPECIAL</span></Fragment>)}
            </span>
            <button type="button" onClick={openTourDetails} className="TourList__showDetails">Details</button>
        </li>
    );
};

/*
 * Ideally opens a pane for the "tour details". At the moment, just opens GYG in a new tab.
 *
 * @return {undefined}
 */
const openTourDetails = () => {
    window.open('https://www.getyourguide.com/');
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