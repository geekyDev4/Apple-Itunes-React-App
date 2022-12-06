import { GET_MUSIC_LIST, GET_MUSIC_LIST_SUCCESS, GET_MUSIC_LIST_FAILURE } from "../types";

const initialState = {
    songs: [],
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC_LIST:
            return {
                ...state,
                isLoading: true
            };
        case GET_MUSIC_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                songs: action.payload.songs
            };
        case GET_MUSIC_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        default:
            return state;
    }


}