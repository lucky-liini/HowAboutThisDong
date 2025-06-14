import axios from "axios";

const myaxios = axios.create({
    baseURL: 'http://localhost',
    headers: {
		'Content-Type': 'application/json', // 백엔드로 보내는 데이터 타입은 json 형식
	},
})

export default myaxios;