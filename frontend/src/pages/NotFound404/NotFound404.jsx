import classNames from 'classnames/bind';
import styles from './NotFound404.module.scss';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import routes from '../../config/routes';

const cx = classNames.bind(styles);

function NotFound404() {
    const navigate = useNavigate();
    return (
        <div className={cx('wrap')}>
            <img src="/src/pages/NotFound404/notfound404.png" alt="" />
            <Button className={cx('button')} variant="contained" onClick={() => navigate(routes.home)}>
                Quay lại trang chủ
            </Button>
        </div>
    );
}

export default NotFound404;
