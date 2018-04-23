import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { withOnChangeString } from '../OnChangeHoC';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Obtain all Props from HTMLInputElement
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// Simple component returns HTMLInputElement
const SimpleInput: React.StatelessComponent<InputProps> = ({...props}: InputProps) => <input className="input" {...props} />;

// Wrap SimpleInput with HoC
const SimplerInput = withOnChangeString<InputProps>(SimpleInput);

describe('withOnChangeString', () => {
    it('simulates input events', () => {
        const onChange = jasmine.createSpy('onChange');
        const wrapper = mount(
            <SimplerInput onChange={onChange} />
        );
        wrapper.find(SimplerInput).simulate('change', { target: { value: 'hi' } });
        expect(onChange).toHaveBeenCalledWith('hi');
    });
});