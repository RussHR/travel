/* eslint-disable no-undef, quotes */
import { shallow } from 'enzyme';
import React from 'react';

import GygAssessmentApp from './GygAssessmentApp';

describe('<GygAssessmentApp />', () => {
    it('should render without any issues', () => {
        shallow(<GygAssessmentApp />);
    });
});