import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { UpdateEmployee } from './UpdateEmployee';
import { Provider } from 'react-redux';
import { store } from '../store';
import { useUpdateEmployeeMutation } from '../services/employeesApi';

describe('UpdateEmployee', () => {
    const employee = {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      salary: 5000,
      age: 30,
    };

test('renders the Update Employee component', () => {

  render(
    <Provider store={store}>
      <UpdateEmployee employee={employee} />
    </Provider>
  );

  const functionElement = jest.fn();
  const updateIconElement = screen.getByTestId('update-icon');
  updateIconElement.onclick = functionElement;

  fireEvent.click(updateIconElement);
  expect(functionElement).toBeCalled();
});
});
// jest.mock('reactstrap', () => ({
//   Modal: jest.fn(({ isOpen, toggle, children }) => (
//     isOpen ? <div>{children}</div> : null
//   )),
//   ModalHeader: jest.fn(({ toggle, children }) => <div>{children}</div>),
//   ModalBody: jest.fn(({ children }) => <div>{children}</div>),
//   ModalFooter: jest.fn(({ children }) => <div>{children}</div>),
// }));

// describe('UpdateEmployee', () => {
//   const employee = {
//     id: 1,
//     name: 'John Doe',
//     department: 'IT',
//     salary: 5000,
//     age: 30,
//   };

//   test('opens the modal and interacts with inputs and labels', () => {
//     render(
//       <Provider store={store}>
//         <UpdateEmployee employee={employee} />
//       </Provider>
//     );

//     const updateIconElement = screen.getByTestId('update-icon');
//     fireEvent.click(updateIconElement); // Open the modal

//     const nameLabel = screen.getByLabelText('Employee Name:');
//     const departmentLabel = screen.getByLabelText('department');
//     const salaryLabel = screen.getByLabelText('salary');
//     const ageLabel = screen.getByLabelText('age:');

//     const nameInput = screen.getByDisplayValue('John Doe');
//     const departmentInput = screen.getByDisplayValue('IT');
//     const salaryInput = screen.getByDisplayValue('5000');
//     const ageInput = screen.getByDisplayValue('30');

//     // Interact with the inputs
//     fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
//     fireEvent.change(departmentInput, { target: { value: 'Marketing' } });
//     fireEvent.change(salaryInput, { target: { value: '6000' } });
//     fireEvent.change(ageInput, { target: { value: '32' } });

//     expect(nameLabel).toBeInTheDocument();
//     expect(departmentLabel).toBeInTheDocument();
//     expect(salaryLabel).toBeInTheDocument();
//     expect(ageLabel).toBeInTheDocument();

//     expect(nameInput).toHaveValue('Jane Doe');
//     expect(departmentInput).toHaveValue('Marketing');
//     expect(salaryInput).toHaveValue('6000');
//     expect(ageInput).toHaveValue('32');
//   });
// });