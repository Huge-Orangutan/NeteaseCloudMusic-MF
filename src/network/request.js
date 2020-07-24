import axios from 'axios'
axios.defaults.withCredentials = true
export function request(config){
	 const instance = axios.create({
		 baseURL: 'http://116.85.55.233:3000',
		 withcredentials: true,
		 
	 })
	 return instance(config)
}