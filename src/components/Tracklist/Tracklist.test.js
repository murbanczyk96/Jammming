import Tracklist from './Tracklist';
import {screen, render, fireEvent} from '@testing-library/react';


test('renders a list of tracks', async () => {
   const mockTracks = [
       {id: '1', name: 'Track 1', album: 'Album 1', uri: 'spotify:track:1'},
       {id: '2', name: 'Track 2', album: 'Album 2', uri: 'spotify:track:2'},
   ];

 render(<Tracklist tracks={mockTracks} />);

 expect(screen.getByText('Track 1')).toBeInTheDocument();
 expect(screen.getByText('Track 2')).toBeInTheDocument();
});

test('calls addTrack when a track is added', async () => {
    const mockAddTrack = jest.fn();
    const mockTracks = [
        {id: '1', name: 'Track 1', album: 'Album 1', uri: 'spotify:track:1'},
    ];

    render(<Tracklist tracks={mockTracks} addTrack={mockAddTrack} />);
    fireEvent.click(screen.getByText('+'));

    expect(mockAddTrack).toHaveBeenCalledWith(mockTracks[0]);
});

test('calls removeTrack when a track is removed', async () => {
    const mockRemoveTrack = jest.fn();
    const mockTracks = [
        {id: '1', name: 'Track 1', album: 'Album 1', uri: 'spotify:track:1'},
    ];

    render(<Tracklist tracks={mockTracks} removeTrack={mockRemoveTrack} />);
    fireEvent.click(screen.getByText('-'));

    expect(mockRemoveTrack).toBeCalledWith(mockTracks[0]);
});