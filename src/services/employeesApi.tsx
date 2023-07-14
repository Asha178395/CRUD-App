import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Employee} from '../models/employee.model';
import { Employeenoid} from '../models/employeenoid.model';

export const employeesApi = createApi({
    reducerPath: "employeesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://crudapp123.azurewebsites.net/api/Employee/" }),
    tagTypes:['Employee'],
    endpoints:(builder) => ({
        employees: builder.query<Employee[], void>({
            query: () => `/GetAllEmployees`,
            providesTags:['Employee']
        }),
        employee: builder.query<Employee, number>({
            query: (empId) => `/GetEmployeeById?empid=${empId}`,
            providesTags:['Employee']
        }),
        addEmployee: builder.mutation<void, Employeenoid>({            
            query:(employeenoid)=>({
                url:`/AddEmployee`,
                method:'POST',
                body:employeenoid,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                  },
            }),
            invalidatesTags:['Employee']
        }),
        updateEmployee: builder.mutation<Boolean, Employee>({
            query:employee=>({
                url:`/UpdateentireEmployee`,
                method:'PUT',
                body:employee
            }),
            invalidatesTags:['Employee'],
        }),
        deleteEmployee: builder.mutation<void, number>({
            query:(empId)=>({
                url:`/DeleteEmployee?empid=${empId}`,
                method:'DELETE',
                
            }),
            invalidatesTags:['Employee'],
        }),
    })
})

export const { useEmployeesQuery, 
    useEmployeeQuery,
    useAddEmployeeMutation,
useUpdateEmployeeMutation,
useDeleteEmployeeMutation 
} = employeesApi;