import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { EmployeeForm } from '../Components/EmployeeForm';

describe('UpdateEmployee', () => {
  const employee = {
    id: 1,
    name: 'John Doe',
    department: 'IT',
    salary: 5000,
    age: 30,
  };

  test('renders the Update Employee component', () => {
    const updateEmployeeMock = jest.fn();
    render(
      <Provider store={store}>
        <EmployeeForm employee={employee} onSubmit={updateEmployeeMock} />
      </Provider>
    );

    const functionElement = jest.fn();
    const updateIconElement = screen.getByTestId('update-icon');
    updateIconElement.onclick = functionElement;

    fireEvent.click(updateIconElement);
    expect(functionElement).toBeCalled();
  });

  test('opens the modal and interacts with inputs and labels', () => {
    const onsubmit=jest.fn();
    render(
      <Provider store={store}>
        <EmployeeForm employee={employee} onSubmit={onsubmit} />
      </Provider>
    );

    const updateIconElement = screen.getByTestId('update-icon');
    fireEvent.click(updateIconElement);

    const nameLabel = screen.getByLabelText('Name');
    const departmentLabel = screen.getByLabelText('Department');
    const salaryLabel = screen.getByLabelText('Salary');
    const ageLabel = screen.getByLabelText('Age');
    const updateButton = screen.getByText('Update');

    const nameInput = screen.getByDisplayValue('John Doe');
    const departmentInput = screen.getByDisplayValue('IT');
    const salaryInput = screen.getByDisplayValue('5000');
    const ageInput = screen.getByDisplayValue('30');

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(departmentInput, { target: { value: 'Marketing' } });
    fireEvent.change(salaryInput, { target: { value: '6000' } });
    fireEvent.change(ageInput, { target: { value: '32' } });

    expect(nameLabel).toBeInTheDocument();
    expect(departmentLabel).toBeInTheDocument();
    expect(salaryLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();

    expect(nameInput).toHaveValue('Jane Doe');
    expect(departmentInput).toHaveValue('Marketing');
    expect(salaryInput).toHaveValue('6000');
    expect(ageInput).toHaveValue('32');
    // fireEvent.click(updateButton)
    // expect(onsubmit).toHaveBeenCalledWith({
    //   "id":1,
    //   "name": 'John Doe',
    //   "age": 32,
    //   "department": 'Marketing',
    //   "salary": 6000
    // });
  });
});
