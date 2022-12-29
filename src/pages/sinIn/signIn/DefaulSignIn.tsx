import classes from '../signInCss/DefaultSignIn.module.scss'

const DefaultSignIn = () => {
    return (
        <div className={classes.defaultSignInContian}>
            <form className={classes.formStyle}>
                <input type="text" placeholder='아이디를 입력하세요' className={classes.inputStyle} />
                <input type="password" placeholder='비밀번호를 입력하세요' className={classes.inputStyle} />
                <button className={classes.signInButtonStyle}>로그인</button>
            </form>
            <button className={classes.signUpButtonStyle}>회원가입</button>
        </div>
    )
}

export default DefaultSignIn;