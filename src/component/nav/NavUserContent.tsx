import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BiShoppingBag } from 'react-icons/bi'
import classes from './navCss/NavUserContent.module.scss'

const NavUserContent = () => {
    return (
        <div className={classes.userContent}>
            <Link to={''}>
                <AiOutlineUser className={classes.userContentItem} />
            </Link>
            <Link to={''}>
                <HiOutlineMagnifyingGlass className={classes.userContentItem} />
            </Link>
            <Link to={''}>
                <AiOutlineHeart className={classes.userContentItem} />
            </Link>
            <Link to={''}>
                <BiShoppingBag className={classes.userContentItem} />
            </Link>
        </div>
    )
}

export default NavUserContent