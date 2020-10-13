const SET_PHOTOS = 'SET_PHOTOS';

let initialState = {
  pagePhotos: [],
  auth: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS: {
      return {...state, pagePhotos: action.date, auth: true};
    }
    default:
      return {...state};
  }
};
export const setPhotosAction = (date) => ({type: SET_PHOTOS, date});

export default photosReducer;
