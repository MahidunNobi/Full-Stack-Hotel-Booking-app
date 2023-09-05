import React from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { columns, userRows } from '../../../dataTableSource';
import { Link } from 'react-router-dom';


const DataTable = ({title}) => {
  const actionColumn = [
    {field: "action", headerName: "Action", width: 200, renderCell: ()=>{
      return (
        <div className="cellAction">
          <Link to={"id"} className='viewBtn'> View</Link>
          <button className='deleteBtn'> Delete</button>
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
        rows={userRows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    
    </div>
  )
}

export default DataTable