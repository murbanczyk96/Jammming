import Spotify from './Spotify';
import {render, screen, fireEvent} from "@testing-library/react";

test('return access token', async () => {
    delete global.window.location;
    global.window.location = {href: 'http://localhost/#access_token=test_token&expires_in=3600'};
    const token = Spotify.getAccessToken();

    expect(token).toBe('test_token');
});

test('searches for tracks', async () => {
    const mockFetch = jest.spyOn(global, "fetch").mockResolvedValue({
        ok:true,
        json: jest.fn().mockResolvedValue({tracks: { items: [] } }),
    });

    await Spotify.searchSpotify('test');

    expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('https://api.spotify.com/v1/search?type=track&q=test'),
        expect.any(Object)
    );
    mockFetch.mockRestore();
});

test('creates a playlist', async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
        ok:true,
        json: jest.fn().mockResolvedValue({id: 'new_playlist_id'}),
    });

    const playlistId = await Spotify.createPlaylist('user_id', 'My Playlist');
    expect(playlistId).toEqual('new_playlist_id');
    mockFetch.mockRestore();
})