import App from './App';
import {render, screen} from '@testing-library/react';

test('renders main components', () => {
    render(<App />);
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByDisplayValue(/playlist/i)).toBeInTheDocument();
    expect(screen.getByText(/search results/i)).toBeInTheDocument();
    expect(screen.getByText(/save to spotify/i)).toBeInTheDocument();
});

