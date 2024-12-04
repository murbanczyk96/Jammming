import {render, screen, fireEvent} from '@testing-library/react';
import Track from './Track';

test('renders treack details', () => {
   const track = {name: 'Track 1', artist: 'Artist 1', album: 'Album 1'}

   render(<Track track={track} />);

   expect(screen.getByText('Track 1')).toBeInTheDocument();
   expect(screen.getByText(/Artist 1/)).toBeInTheDocument();
   expect(screen.getByText(/Album 1/)).toBeInTheDocument();
});

test('calls onAdd when add button is clicked', () => {
   const mockAddTrack = jest.fn();
   const track = {name: 'Track 1', artist: 'Artist 1', album: 'Album 1'}

    render(<Track track={track} addTrack={mockAddTrack} />);
   fireEvent.click(screen.getByText('+'));

   expect(mockAddTrack).toHaveBeenCalledWith(track);
});

test('calls onRemove when remove button is clicked', () => {
    const mockRemoveTrack = jest.fn();
    const track = {name: 'Track 1', artist: 'Artist 1', album: 'Album 1'};

    render(<Track track={track} removeTrack={mockRemoveTrack} />);
    fireEvent.click(screen.getByText('-'));

    expect(mockRemoveTrack).toHaveBeenCalledWith(track);
})