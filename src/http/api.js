import { get, post } from '@/http/request'

export const getSome = (query, header, cancelToken) => get('', query, header, cancelToken)
export const postSome = (data, header, cancelToken) => post('', data, header, cancelToken)
