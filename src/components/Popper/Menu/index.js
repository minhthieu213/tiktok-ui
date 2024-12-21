import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useState } from 'react';

import Header from './header'
import MenuItem from './MenuItem'
import {Wrapper as PopperWrapper} from '~/components/Popper'
import styles from './Menu.module.scss'

const defaultFn = () => {}

const cx = classNames.bind(styles);
function Menu({children, items = [], onChange = defaultFn}) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !! item.children;
            return <MenuItem key ={index} data={item} onClick ={() =>{
                if(isParent){
                    setHistory(prev => [...prev, item.children])
                }
                else{
                    onChange(item)
                }
            }}/>
        })
    }   
    return ( 
        <Tippy
            delay = {[0, 500]}
            interactive='true'
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() =>{
                            setHistory(prev => prev.slice(0, history.length-1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>   
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;