//기존에 axios-home.js
/*
// backend로 비동기 요청하는 함수가 들어있는 스크립트
// axios-common.js에서 export한 객체를 import 해서 비동기 요청을 함.
// home과 관련된 내용들 (homeinfo, deals)에 대한 것들
import myaxios from '@/utils/axios-common'

async function searchByLocation(params, success, fail) {
	await myaxios
		.get(`/test/apt/infos`, {
			params: {
				sido: params.sido,
				gugun: params.gugun,
				dong: params.dong,
			},
		})
		.then(success)
		.catch(fail)
}

async function getAptInfo(aptSeq, success, fail) {
	await myaxios.get(`/test/apt/${aptSeq}/deals`).then(success).catch(fail)
}

async function getDongcode(sido, gugun, dong, success, fail) {
	await myaxios
		.get(`/test/dongcode`, {
			params: {
				sido,
				gugun,
				dong,
			},
		})
		.then(success)
		.catch(fail)
}
async function getAptInfoPerPage(dongcode, itemsPerPage, currentPage) {
	const response = await myaxios
		.get(`/test/aptcard`, {
			params: {
				dongcode,
				page: currentPage,
				size: itemsPerPage,
			},
		})
		.catch((reason) => {
			console.log(reason)
		})

	return response.data
}
async function getDeals(aptcode) {
	const response = await myaxios.get(`test/apt/${aptcode}/deals`).catch((reason) => {
		console.log(reason)
	})
	return response.data[0]
}

async function getSubways(apt, success, fail) {
	const response = await myaxios
		.get(`/test/subways/info`, {
			params: {
				apt_lat: apt.latitude,
				apt_lot: apt.longitude,
			},
		})
		.then(success)
		.catch(fail)
}
export { searchByLocation, getAptInfo, getAptInfoPerPage, getDongcode, getDeals, getSubways }

*/
