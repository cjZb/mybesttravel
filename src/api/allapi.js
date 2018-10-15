import http from './public'
const baseUrl = '/home'

// demo
// export const sendcode = (params) => {
//   return http.fetchPost(`${baseUrl}/home/login/sendcode`,params)
// }

export const sendcode = (params) => {
  return http.fetchPost(`${baseUrl}/login/sendcode`,params)
}

export const save = (params) => {
  return http.fetchPost(`${baseUrl}/login/save`,params)
}

export const cityLine = (params) => {
  return http.fetchPost(`${baseUrl}/Index/index`,params)
}

export const find_driver = (params) => {
  return http.fetchPost(`${baseUrl}/Index/find_driver`,params)
}

export const all_dri_comment = (params) => {
  return http.fetchPost(`${baseUrl}/Index/all_dri_comment`,params)
}

export const driver_validate = (params) => {
  return http.fetchPost(`${baseUrl}/User/driver_validate`,params)
}

export const customer_order = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/customer_order`,params)
}

export const back = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/back`,params)
}

export const cus_fabu_yue = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/cus_fabu_yue`,params)
}

export const citys = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/citys`,params)
}

export const cus_fabu_bao = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/cus_fabu_bao`,params)
}

export const dri_fabu = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/dri_fabu`,params)
}

export const customer_yue_putong = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/customer_yue_putong`,params)
}

export const customer_yue_jiaji = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/customer_yue_jiaji`,params)
}

export const customer_bao = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/customer_bao`,params)
}

export const cus_comment_complete = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/cus_comment_complete`,params)
}

export const cus_comment_unfinished = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/cus_comment_unfinished`,params)
}

export const accept_general_submit = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/accept_general_submit`,params)
}

export const price = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/price`,params)
}

export const accept_bao_submit = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/accept_bao_submit`,params)
}

export const accept_jiaji_submit = (params) => {
  return http.fetchPost(`${baseUrl}/Pinche/accept_jiaji_submit`,params)
}


