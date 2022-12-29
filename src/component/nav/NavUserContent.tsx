import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { BiShoppingBag } from 'react-icons/bi'
import classes from './navCss/NavUserContent.module.scss'
import { useState } from 'react'
import UserDropdown from './navUserContentDropdown/UserDropdown'

const NavUserContent = () => {
    const [userPointerState, setUserPointerState] = useState<boolean>(false)

    const pointerEnteredHandler = () => {
        setUserPointerState(true)
    }

    const pointerLeavedHandler = () => {
        setUserPointerState(false)
    }

    return (
        <div className={classes.userContent}>
            <div className={classes.userBox}>
                <div className={classes.userItemBox} onPointerEnter={pointerEnteredHandler} onPointerLeave={pointerLeavedHandler}>
                    <Link to="/login">
                        <AiOutlineUser className={classes.userContentItem} onPointerEnter={pointerEnteredHandler} />
                    </Link>
                    {userPointerState && <UserDropdown pointEntered={pointerEnteredHandler} />}
                </div>
                <div className={classes.userItemBox}>
                    <Link to={''}>
                        <HiOutlineMagnifyingGlass className={classes.userContentItem} />
                    </Link>
                </div>
                <div className={classes.userItemBox}>
                    <Link to={''}>
                        <AiOutlineHeart className={classes.userContentItem} />
                    </Link>
                </div>
                <div className={classes.userItemBox}>
                    <Link to={''}>
                        <BiShoppingBag className={classes.userContentItem} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavUserContent