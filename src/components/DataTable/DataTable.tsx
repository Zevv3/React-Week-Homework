import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { AlbumForm } from '../AlbumForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'album_title',
      headerName: 'Album title',
      width: 350,
      editable: true,
    },
    {
      field: 'artist_name',
      headerName: 'Artist name',
      width: 200,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Year',
      width: 110,
      editable: true,
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 100,
      editable: true,
    },
    {
      field: 'number_of_tracks',
      headerName: 'Number Of Tracks',
      width: 75,
      editable: true,
    },
    {
      field: 'label',
      headerName: 'Label',
      width: 200,
      editable:true
    }
  ];
  
interface gridData{
  data:{
    id?:string;
  };
};

export const DataTable = () => {
    let { albumData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([]);

    let handleOpen = () => {
      setOpen(true);
    };
    let handleClose = () => {
      setOpen(false);
    };
    let deleteData = () => {
      console.log(`${gridData[0]}`);
      serverCalls.delete(`${gridData[0]}`);
      getData()
    };

    console.log(gridData)
    const MyAuth = localStorage.getItem('myAuth');
    if (MyAuth == 'true') {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Albums In Your Library</h2>
          <DataGrid
              rows={albumData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={(newSelectionModel) => {setData(newSelectionModel)}}
              {...albumData}
          />
          <Button onClick={handleOpen}>Update</Button>
          <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>
          {/* Dialog Open */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id='form-dialog-title'>Update An Album's information</DialogTitle>
            <DialogContent>
              <DialogContentText>Album id: {gridData[0]}</DialogContentText>
              <AlbumForm id={`${gridData[0]}`} />
              <DialogActions>
                <Button onClick={handleClose} color='primary'>Cancel</Button>
                <Button onClick={handleClose} color='primary'>Done</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
    )
    } else {
      return (
        <div>
          <h3>Please Sign In To View Your Drone Collection</h3>
        </div>
      )
    }
}