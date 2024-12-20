import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <div className={cx('AccountItem')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a.jpeg?lk3s=30310797&nonce=43402&refresh_token=e22a070932ab2dc55c7ac2a64c38d72c&x-expires=1734789600&x-signature=h8czaJUnsWoBh75%2B8WQAd8ZbcKc%3D&shp=30310797&shcp=-"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Lê Tuấn Khang
                    <span>
                        <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                    </span>
                </p>
                <span className={cx('username')}>letuankhang2002</span>
            </div>
        </div>
    );
}

export default AccountItem;
