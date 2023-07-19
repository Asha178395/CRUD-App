import { render, waitFor, screen } from '@testing-library/react';
import { DisplayEmployee } from '../Components/DisplayEmployee';
import { store } from '../store';
import { Provider } from 'react-redux';



// jest.mock('../services/employeesApi', () => ({
//   useEmployeesQuery: jest.fn(),
// }));


describe('DisplayEmployee', () => {
  test('renders loading state', () => {
    const mockUseEmployeesQuery = jest.fn();
    mockUseEmployeesQuery.mockReturnValue({
      isLoading: true,
    });
    require('../services/employeesApi').useEmployeesQuery = mockUseEmployeesQuery;

    render(<Provider store={store}><DisplayEmployee /></Provider>);

    expect(screen.getByText('...Loading')).toBeInTheDocument();
  });

  test('renders error state', () => {
    const mockUseEmployeesQuery = jest.fn();
    mockUseEmployeesQuery.mockReturnValue({
      isLoading: false,
      error: true,
    });
    require('../services/employeesApi').useEmployeesQuery = mockUseEmployeesQuery;

    render(<Provider store={store}><DisplayEmployee /></Provider>);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
  test('renders fetching state', () => {
    const mockUseEmployeesQuery = jest.fn();
    mockUseEmployeesQuery.mockReturnValue({
      isLoading: false,
      error:false,
      isFetching:true
    });
    require('../services/employeesApi').useEmployeesQuery = mockUseEmployeesQuery;

    render(<Provider store={store}><DisplayEmployee /></Provider>);

    expect(screen.getByText('...Fetching')).toBeInTheDocument();
  });


  test('renders success state with employee data', async () => {
    const mockData = [
      {
        id: 1,
        name: 'John Doe',
        age: 30,
        salary: 50000,
        department: 'IT',
      }
    
    ];

    const mockUseEmployeesQuery = jest.fn();
    mockUseEmployeesQuery.mockReturnValue({
      isLoading: false,
      error: false,
      isSuccess: true,
      data: mockData,
    });
   require('../services/employeesApi').useEmployeesQuery = mockUseEmployeesQuery;

    render(
      <Provider store={store}>
    <DisplayEmployee />
    </Provider>);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('30')).toBeInTheDocument();
      expect(screen.getByText('50000')).toBeInTheDocument();
      expect(screen.getByText('IT')).toBeInTheDocument();
    });
  });
});
