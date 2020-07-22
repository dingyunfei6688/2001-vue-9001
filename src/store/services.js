import axios from '../plugins/axios.js';

function getQuery(collectionName,str){
	let url = '/data/' + collectionName + '.json';
	return axios({url}).then(res=>res.data.result.data)
}

function getTag(collectionName){
	let url = '/data/' + collectionName + '.json';
	return axios({url}).then(res=>res.data.result)
}

export {getQuery, getTag}