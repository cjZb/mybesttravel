import axios from 'axios'
axios.defaults.timeout = 10000
import qs from 'qs'

export default {
  fetchGet (url, params = {}) {
    params = qs.stringify(params);
    return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    params = qs.stringify(params);
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
