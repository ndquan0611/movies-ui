import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Trang chủ" to={config.routes.home} active />
                <MenuItem title="Phim T.hình" to={config.routes.home} />
                <MenuItem title="Phim" to={config.routes.home} />
                <MenuItem title="Mới & Phổ biến" to={config.routes.home} />
                <MenuItem title="Danh sách của tôi" to={config.routes.home} />
            </Menu>
        </div>
    );
}

export default Nav;
