/* eslint-disable no-undef, quotes */
import { shallow } from 'enzyme';
import React from 'react';

import ToursLoading from './ToursLoading';

describe('<ToursLoading />', () => {
    it('should render without any issues', () => {
        shallow(<ToursLoading />);
    });
});
