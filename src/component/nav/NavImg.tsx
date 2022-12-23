import { Link } from 'react-router-dom'
import classes from './navCss/NavImg.module.scss'

const NavImg = () => {
    return (
        <div className={classes.contain}>
            <Link to='/' className={classes.link}>
                <img src='https://spao.com/morenvyimg/top_logo_pc.png' alt='space_log_img' className={classes.img} />
            </Link>
        </div>
    )
}

export default NavImg