import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddEmployee: React.FC<{ addEmployee: any }> = ({addEmployee}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | string>('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState<number | string>('');
  // const [addEmployee] = useAddEmployeeMutation();

  const handleOpenModal = () => {
    setName('');
    setAge('');
    setSalary('');
    setDepartment('');
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(event.target.value);
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      age: Number(age),
      department: department,
      salary: Number(salary)
    };
    addEmployee(data);
    handleCloseModal();
  };

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <FontAwesomeIcon
          data-testid="add-icon"
          icon={faPlus}
          onClick={handleOpenModal}
          className="addicon"
        />
        <p>Add Employee</p>
      </div>
      <Modal isOpen={isOpen} toggle={handleCloseModal}>
        <ModalHeader className="modal-header" toggle={handleCloseModal}>
          Enter Employee Details
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor="name-input">Name</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  id="name-input"
                  value={name}
                  onChange={handleInputChange}
                  className="ml-1"
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor="age-input">Age</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  id="age-input"
                  value={age}
                  onChange={handleAgeChange}
                  className="ml-1"
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor="department-input">Department</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  id="department-input"
                  value={department}
                  onChange={handleDepartmentChange}
                  className="ml-1"
                />
              </div>
            </div>
            <div className="add-employee-col">
              <div className="employee-form-label">
                <label htmlFor="salary-input">Salary</label>
              </div>
              <div className="employee-form-control">
                <input
                  type="text"
                  id="salary-input"
                  value={salary}
                  onChange={handleSalaryChange}
                  className="ml-1"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="button-background-color" onClick={handleSubmit}>
            Submit
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
