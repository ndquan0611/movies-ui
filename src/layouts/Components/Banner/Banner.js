import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';
import Button from '~/components/Button';
import { NoficationIcon, PlayIcon } from '~/components/Icons';
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
                <img
                    title="Quái vật biển khơi"
                    src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRvppcW3lzSU0k0PJENx-kkFXyEm00eRzf8Z2QidNqQzfNna7R_JRNtlarkun5d5Y5DyQI2Ic0g34rqFDftrQeFcDNUwe9jYLl2ZlDJeFsX7bRnl5ShZcoj14eUg_tYsnGrYc3iapPSi3HtSizSYeyjwpjXO6lQUOcKNozYdL7LzGXQinzg_rQ.webp?r=ec6"
                    alt=""
                    className={cx('title')}
                />
                <p className={cx('desc')}>
                    Khi một cô bé lẻn lên tàu của một thợ săn quái vật biển huyền thoại, họ bắt đầu
                    cuộc hành trình hoành tráng vào vùng biển chưa được khám phá – và làm nên lịch
                    sử.
                </p>
                <div className={cx('info-btn')}>
                    <Button primary leftIcon={<PlayIcon />}>
                        Phát
                    </Button>
                    <Button secondary leftIcon={<NoficationIcon />}>
                        Thông tin khác
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
