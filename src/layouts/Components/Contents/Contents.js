import classNames from 'classnames/bind';
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
];

function Contents() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Netflix Originals</h1>
            <div className={cx('slider')}>
                {movies.map((movie, index) => (
                    <div key={index} className={cx('slider-item')}>
                        <img src={movie} alt />
                        <div className={cx('name')}>Movies name</div>
                    </div>
                ))}
            </div>
            <div className={cx('btn-left')}>
                <LeftIcon />
            </div>
            <div className={cx('btn-right')}>
                <RightIcon />
            </div>
        </div>
    );
}

export default Contents;
