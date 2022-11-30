import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'albumTitle',
      headerName: 'Album title',
      width: 350,
      editable: true,
    },
    {
      field: 'artistName',
      headerName: 'Artist name',
      width: 200,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Year',
      type: 'integer',
      //type number was displaying years as 2,020. idk if integer is a real type because it looks the same
      // as when I did type string but it looks right now so it works for me
      width: 110,
      editable: true,
    },
    {
    // This is kinda cool so I'll keep it and keep it named full name I guess
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 500,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.albumTitle || ''} by ${params.row.artistName || ''}`,
    },
  ];

const rows = [
    { id: 1, albumTitle: 'Set My Heart On Fire Immediately', artistName: 'Perfume Genius', year: 2020 },
    { id: 2, albumTitle: 'Louden Up Now', artistName: '!!!', year: 2004 },
    { id: 3, albumTitle: "You Don't Mess Around With Jim", artistName: 'Jim Croce', year: 1972 },
    { id: 4, albumTitle: 'Cake Pop 2', artistName: 'Cake Pop', year: 2021 },
    { id: 5, albumTitle: 'In A Poem Unlimited', artistName: 'U.S. Girls', year: 2018 },
    { id: 6, albumTitle: 'Strawberry Jam', artistName: "Animal Collective", year: 2007 },
    { id: 7, albumTitle: 'Ultra Mono', artistName: 'IDLES', year: 2020 },
    { id: 8, albumTitle: 'A Long Red Hot Los Angeles Summer Night', artistName: 'Blu & Oh No', year: 2019 },
    { id: 9, albumTitle: 'Malibu Ken', artistName: 'Aesop Rock & TOBACCO', year: 2019 },
  ];
  
  
export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    )
}