import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEmployee} from '../models/employee.model';
import { IEmployeenoid} from '../models/employeeWithNoId.model';

export const employeesApi = createApi({
    reducerPath: "employeesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://crudapp123.azurewebsites.net/api/Employee/" }),
    tagTypes:['IEmployee'],
    endpoints:(builder) => ({
        employees: builder.query<IEmployee[], void>({
            query: () => `/GetAllEmployees`,
            providesTags:['IEmployee']
        }),
        employee: builder.query<IEmployee, number>({
            query: (empId) => `/GetEmployeeById?empid=${empId}`,
            providesTags:['IEmployee']
        }),
        addEmployee: builder.mutation<void, IEmployeenoid>({            
            query:(employeenoid)=>({
                url:`/AddEmployee`,
                method:'POST',
                body:employeenoid,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
            }),
            invalidatesTags:['IEmployee']
        }),
        updateEmployee: builder.mutation<Boolean, IEmployee>({
            query:employee=>({
                url:`/UpdateentireEmployee`,
                method:'PUT',
                body:employee
            }),
            invalidatesTags:['IEmployee'],
        }),
        deleteEmployee: builder.mutation<void, number>({
            query:(empId)=>({
                url:`/DeleteEmployee?empid=${empId}`,
                method:'DELETE',
                
            }),
            invalidatesTags:['IEmployee'],
        }),
    })
})

export const { useEmployeesQuery, 
    useEmployeeQuery,
    useAddEmployeeMutation,
useUpdateEmployeeMutation,
useDeleteEmployeeMutation 
} = employeesApi;