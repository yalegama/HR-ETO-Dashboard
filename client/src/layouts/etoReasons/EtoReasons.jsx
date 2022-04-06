import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
    editable: false,
  },
  {
    field: 'pn',
    headerName: 'PN',
    width: 150,
    editable: false,
  },
  {
    field: 'epf',
    headerName: 'EPF',
    width: 110,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 140,
    editable: false,
  },
  {
    field: 'team',
    headerName: 'Team',
    width: 160,
    editable: false,
  },
  {
    field: 'absentreason',
    headerName: 'Absent Reason',
    width: 180,
    editable: false,
  },
  {
    field: 'subreason',
    headerName: 'Sub Reason',
    width: 160,
    editable: false,
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

export default function EtoReasons() {
  
  const [data, setdata] = useState([]);
  const loadData=async()=>{
    const response=await axios.get("http://localhost:3001/etoreason");
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
          <button>Upload Your File</button>
        </form>
      </div>
    <div style={{ height: 550, width: '100%' , backgroundColor:'white'}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    <Footer/>
    </DashboardLayout>
  );
}