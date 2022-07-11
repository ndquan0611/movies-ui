import * as Types from '~/store/type';

const ReducerMoviesInitialState = {
    NetFlixOriginals: null,
    TrendingMovies: null,
    TopRatedMovies: null,
    ActionMovies: null,
    ComedyMovies: null,
    HorrorMovies: null,
    RomanceMovies: null,
    Documentaries: null,
};
const reducerMovies = (state = ReducerMoviesInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Types.GET_NETFLIX_ORIGINALS:
            return { ...state, NetFlixOriginals: payload };
        case Types.GET_TRENDING_MOVIES:
            return { ...state, TrendingMovies: payload };
        case Types.GET_TOP_RATED_MOVIES:
            return { ...state, TopRatedMovies: payload };
        case Types.GET_ACTION_MOVIES:
            return { ...state, ActionMovies: payload };
        case Types.GET_COMEDY_MOVIES:
            return { ...state, ComedyMovies: payload };
        case Types.GET_HORROR_MOVIES:
            return { ...state, HorrorMovies: payload };
        case Types.GET_ROMANCE_MOVIES:
            return { ...state, RomanceMovies: payload };
        case Types.GET_DOCUMENTARIES:
            return { ...state, Documentaries: payload };

        default:
            return state;
    }
};

export default reducerMovies;
