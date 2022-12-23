import { categoryDataType } from '../../../publicData/navPropsData'
import classes from '../navCss/NavCategoryList.module.scss'

// className={classes.categoryListItem}
const NavCategoryList: React.FC<{ categoryList: categoryDataType[] }> = (props) => {
    console.log(props.categoryList)
    return (
        <>
            {props.categoryList.map(categoryData => {
                return (
                    <li
                        key={categoryData.id}
                        className={classes.categoryListItem}
                    >
                        {categoryData.title}
                    </li>
                )
            }
            )
            }
        </>
    )
}

export default NavCategoryList;