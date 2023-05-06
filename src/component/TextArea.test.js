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
    fireEvent.change(textArea, {target: {value: 'value input'}});
    fireEvent.click(upperCaseBtn);
    expect(textArea.value).toBe('Value Input');
})

it('should have a empty value to text area if the user press the button',()=>{
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const upperCaseBtn = screen.getByTestId('reset');
    fireEvent.change(textArea, {target: {value: 'value input'}});
    fireEvent.click(upperCaseBtn);
    expect(textArea.value).toBe('');
})

test('should have 5 characters in the textarea and output should display 5 letter', () => {
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const spanValue = screen.getByTestId('letter');
    fireEvent.change(textArea, {target: {value: 'value input'}});
    expect(spanValue.innerHTML).toBe("10");
})

test('should have 0 characters in the textarea and output should display 0 letter', () => {
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const spanValue = screen.getByTestId('letter');
    fireEvent.change(textArea, {target: {value: ''}});
    expect(spanValue.innerHTML).toBe("0");
})

test('should have 2 Words in the textarea and output should display 2 Words', () => {
    render(<TextArea/>);
    const textArea = screen.getByLabelText('textarea');
    const spanValue = screen.getByTestId('word');
    fireEvent.change(textArea, {target: {value: 'Value Input'}});
    expect(spanValue.innerHTML).toBe("2");
})