import {render,screen} from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import TextArea from './TextArea';

it('should have a uppercase value to text area if the user press the button',()=>{
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const upperCaseBtn = screen.getByTestId('uppercase');
    fireEvent.change(textArea, {target: {value: 'abcde'}});
    fireEvent.click(upperCaseBtn);
    expect(textArea.value).toBe('ABCDE');
})

it('should have a lowercase value to text area if the user press the button',()=>{
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const upperCaseBtn = screen.getByTestId('lowercase');
    fireEvent.change(textArea, {target: {value: 'AVDD'}});
    fireEvent.click(upperCaseBtn);
    expect(textArea.value).toBe('avdd');
})

it('should have a titlecase value to text area if the user press the button',()=>{
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const upperCaseBtn = screen.getByTestId('titlecase');
    fireEvent.change(textArea, {target: {value: 'value'}});
    fireEvent.click(upperCaseBtn);
    expect(textArea.value).toBe('Value');
})