
import React, { PureComponent, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid, TextField } from '@material-ui/core';
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
import input from 'assets/theme/components/form/input';

const columns = [
  { field: 'area', headerName: 'Area', width: 150 },
  {
    field: 'etop',
    headerName: 'ETO %',
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

  const [data, setdata] = useState([]);
  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/etodetails");
    setdata(response.data);
  }
  useEffect(() => {
    loadData();
    console.log(data)
    console.log("Lodaed")
  }, [])


    
  return (
      <DashboardLayout>
          <DashboardNavbar/>

          <div className='form'>
            <form action="">
              <label htmlFor="">Upload Your File Now</label>
              
              <button>Click Here</button>
            </form>
          </div>

          <div className='cards'>

            <div className='cardHolder'>
            <div className='card1'>
              TOTAL ETO %
            </div>
            </div>

          </div>
          <div className='table'>
          <div style={{ height: 800, width: '50%',backgroundColor:'whitesmoke' }}>
      <DataGrid
        rows={data}
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