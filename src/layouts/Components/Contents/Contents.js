import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import * as ACTION from '~/store/actions';
import MoviesRow from './MoviesRow';

function Contents() {
    const dispatch = useDispatch();
    const {
        NetFlixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries,
    } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(ACTION.getNetflixOriginals());
        dispatch(ACTION.getTrendingMovies());
        dispatch(ACTION.getTopRatedMovies());
        dispatch(ACTION.getActionMovies());
        dispatch(ACTION.getComedyMovies());
        dispatch(ACTION.getHorrorMovies());
        dispatch(ACTION.getRomanceMovies());
        dispatch(ACTION.getDocumentaries());
    }, [dispatch]);

    return (
        <div>
            <MoviesRow movies={NetFlixOriginals} title="Netflix Originals" isNetFlix={true} />
            <MoviesRow movies={TrendingMovies} title="Trending Movies" />
            <MoviesRow movies={TopRatedMovies} title="Top Rated Movies" />
            <MoviesRow movies={ActionMovies} title="Action Movies" />
            <MoviesRow movies={ComedyMovies} title="Comedy Movies" />
            <MoviesRow movies={HorrorMovies} title="Horror Movies" />
            <MoviesRow movies={RomanceMovies} title="Romance Movies" />
            <MoviesRow movies={Documentaries} title="Documentaries" />
        </div>
    );
}

export default Contents;
