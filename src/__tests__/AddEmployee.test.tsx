import { fireEvent, render, screen } from '@testing-library/react';
import { EmployeeForm } from '../Components/EmployeeForm';
import { jest } from '@jest/globals';
import {store} from '../store'
import { Provider } from 'react-redux';

describe('EmployeeForm', () => {
  test('renders the Add Employee component', () => {
    const addEmployeeMock = jest.fn();
    render(<Provider store={store}><EmployeeForm onSubmit={addEmployeeMock} /></Provider>);
    const headingElement = screen.getByText('Add Employee');
    expect(headingElement).toBeInTheDocument();
  });
  test('checking if the add icon is clickable', () => {
    const onSubmitMock = jest.fn();
  
    render(
      <Provider store={store}>
        <EmployeeForm onSubmit={onSubmitMock} />
      </Provider>
    );
  
    const addIconElement = screen.getByTestId('add-icon');
    const clickMock = jest.fn();
    addIconElement.onclick = clickMock;
  
    fireEvent.click(addIconElement);
  
    expect(clickMock).toHaveBeenCalled();
  });
  

  test('opens the modal and adds employee data', () => {
    const onSubmitMock = jest.fn();

    render(
      <Provider store={store}>
        <EmployeeForm onSubmit={onSubmitMock} />
      </Provider>
    );

    const addIconElement = screen.getByTestId('add-icon');
    fireEvent.click(addIconElement);

    const nameInput = screen.getByLabelText('Name');
    const ageInput = screen.getByLabelText('Age');
    const departmentInput = screen.getByLabelText('Department');
    const salaryInput = screen.getByLabelText('Salary');
    const submitButton = screen.getByText('Add');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: '30' } });
    fireEvent.change(departmentInput, { target: { value: 'IT' } });
    fireEvent.change(salaryInput, { target: { value: '5000' } });
    // screen.debug()
    fireEvent.click(submitButton);
      
    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'John Doe',
      age: 30,
      department: 'IT',
      salary: 5000,
    });
  });
});
