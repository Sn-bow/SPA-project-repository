import { Link } from 'react-router-dom'
import { categoryDataType } from '../../../public/publiceData/navPropsData'
import classes from '../navCss/NavListContent.module.scss'

interface navCategoryListPropsType {
    onPointerLeave: () => void,
    id: number,
    categoryList: categoryDataType,
    compareId: number | null
}

const NavListContent: React.FC<navCategoryListPropsType> = (props) => {
    return (
        <div onPointerLeave={props.onPointerLeave} className={classes.navListContentContain}>
            <div className={classes.navListContentBox}>
                {/* <div className={classes.navListContentaBackDrop} onPointerEnter={props.onPointerLeave} /> */}
                <ul className={classes.navListContentUl}>
                    <div className={classes.navListContentDiv}>
                        {props.compareId === props.id && props.categoryList.content.map((content, index) =>
                            <li key={index} className={classes.navListContentLi}>
                                {content}
                            </li>
                        )}
                    </div>
                    <div className={classes.navListContentDiv}>
                        {props.compareId === props.id && props.categoryList.underContent.map((underContent, index) =>
                            <li key={index} className={classes.navListContentLi}>
                                {underContent}
                            </li>
                        )}
                    </div>
                    <div className={classes.navListContentImg}>
                        {props.compareId === props.id && props.categoryList.url.map((imgUrl, index) =>
                            <Link to={''} key={index}>
                                <div className={classes.backdrop}>
                                    <img src={imgUrl} alt="img" className={classes.imgCategory} title={`${index}`} />
                                </div>
                                <div className={classes.backdropIn}>
                                    <div className={classes.imgBackDrop}>
                                        hello
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavListContent