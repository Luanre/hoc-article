import * as React from 'react';
import { OnChangeWrapper } from '../OnChangeWrapper';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('OnChangeWrapper', () => {
    it('simulates input events', () => {
        const onChange = jasmine.createSpy('onChange');
        const wrapper = shallow(
            <OnChangeWrapper onChange={onChange}>
                <input className="input" />
            </OnChangeWrapper>
        );
        wrapper.find('.input').simulate('change', { target: { value: 'hi' } });
        expect(onChange).toHaveBeenCalledWith('hi');
    });
});