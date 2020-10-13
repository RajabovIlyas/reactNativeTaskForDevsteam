import * as axios from 'axios';
import {setPhotosAction} from '../store/photosReducer';

const api = 'https://api.unsplash.com';

export const getPhotos = (
  client_id = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
) => (dispatch) => {
  return axios
    .get(api + '/photos', {params: {client_id: client_id}})
    .then((res) => res.data)
    .then((data) => {
      dispatch(setPhotosAction(data));
    })
    .catch((err) => console.log(err));
};
