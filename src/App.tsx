import './App.css';
import { DisplayEmployee } from './Components/DisplayEmployee';
import { useAddEmployeeMutation } from './services/employeesApi';

function App() {
  
  return (
    <div className='text-center'>
      <h1>Employee Details</h1>

      <DisplayEmployee />
    </div>

  )
}

export default App;
