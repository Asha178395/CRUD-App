import { render, fireEvent } from '@testing-library/react';
import { DeleteEmployee } from './DeleteEmployee';


jest.mock('../services/employeesApi', () => ({
  useDeleteEmployeeMutation: jest.fn(),
}));

describe('DeleteEmployee', () => {
  test('calls useDeleteEmployeeMutation when trash icon is clicked', () => {
    const deleteEmployeeMock = jest.fn();
    
    jest
      .spyOn(require('../services/employeesApi'), 'useDeleteEmployeeMutation')
      .mockReturnValue([deleteEmployeeMock]);

    const {getByTestId} = render(<DeleteEmployee id={1} />);

    const trashIconElement = getByTestId('trash-icon');
    fireEvent.click(trashIconElement);

    expect(deleteEmployeeMock).toHaveBeenCalledWith(1);
  });
});

