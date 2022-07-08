import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <ReactPlayer
                playing={true}
                width="100%"
                height="100%"
                volume={1}
                muted={true}
                url="https://vimeo.com/273686020"
                className={cx('intro')}
            />
            <div className={cx('info')}>
                <h1 className={cx('title')}>Jurassic World Dominion</h1>
                <p className={cx('desc')}>
                    The Red Ribbon Army, an evil organization that was once destroyed by Goku in the
                    past, has been reformed by a group of people who have created new an ...
                </p>
            </div>
        </div>
    );
}

export default Banner;
