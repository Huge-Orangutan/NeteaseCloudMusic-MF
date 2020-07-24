import {request} from './request.js'
  
export function Search(keywords,limit,type,offset){
	return request({
		url:'/search',
		params:{
			keywords,
			limit,
			type,
			offset
		}
	})
}
