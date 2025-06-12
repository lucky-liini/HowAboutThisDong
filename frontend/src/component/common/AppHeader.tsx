type Props = {
};
import logo_path from '../../assets/로고.png'

function LoginButton (isLoggedIn: boolean) {
    if (!isLoggedIn) {
        return (
            <div>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
        );
    } else {
        return (
            <div>
                <span>누구누구님, 안녕하세요</span>
                <button>로그아웃</button>
            </div>
        );
    }
}

const AppHeader: React.FC<Props> = () => {
    const isLoggedIn:boolean = false;

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
                {LoginButton(isLoggedIn)}
            </div>

        </div>
    );
};
 
export default AppHeader;
