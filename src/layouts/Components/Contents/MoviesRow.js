import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { SmoothHorizontalScrolling } from '~/utils';
import { LeftIcon, RightIcon } from '~/components/Icons';
import styles from './MoviesRow.module.scss';

const cx = classNames.bind(styles);

function MoviesRow({ movies, title, isNetFlix }) {
    const sliderRef = useRef();
    const movieRef = useRef();

    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                300,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                300,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag]);

    const onDragStart = (e) => {
        setIsDrag(true);
        setDragDown(e.screenX);
    };

    const onDragEnd = (e) => {
        setIsDrag(false);
    };

    const onDragEnter = (e) => {
        setDragMove(e.screenX);
    };

    return (
        <div className={cx('wrapper')} draggable={false}>
            <h1 className={cx('title')}>{title}</h1>
            <div
                className={cx('slider')}
                ref={sliderRef}
                draggable={true}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                style={movies && movies.length > 0 ? {} : {}}
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imageUrl = isNetFlix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <div
                                    key={index}
                                    ref={movieRef}
                                    draggable={false}
                                    className={cx('slider-item')}
                                >
                                    <img src={imageUrl} alt="Quan" draggable={false} />
                                    <div className={cx('name')}>{movie.title || movie.name}</div>
                                </div>
                            );
                        }
                    })}
            </div>
            <div
                className={cx('btn-left', {
                    isNetflix: isNetFlix,
                })}
                onClick={handleScrollLeft}
            >
                <LeftIcon />
            </div>
            <div
                className={cx('btn-right', {
                    isNetflix: isNetFlix,
                })}
                onClick={handleScrollRight}
            >
                <RightIcon />
            </div>
        </div>
    );
}

export default MoviesRow;
