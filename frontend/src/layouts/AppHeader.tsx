import logo_path from '../../assets/로고.png'
import { loginAndGetJWT, logoutFromBE } from '../api/axios-auth';
import { useRef, useState } from 'react';
type Props = {
};


const AppHeader: React.FC<Props> = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const refreshToken = useRef('');

    async function Login () {
        // const response = await loginAndGetJWT('ssafy', 'ssafy');
        try {
            const response = await loginAndGetJWT('ssafy', 'ssafy');
            console.log(response.data);
            setIsLoggedIn(!isLoggedIn);
            refreshToken.current = response.data.tokens.refreshToken;
        } catch (error) {
            alert('id, password 확인하세요.')
        }
    }

    async function Logout() {
        const response = await logoutFromBE(refreshToken.current);
        console.log(response.data)
        setIsLoggedIn(!isLoggedIn);
    }

    function LoginButton() {
        if (!isLoggedIn) {
            return (
                <div>
                    <button onClick={Login}>로그인</button>
                    <button>회원가입</button>
                </div>
            );
        } else {
            return (
                <div>
                    <span>누구누구님, 안녕하세요</span>
                    <button onClick={Logout}>로그아웃</button>
                </div>
            );
        }
    }

    return (
        <div className="header">
            <div className="title">
                <img src={logo_path} alt="이동어때 로고"/>
            </div>

            <div className="nav-board">
                <span>🏠</span>
                <span>동게시판</span>
            </div>

            <div className="auth">
                <LoginButton />
            </div>

        </div>
    );
};
 
export default AppHeader;
