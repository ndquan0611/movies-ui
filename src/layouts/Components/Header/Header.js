import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { BellIcon, SearchIcon } from '~/components/Icons';
import config from '~/config';
import useScrollY from '~/hooks/useScrollY';
import Nav from '~/layouts/Components/Nav';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const scrollY = useScrollY();

    return (
        <header
            className={cx('wrapper', {
                scroll: scrollY,
            })}
        >
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Netflix" />
                </Link>

                <Nav />

                <div className={cx('action')}>
                    <button className={cx('action-btn')}>
                        <div className={cx('search')}>
                            <SearchIcon className={cx('search-btn')} />
                            <input placeholder="Phim, diễn viên, thể loại..." />
                        </div>
                    </button>

                    <button className={cx('action-btn')}>
                        <Link to={config.routes.home}>Trẻ em</Link>
                    </button>

                    <button className={cx('action-btn')}>
                        <BellIcon />
                        <span className={cx('badge')}>5</span>
                    </button>

                    <img
                        className={cx('user-avatar')}
                        src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                        alt="avatar"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
