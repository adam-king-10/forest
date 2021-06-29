import { getFloras } from '../apis/floras'

export const SET_FLORAS = 'SET_FLORAS'

export function setFloras (floras) {
  return {
    type: SET_FLORAS,
    floras,
    id: floras.id,
    images: floras.images,
  }
}

export function fetchFloras () {
  return dispatch => {
    return getFloras()
      .then(floras => {
        dispatch(setFloras(floras))
        return null
      })
  }
}
