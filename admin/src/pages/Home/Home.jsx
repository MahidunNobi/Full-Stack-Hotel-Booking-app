import React from 'react'
import Widget from '../../componants/Home-Page-Componants/Widgets/widget'
import Featured from '../../componants/Home-Page-Componants/Featured/Featured'
import Chart from '../../componants/Home-Page-Componants/Chart/Chart'
import Table from '../../componants/Home-Page-Componants/Table/Table'


const Home = () => {
  return (
    <div className='p-6 w-[80%]'>
      <div className="widgets md:flex justify-between w-full gap-4">
        <Widget type="users" />
        <Widget type="order" />
        <Widget type="ernings" />
        <Widget type="balance" />
      </div>
      <div className="my-6 md:flex justify-between gap-4">
      <Featured />
      <Chart />
      </div>
      <div className="tableContainer">
        <Table />
      </div>
      
    </div>
  )
}

export default Home