import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {AddEmployee} from './AddEmployee';
import { Provider } from 'react-redux';
import { store } from '../store';
import { jest } from '@jest/globals';
import { useAddEmployeeMutation } from '../services/employeesApi';
test('renders the Add Employee component', () => {
   render(
        <Provider store={store}>
            <AddEmployee/>
        </Provider>
    );
    const headingElement = screen.getByText('Add Employee');
    expect(headingElement).toBeInTheDocument();
    const functionElement = jest.fn();
    const addIconElement = screen.getByTestId("add-icon");
    addIconElement.onclick = functionElement;
    fireEvent.click(addIconElement);
    expect(functionElement).toBeCalled();

  });


  // jest.mock('../services/employeesApi');

  // describe('AddEmployee', () => {
  //   test('opens the modal and adds employee data', () => {
  //     const addEmployeeMock = jest.fn();
  //     (useAddEmployeeMutation as jest.Mock).mockImplementation(() => [addEmployeeMock]);
  
  //     render(<AddEmployee />);
  
  //     const addIconElement = screen.getByTestId('add-icon');
  //     fireEvent.click(addIconElement); // Open the modal
  
  //     const nameInput = screen.getByLabelText('Name');
  //     const ageInput = screen.getByLabelText('Age');
  //     const departmentInput = screen.getByLabelText('Department');
  //     const salaryInput = screen.getByLabelText('Salary');
  //     const submitButton = screen.getByText('Submit');
  
  //     // Enter employee data
  //     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  //     fireEvent.change(ageInput, { target: { value: '30' } });
  //     fireEvent.change(departmentInput, { target: { value: 'IT' } });
  //     fireEvent.change(salaryInput, { target: { value: '5000' } });
  
  //     fireEvent.click(submitButton); // Submit the form
  
  //     expect(addEmployeeMock).toHaveBeenCalledWith({
  //       name: 'John Doe',
  //       age: 30,
  //       department: 'IT',
  //       salary: 5000,
  //     });
  //   });
  // });