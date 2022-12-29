import { KAKAO_AUTH_URL } from './KakaoAuth';
import classes from '../signInCss/KakaoButton.module.scss'

const KakaoButton = () => {

    return (
        <div className={classes.kakaoContain}>
            <a href={KAKAO_AUTH_URL}>
                <img src='/imgs/kakao_login_medium.png' />
            </a>
        </div>
    )
}

export default KakaoButton;