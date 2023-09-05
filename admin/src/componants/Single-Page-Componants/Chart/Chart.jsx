import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: "January", income: 1200},
  {name: "February", income: 800},
  {name: "March", income: 1200},
  {name: "April", income: 3200},
  {name: "May", income: 2300},
  {name: "June", income: 2500},  
];



const Chart = () => {
  return (
    <div className='charts'>
      <h2 className="text-xl text-gray-500"> User Spanding (Last 6 months)</h2>
      <ResponsiveContainer width="100%" aspect={3/1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="income" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart