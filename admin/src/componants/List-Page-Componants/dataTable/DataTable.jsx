import React, { useEffect, useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { columns, userRows } from '../../../dataTableSource';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const DataTable = ({title, data}) => {
  const [list, setList] = useState(data)
  
  useEffect(()=>{
    setList(data)
  }, [data])

  const path = useLocation().pathname.split("/")[1]
  
  const handleDelete = async(id)=>{
    try { 
      await axios.delete(`/api/${path}/${id}`)
      setList(prev => prev.filter(row => row._id !== id))
    } catch (error) {
      console.log(error.response.data);
    }
  }
  
  const actionColumn = [
    {field: "action", headerName: "Action", width: 200, renderCell: ({row})=>{      
      return (
        <div className="cellAction">
          <Link to={"id"} className='viewBtn'> View</Link>
          <button onClick={() => handleDelete(row._id)} className='deleteBtn'> Delete</button>
        </div>
      )
    }}
  ]
  return (
    <div className='dataTable'>
      <div className="title">
        <h2> {title}</h2>
        <Link to={"new"}> Add New</Link>
      </div>
       
      <DataGrid
      className='tableGrid'
        rows={list}
        columns={columns.concat(actionColumn)}
        getRowId={row => row._id}
        initialState={{
          pagination: {
            // paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataTable