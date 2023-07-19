import { render, fireEvent } from '@testing-library/react';
import { useDeleteEmployeeMutation } from '../services/employeesApi';
import { DisplayEmployee } from '../Components/DisplayEmployee';
import {store} from '../store'
import { Provider } from 'react-redux';


describe('DeleteEmployee', () => {
  
  test('calls useDeleteEmployeeMutation when trash icon is clicked', () => {
    const deleteEmployeeMock = jest.fn();
    const employees = [
      {
        id: 1,
        name: 'John Doe',
        department: 'IT',
        salary: 5000,
        age: 30,
      },
    ];

    jest
      .spyOn(require('../services/employeesApi'), 'useEmployeesQuery')
      .mockReturnValue({
        data: employees,
        error: null,
        isLoading: false,
        isFetching: false,
        isSuccess: true,
      });

    jest
      .spyOn(require('../services/employeesApi'), 'useDeleteEmployeeMutation')
      .mockReturnValue([deleteEmployeeMock]);

    const { getByTestId } = render(<Provider store={store}><DisplayEmployee /></Provider>);

    const trashIconElement = getByTestId('trash-icon');
    fireEvent.click(trashIconElement);

    expect(deleteEmployeeMock).toHaveBeenCalledWith(1);
  });
});
