// SearchBar.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../index';

describe('SearchBar component', () => {
  it('should render the search input', () => {
    const { getByPlaceholderText } = render(<SearchBar onSearch={() => {}} />);
    const inputElement = getByPlaceholderText('Type to search...');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onSearch function when the input value changes', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = getByPlaceholderText('Type to search...');
    
    fireEvent.change(inputElement, { target: { value: 'search text' } });
    
    expect(onSearchMock).toHaveBeenCalledWith('search text');
  });
  
  // Test that the onSearch function is not called when the input value is empty.
  it('should not call onSearch when the input value is empty', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={onSearchMock} />);
    const inputElement = getByPlaceholderText('Type to search...');
   
    fireEvent.change(inputElement, { target: { value: '' } });
   
    expect(onSearchMock).not.toHaveBeenCalled();
  });
});
