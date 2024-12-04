import {render, screen, fireEvent} from "@testing-library/react";
import SearchResults from "./SearchResults";



test('renders list of tracks', ()=>{
   const mockResults = [
       {id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1' },
       {id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2' },
   ];

   render(<SearchResults searchResults={mockResults} />);

   expect(screen.getByText('Track 1')).toBeInTheDocument();
   expect(screen.getByText('Track 2')).toBeInTheDocument();
   expect(screen.getByText(/Artist 2/)).toBeInTheDocument();
   expect(screen.getByText(/Album 2/)).toBeInTheDocument();

});