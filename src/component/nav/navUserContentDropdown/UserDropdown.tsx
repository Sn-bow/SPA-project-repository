import classes from '../navCss/UserDropdown.module.scss'

const UserDropdown: React.FC<{ pointEntered: () => void }> = (props) => {
    return (
        <div className={classes.userDropdownContain} onPointerEnter={props.pointEntered}>
            <div className={classes.containItem}>LOGIN</div>
            <div className={classes.containItem}>ORDER</div>
        </div>
        // <div>
        //     <div>MYHOME</div>
        //     <div>ORDER</div>
        // </div>
    )
}

export default UserDropdown;