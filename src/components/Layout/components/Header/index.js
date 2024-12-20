import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem'

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2])
        }, 0)
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <Tippy
                    interactive='true'
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="1" {...attrs}>
                            <PopperWrapper>
                                <p className = {cx('search-title')}>Account</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>   
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm" spellCheck="false" />
                        <button className={cx('close-btn')}>
                            <FontAwesomeIcon className={cx('icon-close')} icon={faCircleXmark} />
                        </button>
                        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('profile')}></div>
            </div>
        </header>
    );
}

export default Header;
