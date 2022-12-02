import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseTitle, 
        chooseArtist, 
        chooseYear, 
        chooseGenre,
        chooseLabel, 
        chooseTracks 
    } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface AlbumFormProps {
    id?: string;
    data?: {};
};

interface AlbumState {
    album_title: string;
    artist_name: string;
    year: string;
    genre: string;
    number_of_tracks: string;
    label: string;
};

export const AlbumForm = (props:AlbumFormProps) => {
    const dispatch = useDispatch();
    let { albumData, getData } = useGetData();
    const store = useStore();
    const { register, handleSubmit } = useForm({  });

    const onSubmit = async (data:any, event:any) => {
        if(props.id!){
            await serverCalls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            window.location.reload();
        } else {
            dispatch(chooseTitle(data.albumTitle));
            dispatch(chooseArtist(data.artistName));
            dispatch(chooseYear(data.year));
            await serverCalls.create(store.getState());
            window.location.reload();
        };
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="album_title">Album Title</label>
                    <Input {...register('album_title')} name='albumTitle' placeholder='Album Title' />
                </div>
                <div>
                    <label htmlFor="artist_name">Artist Name</label>
                    <Input {...register('artist_name')} name='artistName' placeholder='Artist Name' />
                </div>
                <div>
                    <label htmlFor="year">Year Released</label>
                    <Input {...register('year')} name="year" placeholder='Year Released' />
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name='genre' placeholder='Genre' />
                </div>
                <div>
                    <label htmlFor="number_of_tracks">Number of Tracks</label>
                    <Input {...register('number_of_tracks')} name='tracks' placeholder='Number of Tracks' />
                </div>
                <div>
                    <label htmlFor="label">Label</label>
                    <Input {...register('label')} name="label" placeholder='Label' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};