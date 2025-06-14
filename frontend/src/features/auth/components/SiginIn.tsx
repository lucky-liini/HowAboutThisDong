import React, { useState } from 'react'
import { loginAndGetJWT, logoutFromBE } from '@/api/axios-auth'

type Props = {}

const InputId = ({value, onChange}: {value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div>
      <label htmlFor="id">아이디</label>
      <input
        type="text"
        id="id"
        name="id"
        required
        placeholder="아이디를 입력하세요"
        value={value}
        onChange={onChange}
       />
    </div>
  )
}

const InputPw = ({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <div>
      <label htmlFor="password">비밀번호</label>
      <input
        type="text"
        id="password"
        name="password"
        required
        placeholder="비밀번호를 입력하세요"
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginAndGetJWT(id, password);
      
    } catch (error) {
      
    }
  }

  return (
    <div>
      <InputId value={id} onChange={(e) => setId(e.target.value)} />
      <InputPw value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default SignIn;