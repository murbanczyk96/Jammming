import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('calls onSearch when Search button is clicked', () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'test'}});
    fireEvent.click(screen.getByText(/search/i));

    expect(onSearchMock).toHaveBeenCalledWith('test');
})

test('allows the user to input text', async () => {
   render(<SearchBar onSearch={jest.fn()} />);
   const input = screen.getByRole('textbox');

   fireEvent.change(input, { target: {value: 'test input'}});

   expect(input.value).toBe('test input');

});

test('does not call onSearch when input have less than 3 signs', async () => {
    const onSearchMock = jest.fn();
    render(<SearchBar onSearch={onSearchMock} />);

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'aa'}});
    fireEvent.click(screen.getByText(/search/i));

    expect(onSearchMock).not.toHaveBeenCalled();
});

