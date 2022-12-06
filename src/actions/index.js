import { GET_MUSIC_LIST, GET_MUSIC_LIST_SUCCESS, GET_MUSIC_LIST_FAILURE } from "../types";
import axios from 'axios';
import store from "../store"

export const getMusicList = ({ searchParams, isScrolling }) => {
    return dispatch => {
        dispatch(getMusicListStarted());

        var url = new URL("https://itunes.apple.com/search");
        for (let i in searchParams) { url.searchParams.append(i, searchParams[i]); }
        axios
            .get(url)
            .then(res => {
                let { songs } = store.getState();
                let data = isScrolling ? [...songs, ...res.data.results] : res.data.results;
                dispatch(getMusicListSuccess(data));

            }).catch(err => {
                dispatch(getMusicListFailure(err.message));
            })
    };
};

const getMusicListSuccess = data => ({
    type: GET_MUSIC_LIST_SUCCESS,
    payload: { songs: data }
});

const getMusicListStarted = () => ({
    type: GET_MUSIC_LIST
});

const getMusicListFailure = error => ({
    type: GET_MUSIC_LIST_FAILURE,
    payload: {
        error
    }
});