const SET_PHOTO = 'SET_PHOTO';

let initialState = {
  uri: null,
  name: null,
  id: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO: {
      return {...action.date};
    }
    default:
      return {...state};
  }
};
export const setPhotoDataAction = (date) => ({type: SET_PHOTO, date});

export default photoReducer;
