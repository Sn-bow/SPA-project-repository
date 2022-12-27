import NavCategory from './NavCategory'
import NavLogo from './NavLogo'
import NavUserContent from './NavUserContent'
import classes from './navCss/Nav.module.scss'

const Nav = () => {
    return (
        <div className={classes.navContain}>
            <div className={classes.navBox}>
                <NavLogo />
                <NavCategory />
                <NavUserContent />
            </div>
        </div>
    )
}

export default Nav