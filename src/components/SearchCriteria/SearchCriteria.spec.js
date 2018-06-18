/* eslint-disable no-undef, quotes */
import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import { noop } from 'lodash';
import { spy } from 'sinon';

import SearchCriteria from './SearchCriteria';

describe('<SearchCriteria />', () => {
    it('should render without any issues', () => {
        shallow(<SearchCriteria onChangeSearchTerm={noop} />);
    });

    it('calls its onChangeSearchTerm when the value of the text input changes', () => {
        // create a spy, pass along as prop
        const onChangeSearchTerm = spy();
        const wrapper = shallow(<SearchCriteria onChangeSearchTerm={onChangeSearchTerm} />);

        // change value of input
        wrapper.find('[data-qa="search-criteria-search-term"]').simulate('change', { target: { value: 'Berlin' } });

        // verify onChangeSearchTerm was called
        expect(onChangeSearchTerm.calledOnce).to.be.true;
    });
});