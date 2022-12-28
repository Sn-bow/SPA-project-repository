import axios from 'axios';
import { useEffect, useState } from 'react';
import NavCategoryList from './navCategoryList/NavCategoryList';
import classes from './navCss/NavCategory.module.scss'

const NavCategory = () => {
    const [categoryDataStorage, setCategoryDataStorage] = useState([])

    const navData = async () => {
        const categoryData = await axios.get('/data/data.json')
        setCategoryDataStorage(categoryData.data)
    }

    useEffect(() => {
        navData()
    }, [])

    return (
        <div className={classes.navCategoryContain}>
            <ul className={classes.navCategoryUl}>
                <NavCategoryList categoryData={categoryDataStorage} class={classes.navCategoryLi} boxClass={classes.categoryListBox} classHover={classes.categoryListBoxHover} />
            </ul>
        </div>
    )
}

export default NavCategory;