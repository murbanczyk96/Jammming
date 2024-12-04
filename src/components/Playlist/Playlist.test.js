import {screen, render} from "@testing-library/react";
import Playlist from "./Playlist";


test('renders tracks in playlist', () => {
    const mockResults = [
        {id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1'},
        {id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2'},
    ];

    render(<Playlist playlistTracks={mockResults}/>);
    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Track 2')).toBeInTheDocument();
    expect(screen.getByText(/Artist 2/)).toBeInTheDocument();
});

test('renders playlistname', async () => {
    const mockPlaylistName = 'PlaylistName';

    render(<Playlist playlistName={mockPlaylistName}/>);
    expect(screen.getByDisplayValue('PlaylistName')).toBeInTheDocument();
});

