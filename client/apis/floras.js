import request from 'superagent'

const rootUrl = '/api/v1'

export function getFloras () {
  return request.get(rootUrl + '/flora')
    .then(res => {
      return res.body.floras
    })
}
