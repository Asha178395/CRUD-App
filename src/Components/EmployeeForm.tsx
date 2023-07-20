import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useUpdateEmployeeMutation } from '../services/employeesApi';
import { useAddEmployeeMutation } from '../services/employeesApi';
import { IEmployee,EmployeeFormProps } from '../types';


export const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<IEmployee>({
    id: employee?.id || 0,
    name: employee?.name || '',
    department: employee?.department || '',
    salary: employee?.salary || 0,
    age: employee?.age || 0
  });
  const [updateEmployee] = useUpdateEmployeeMutation();
  const [addEmployee] = useAddEmployeeMutation();
  const [isEdited, setIsEdited] = useState(false);
  

  const handleOpenModal = () => {
        setIsOpen(true);
      if(!employee) {
        // Adding a new employee
        setFormData({
          id: 0,
          name: '',
          department: '',
          salary: 0,
          age: 0
        });
      }
  };

  const handleCloseModal = () => {
    setIsOpen(false); 
    if (isEdited && employee) {
     setFormData({
          id: employee.id,
          name: employee.name,
          department: employee.department,
          salary: employee.salary,
          age: employee.age
        });
        setIsEdited(false);
      }
      
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setIsEdited(true);
  };

  const handleSubmit = () => {
  if (employee) {
    // Update employee
    const data = {
      id: employee.id,
      name: formData.name,
      age: Number(formData.age),
      department: formData.department,
      salary: Number(formData.salary)
    };

    updateEmployee(data)
      .unwrap()
      .then(() => {
        handleCloseModal();
      })
      .catch((error: any) => {
        console.error(error);
      });
  } else {
    // Add employee
    const data = {
      name: formData.name,
      age: Number(formData.age),
      department: formData.department,
      salary: Number(formData.salary)
    };
    
    addEmployee(data)
      
        handleCloseModal();
     
      
  }
  
  setIsEdited(false);
};

  
  
  return (
    <div>
      {employee ? (
        <FontAwesomeIcon
          data-testid="update-icon"
          icon={faEdit}
          onClick={handleOpenModal}
          className="updateicon"
        />
      ) : (
        <div className="textleft">
          <FontAwesomeIcon
            data-testid="add-icon"
            icon={faPlus}
            onClick={handleOpenModal}
            className="addicon"
          />
          <p>Add Employee</p>
        </div>
      )}

      <Modal isOpen={isOpen} toggle={handleCloseModal}>
        <ModalHeader className="modal-header" toggle={handleCloseModal}>
          {employee ? 'Update Employee Details' : 'Enter Employee Details'}
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
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="ml-1 inputlength"
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
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="ml-1 inputlength"
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
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="ml-1 inputlength"
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
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="ml-1 inputlength"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="button-background-color" onClick={handleSubmit}>
            {employee ? 'Update' : 'Add'}
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
