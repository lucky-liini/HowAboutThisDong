import myaxios from './axios-common'
type LoginResponse = {
	status: string,
    tokens: {
		accessToken: string,
		refreshToken: string
	}
}

async function loginAndGetJWT(id:string, password:string) {
    return await myaxios.post<LoginResponse>('/api/auth/login', {
        id: id,
        password: password
    })
}

async function logoutFromBE(refresh_token:string) {
	return await myaxios.post(
		`/api/auth/logout`,
		{},
		{
			headers: {
				'Refresh-Token': refresh_token,
			},
		},
	)
}

export {loginAndGetJWT, logoutFromBE}