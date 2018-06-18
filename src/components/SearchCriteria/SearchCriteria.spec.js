/* eslint-disable no-undef, quotes */
import { shallow } from 'enzyme';
import React from 'react';

import SearchCriteria from './SearchCriteria';

describe('<SearchCriteria />', () => {
    it('should render without any issues', () => {
        shallow(<SearchCriteria />);
    });
});