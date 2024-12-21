import Button from '~/components/Button'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
function MenuItem({data, onClick}) {
    return (
        <Button className ={cx('menu-item')}leftIcon ={data.icon} to ={data.to} onClick ={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;