import logo_path from '@/assets/로고.png';
import { logoutFromBE } from '../api/axios-auth';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { useUser } from '@/features/auth/context/UserContext';
type Props = {};

const Header: React.FC<Props> = () => {
  const { user, setUser } = useUser();
  const storedUser = localStorage.getItem('user');

  useEffect(() => {
    if (storedUser !== null) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function Logout() {
    // 어차피 빈 토큰을 반환하는건데 실행할 필요가 있을까?
    if (user?.refreshToken) {
      await logoutFromBE(user?.refreshToken);
    }
    localStorage.removeItem('user');
    setUser(null);
  }

  function LoginButton() {
    if (user === null) {
      return (
        <div>
          <Link to="/signin">로그인</Link>
          <button>회원가입</button>
        </div>
      );
    } else {
      return (
        <div>
          <span>{user.id}, 안녕하세요</span>
          <button onClick={Logout}>로그아웃</button>
        </div>
      );
    }
  }

  return (
    <div className="header">
      <div className="title">
        <img src={logo_path} alt="이동어때 로고" />
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

export default Header;
