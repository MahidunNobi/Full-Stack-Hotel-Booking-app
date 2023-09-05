import React from 'react'
import DataTable from '../../componants/List-Page-Componants/dataTable/DataTable'
import { useParams } from 'react-router-dom'

const List = ({page}) => {
  const title = page === "user" ?
                "Add New User"
                :
                "Add new Product"                
  
  return (
    <div className='list'>
      <DataTable title={title} />
    </div>
  )
}

export default List