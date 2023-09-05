import "./chart.scss"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    <div className='charts md:w-[64%]'>
      <h2 className="text-xl text-gray-500 mb-6 ml-10"> Last 6 months (Revenue)</h2>
    <ResponsiveContainer width="100%" aspect={2/1} >
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="income" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart