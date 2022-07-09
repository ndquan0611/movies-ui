import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { SmoothHorizontalScrolling } from '~/utils';
import { LeftIcon, RightIcon } from '~/components/Icons';
import styles from './Contents.module.scss';

const cx = classNames.bind(styles);

const movies = [
    'https://image.tmdb.org/t/p/original//49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    'https://image.tmdb.org/t/p/original//mbsRGqJtdKcVbjQxkrfzKCAkYoU.jpg',
    'https://image.tmdb.org/t/p/original//qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg',
    'https://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg',
    'https://image.tmdb.org/t/p/original//pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg',
    'https://image.tmdb.org/t/p/original//rHCFO8RJ3Hg6a8KjWAsvAsa38hp.jpg',
    'https://image.tmdb.org/t/p/original//pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg',
    'https://image.tmdb.org/t/p/original//pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg',
];

function Contents() {
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
            <h1 className={cx('title')}>Netflix Originals</h1>
            <div
                className={cx('slider')}
                ref={sliderRef}
                draggable={true}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
            >
                {movies.map((movie, index) => (
                    <div key={index} ref={movieRef} draggable={false} className={cx('slider-item')}>
                        <img src={movie} alt="Quan" draggable={false} />
                        <div className={cx('name')}>Movies name</div>
                    </div>
                ))}
            </div>
            <div className={cx('btn-left')} onClick={handleScrollLeft}>
                <LeftIcon />
            </div>
            <div className={cx('btn-right')} onClick={handleScrollRight}>
                <RightIcon />
            </div>
        </div>
    );
}

export default Contents;
