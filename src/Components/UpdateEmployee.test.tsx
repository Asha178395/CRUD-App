import { fireEvent, render, screen } from '@testing-library/react';
import { UpdateEmployee } from './UpdateEmployee';
import { Provider } from 'react-redux';
import { store } from '../store';


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
      <UpdateEmployee employee={employee}/>
    </Provider>
  );

  const functionElement = jest.fn();
  const updateIconElement = screen.getByTestId('update-icon');
  updateIconElement.onclick = functionElement;

  fireEvent.click(updateIconElement);
  expect(functionElement).toBeCalled();
});

  test('opens the modal and interacts with inputs and labels', () => {
    render(
      <Provider store={store}>
        <UpdateEmployee employee={employee} />
      </Provider>
    );

    const updateIconElement = screen.getByTestId('update-icon');
    fireEvent.click(updateIconElement); 

    const nameLabel = screen.getByLabelText('Employee Name');
    const departmentLabel = screen.getByLabelText('Department');
    const salaryLabel = screen.getByLabelText('Salary');
    const ageLabel = screen.getByLabelText('Age');

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
  });

});