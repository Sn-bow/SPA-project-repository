import { Link } from 'react-router-dom';
import classes from '../navCss/UserDropdown.module.scss'

const UserDropdown: React.FC<{ pointEntered: () => void }> = (props) => {
    return (
        <div className={classes.userDropdownContain} onPointerEnter={props.pointEntered}>
            <Link to="/login">
                <div className={classes.containItem}>LOGIN</div>
            </Link>
            <div className={classes.containItem}>ORDER</div>
        </div>
        // <div>
        //     <div>MYHOME</div>
        //     <div>ORDER</div>
        // </div>
    )
}

export default UserDropdown;