import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDeleteEmployeeMutation } from '../services/employeesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

type deleteprops={
    id:number
}

export const DeleteEmployee=({id}:deleteprops)=>{
    const [deleteEmployee]=useDeleteEmployeeMutation();
    const deleteHandler=async(employeeid:number)=>{
       await deleteEmployee(employeeid);
    }
    
    return(
        <div>
            <FontAwesomeIcon data-testid='trash-icon' icon={faTrash} onClick={()=>deleteHandler(id)} className='deleteicon'/>
        </div>
    )
}