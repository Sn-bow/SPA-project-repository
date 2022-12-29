import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/nav/Nav';
import Main from './pages/main/Main';
import KakaoRe from './pages/sinIn/kakaoSignIn/KakaoRe';
import SignIn from './pages/sinIn/SignIn';


const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<SignIn />} />
                <Route path="/oauth/callback/kakao" element={<KakaoRe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
