import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store';
test('renders the App component', () => {
    render(
        <Provider store={store} >
            <App />
        </Provider>
    );
    const headingElement = screen.getByText('Employee Details');
    expect(headingElement).toBeInTheDocument();
  });
  
  