import {request} from './request.js'

export function getAccountInformation(phone,password){
	return request({
		url:'/login/cellphone',
		params:{
			phone,
			password
		}
	})
}



