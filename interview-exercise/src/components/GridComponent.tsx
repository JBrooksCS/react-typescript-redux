import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

 
export function GridComponent() {

    const objArray = 
    [{
        id : 0,
        name : "Bob"
    },{
        id : 1,
        name : "Charlie"
    },{
        id : 2,
        name : "Steve"
    }]
    const ourColumnDefs = [
        {headerName: "id", field: "id"},
        {headerName: "name", field: "name"}
    ]

    //const columnDiffs = [{}]
    const onGridReady = () => {
        console.log("GRIDS READY");
    }
    
    
    return (
        <>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact columnDefs = {ourColumnDefs}
                onGridReady={onGridReady}
                rowData={objArray}>
            </AgGridReact>
        </div>
        </>
    );
  }
  