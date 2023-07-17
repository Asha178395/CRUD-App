import { useEmployeesQuery} from '../services/employeesApi';
import { UpdateEmployee } from './UpdateEmployee';
import { DeleteEmployee } from './DeleteEmployee';
import '../App.css';
export const DisplayEmployee=()=>{
    const { data, error, isLoading, isFetching,isSuccess } = useEmployeesQuery();
    
  return (
    <div>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(employee => {
            return <div key={employee.id} className='displayemployee'>
              
              <p ><b>Employee Name:</b>{employee.name}</p>
              <p ><b>Employee Age:</b>{employee.age}</p>
              <p ><b>Employee Salary:</b>{employee.salary}</p>
              <p ><b>Employee Department:</b>{employee.department}</p>
              <div className='componentsalign'>
              <UpdateEmployee employee={employee} />
              <DeleteEmployee id={employee.id}/>
              </div>
            </div> 
             
          })}
           
        </div>
      )}
     
    </div>
  );
}