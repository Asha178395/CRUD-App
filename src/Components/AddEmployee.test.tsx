import { fireEvent, render, screen,waitForElementToBeRemoved,waitFor} from '@testing-library/react';
import {AddEmployee} from './AddEmployee';
import { jest } from '@jest/globals';

describe('AddEmployee', () => {
test('renders the Add Employee component', () => {
  const addEmployeeMock = jest.fn();
   render(
            <AddEmployee addEmployee={addEmployeeMock}/>
    );
    const headingElement = screen.getByText('Add Employee');
    expect(headingElement).toBeInTheDocument();
    

  });
  test('checking button can be clicked or not', () => {
    const addEmployeeMock = jest.fn();
     render(
              <AddEmployee addEmployee={addEmployeeMock}/>
      );
      
      const functionElement = jest.fn();
      const addIconElement = screen.getByTestId("add-icon");
      addIconElement.onclick = functionElement;
      fireEvent.click(addIconElement);
      expect(functionElement).toBeCalled();
  
    });


  jest.mock('../services/employeesApi');
 
    test('opens the modal and adds employee data', () => {
      const addEmployeeMock = jest.fn();
  
      render(<AddEmployee addEmployee={addEmployeeMock}/>);
  
      const addIconElement = screen.getByTestId('add-icon');
      fireEvent.click(addIconElement); 
  
      const nameInput = screen.getByLabelText('Name');
      const ageInput = screen.getByLabelText('Age');
      const departmentInput = screen.getByLabelText('Department');
      const salaryInput = screen.getByLabelText('Salary');
      const submitButton = screen.getByText('Submit');
  
     
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(ageInput, { target: { value: '30' } });
      fireEvent.change(departmentInput, { target: { value: 'IT' } });
      fireEvent.change(salaryInput, { target: { value: '5000' } });
  
      fireEvent.click(submitButton); 
      expect(addEmployeeMock).toHaveBeenCalledWith({
        name: 'John Doe',
        age: 30,
        department: 'IT',
        salary: 5000,
      });
    });
  });


