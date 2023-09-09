
import "./list.scss"
import React, { useEffect, useState } from 'react'
import { Link,useLocation, useParams } from 'react-router-dom'
import useFetch from '../../Hooks/UseFetch'
import { DataGrid } from '@mui/x-data-grid';
import { UsersColumns,HotelsColumns, RoomsColumns } from '../../dataTableSource';
import axios from 'axios';

const List = ({page}) => {
     
  const path = useLocation().pathname.split("/")[1]
  const {data, loading, error}=useFetch(`/api/${path}`) 
  const [columns, setColumns] = useState(RoomsColumns)
  useEffect(()=>{
    if(path === "users"){
      setColumns(UsersColumns)
    }
    else if(path === "hotels"){
      setColumns(HotelsColumns)
    }
    else if(path === "rooms"){
      setColumns(RoomsColumns)
    }
  }, [path])
  

  const [list, setList] = useState(data)
  
  useEffect(()=>{
    setList(data)
  }, [data])
  
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
    <div className='list'>
     <div className='dataTable'>
      <div className="title">
        <h2 className=" capitalize"> Add New {page}</h2>
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
    </div>
  )
}

export default List