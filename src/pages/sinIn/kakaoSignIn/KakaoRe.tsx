// import axios from 'axios'

const KakaoRe = () => {
    const PARAMS = new URL(document.location.href).searchParams
    const KAKAO_CODE = PARAMS.get('code')
    console.log(KAKAO_CODE)

    // const TokenPostHandler = async () => {
    //     const code = await axios.post('')
    // }

    return (
        <div>
            Redirect
        </div>
    )
}

export default KakaoRe;