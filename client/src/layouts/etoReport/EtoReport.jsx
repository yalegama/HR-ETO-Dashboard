
import React, { PureComponent, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid } from '@material-ui/core';
import axios from 'axios';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const columns = [
  { field: 'area', headerName: 'Area', width: 150 },
  {
    field: 'eto',
    headerName: 'ETO',
    width: 150,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const chartData = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];


function EtoReport() {

  const [barChartData, setbarChartData] = useState([]);
  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/etodetails");
    setbarChartData(response.barChartData);
  }
  useEffect(() => {
    loadData();
    console.log(barChartData)
    console.log("Load Data")
  }, [])
  

    
  return (
      <DashboardLayout>
          <DashboardNavbar/>
          <div className='cards'>
          <Grid item xs={12} md={6} xl={3}>
             
          <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <ComposedChart
          layout="vertical"
          width={1000}
          height={1000}
          data={barChartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="area" type="category" scale="band" />
          <Tooltip />
          {/* <Legend />
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={15} fill="#fff" /> */}
          {/* <Line dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>

            </Grid>
          </div>
          <div className='table'>
          <div style={{ height: 400, width: '100%',backgroundColor:'whitesmoke' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={30}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
          </div>
      </DashboardLayout>
  )
}

export default EtoReport