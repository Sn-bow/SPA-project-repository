import KakaoButton from './kakaoSignIn/KakaoButton';
import DefaultSignIn from './signIn/DefaulSignIn';
import classes from './signInCss/SignIn.module.scss'

const SignIn = () => {

    return (
        <div className={classes.signInContain}>
            <div className={classes.signInBox}>
                <h1>로그인</h1>
                <DefaultSignIn />
                <div>
                    <KakaoButton />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
