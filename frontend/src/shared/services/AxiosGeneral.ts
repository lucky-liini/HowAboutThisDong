// 백엔드로 비동기 요청할 때 사용되는 공통 사항 설정하는 스크립트
// 비동기 요청할 때 사용할 axios 객체 관련 설정
// 사용자 정의 axios 객체 생성
/*
import router from '@/router'
import { useAuthStore } from '@/stores/store-auth'
import axios from 'axios'

const myaxios = axios.create({
	baseURL: 'http://localhost',
	headers: {
		'Content-Type': 'application/json', // 백엔드로 보내는 데이터 타입은 json 형식
	},
})

//요청시 수행
myaxios.interceptors.request.use(
	(config) => {
		//request 전 로직 수행
		const authStore = useAuthStore()
		if (authStore.tokens?.accessToken) {
			config.headers['Authorization'] = `Bearer ${authStore.tokens.accessToken}`
		}
		return config
	},
	(error) => {
		console.log('요청실패]', error)
		return Promise.reject(error)
	},
)

// 응답 인터셉터
myaxios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config
		const authStore = useAuthStore()

		if (error.response?.status === 401 && !originalRequest._retry && authStore.isLoggedIn) {
			originalRequest._retry = true

			try {
				const refreshToken = authStore.tokens?.refreshToken
				if (!refreshToken) throw new Error('RefreshToken 없음')

				// ✅ refresh 요청은 기본 axios 인스턴스로 보내기
				const refreshRes = await axios.post(
					'http://localhost/api/auth/refresh',
					{},
					{
						headers: {
							'Refresh-Token': refreshToken,
						},
					},
				)

				console.log('DEBUG: 새로운 new AccessToken발급: ', refreshRes)
				const newAccessToken = refreshRes.data.accessToken

				authStore.tokens.accessToken = newAccessToken

				// 원래 요청 다시 실행
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
				return myaxios(originalRequest)
			} catch (refreshError) {
				console.warn('🔁 Refresh 실패 → 로그아웃 처리')
				authStore.logout()
				router.push({ name: 'signIn' })
				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	},
)
export default myaxios
*/
