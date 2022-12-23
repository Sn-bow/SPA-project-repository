import NavCategoryList from './navCategoryList/NavCategoryList'
import classes from './navCss/NavCategory.module.scss'
import { categoryDataType } from '../../publicData/navPropsData'

const NavCategory: React.FC<{ navCategory: categoryDataType[] }> = (props) => {
    return (
        <div className={classes.navCategory} >
            <ul className={classes.categoryList} >
                <NavCategoryList categoryList={props.navCategory} />
            </ul>
        </div>
    )
}

export default NavCategory