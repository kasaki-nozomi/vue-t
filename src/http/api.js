import { get, post } from '@/http/request'

export const getUserInfo = (params, header, cancelToken) => post('/acc/api/account/store/user', params, header, cancelToken)
export const getEventDo = (params, header, cancelToken) => get('/ame/do', params, header, cancelToken)

export const bilog = (params, header, cancelToken) => post('/log/', params, header, cancelToken)
