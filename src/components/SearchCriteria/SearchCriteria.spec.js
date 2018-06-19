/* eslint-disable no-undef, quotes */
import { shallow } from 'enzyme';
import React from 'react';
import { expect } from 'chai';
import { noop } from 'lodash';
import { spy } from 'sinon';

import sortModes from '../../constants/sortModes';

import SearchCriteria from './SearchCriteria';

describe('<SearchCriteria />', () => {
    it('should render without any issues', () => {
        shallow(<SearchCriteria onChangeSearchTerm={noop} onChangeSortMode={noop} />);
    });

    it('calls its onChangeSearchTerm when the value of the text input changes', () => {
        // create a spy, pass along as prop
        const onChangeSearchTerm = spy();
        const wrapper = shallow(<SearchCriteria onChangeSearchTerm={onChangeSearchTerm} onChangeSortMode={noop} />);

        // change value of input
        wrapper.find('[data-qa="search-criteria-search-term"]').simulate('change', { target: { value: 'Berlin' } });

        // verify onChangeSearchTerm was called
        expect(onChangeSearchTerm.calledOnce).to.be.true;
    });

    it('calls its onChangeSortMode when the value of sort mode select changes', () => {
        // create a spy, pass along as prop
        const onChangeSortMode = spy();
        const wrapper = shallow(<SearchCriteria onChangeSearchTerm={noop} onChangeSortMode={onChangeSortMode} />);

        // change value of select
        const select = wrapper.find('[data-qa="search-criteria-sort-mode"]');
        select.simulate('change', { target: { value: sortModes.priceAscending } });

        // verify onChangeSortMode was called
        expect(onChangeSortMode.calledOnce).to.be.true;
    });
});