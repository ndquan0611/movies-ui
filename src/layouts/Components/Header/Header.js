import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
import images from '~/assets/images';
import Nav from '~/layouts/Components/Nav';
import { BellIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={cx('wrapper', {
                scroll: isScrolled,
            })}
        >
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Netflix" />
                </Link>

                <Nav />

                <div className={cx('action')}>
                    <button className={cx('action-btn')}>
                        <SearchIcon />
                    </button>

                    <Link to={config.routes.home}>Trẻ em</Link>

                    <button className={cx('action-btn')}>
                        <BellIcon />
                    </button>

                    <Link to={config.routes.home}>
                        <img src="https://occ-0-395-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
