import * as types from '../actions/galleryActions';
const initialState = {
  isFetching: false,
  error: '',
  galleryData: [],
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_GALLERY: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.SUCCESS_GALLERY: {
      return {
        ...state,
        galleryData: action.payload,
        isFetching: false,
      };
    }
    case types.FAILED_GALLERY: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
};
