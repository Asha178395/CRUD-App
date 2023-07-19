import { useEmployeesQuery } from '../services/employeesApi';
import { useSelector } from 'react-redux';
import { IEmployee,stateprops } from '../types';
import { EmployeeForm } from './EmployeeForm';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteEmployeeMutation } from '../services/employeesApi';



export const DisplayEmployee = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useEmployeesQuery();
  const reduxEmployees = useSelector((state: stateprops) => state.employees.employees);
  const [deleteEmployee]=useDeleteEmployeeMutation();
  const deleteHandler=async(employeeid:number)=>{
     await deleteEmployee(employeeid);
  }

  const handleSubmit = (employee: IEmployee) => {
    
    console.log('Submitted employee:', employee);
  };

  return (
    <div>
         <EmployeeForm onSubmit={handleSubmit} />
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(employee => {
            return (
              <div key={employee.id} className='displayemployee'>
                <p>
                  <b>Employee Name:</b>
                  {employee.name}
                </p>
                <p>
                  <b>Employee Age:</b>
                  {employee.age}
                </p>
                <p>
                  <b>Employee Salary:</b>
                  {employee.salary}
                </p>
                <p>
                  <b>Employee Department:</b>
                  {employee.department}
                </p>
                <div className='componentsalign'>
                 <EmployeeForm employee={employee} onSubmit={handleSubmit}/>
                  <FontAwesomeIcon data-testid='trash-icon' icon={faTrash} onClick={()=>deleteHandler(employee.id)} className='deleteicon'/>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
