const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenMatch && expiresInMatch) {
            accessToken = tokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");

            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    async searchSpotify(term) {
        const accessToken = this.getAccessToken();
        const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("failed to fetch search results from spotify");
        }

        const jsonResponse = await response.json();
        if (!jsonResponse.tracks || !jsonResponse.tracks.items) {
            return [];
        }

        return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
        }));

    },

    async getUserId() {
        const accessToken = this.getAccessToken();
        const endpoint = 'https://api.spotify.com/v1/me';

        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user id");
        }

        const jsonResponse = await response.json();
        return jsonResponse.id;
    },

    async createPlaylist(userId, playlistName) {
        const accessToken = this.getAccessToken();
        const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: playlistName,
                description: 'Created with Jammming App'
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to create playlist");
        }

        const jsonResponse = await response.json();
        return jsonResponse.id; //id playlisty
    },

    async addTracksToPlaylist(userId, playlistId, trackUris) {
        const accessToken = this.getAccessToken();
        const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uris: trackUris,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to add tracks to playlist");
        }

        return response.json();
    },

    async savePlaylist(playlistName, trackUris) {
        if (!playlistName || !trackUris) {
            return;
        }
        try {
            const userId = await this.getUserId();
            const playlistId = await this.createPlaylist(userId, playlistName);
            await this.addTracksToPlaylist(userId, playlistId, trackUris);
            console.log('Playlist created and saved!');
        } catch (error) {
            console.error('Error creating and saving playlist', error);
        }
    },
};


export default Spotify;