export interface IEmployee {
    "id": number,
    "name": string,
    "age": number,
    "department": string,
    "salary": number
}
export interface IEmployeenoid {
    
    "name": string,
    "age": number,
    "department": string,
    "salary": number
}

export type EmployeeFormProps = {
    employee?: IEmployee;
    onSubmit: (employee: IEmployee) => void;
  };
export type emptype = {
    employees: IEmployee[];
  
    isLoading: boolean;
    error: string | null | undefined;
  };
export type stateprops = {
    employees: emptype;
  };

  

  
