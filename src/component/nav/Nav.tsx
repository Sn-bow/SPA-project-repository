import classes from './navCss/Nav.module.scss'
import NavCategory from './NavCategory';
import NavImg from './/NavImg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { categoryDataType } from '../../publicData/navPropsData'


const Nav = () => {
    const [categoryData, setCategoryData] = useState<categoryDataType[]>([])

    const navCategoryListData = async () => {
        const MOCKDATA = await axios('/data/data.json')
        const CATEGORYDATA: categoryDataType[] = MOCKDATA.data
        setCategoryData(categoryData.concat(CATEGORYDATA))
    }

    useEffect(() => {
        navCategoryListData()
    }, [])

    return (
        <div className={classes.contain}>
            <div className={classes.navContain}>
                <div className={classes.width}>
                    <NavImg />
                    <NavCategory navCategory={categoryData} />
                    <div>로그인 및 기타 등등</div>
                </div>
            </div>
        </div>
    )
}

export default Nav;