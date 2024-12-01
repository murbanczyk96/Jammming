const clientId = 'b983a1fc69ca4d0fa692e64e96bd092f';
const redirectUri = 'http://192.168.3.15:3000';
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
        console.log(jsonResponse.tracks.items);

        return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
        }));

    },
};


export default Spotify;