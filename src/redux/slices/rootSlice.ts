import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        album_title: 'Louden Up Now',
        artist_name: '!!!',
        year: '2004',
        genre: 'dance punk',
        number_of_tracks: '11',
        label: 'Touch and Go Records'
    },
    reducers: {
        chooseTitle: (state, action) => { state.album_title = action.payload },
        chooseArtist: (state, action) => { state.artist_name = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        chooseTracks: (state, action) => { state.number_of_tracks = action.payload },
        chooseLabel: (state, action) => { state.label = action.payload }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseArtist, chooseYear, chooseGenre, chooseTracks, chooseLabel } = rootSlice.actions;