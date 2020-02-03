import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  id: '',
  ui: {
    isLoading: false
  }
};

export const {
  comicRequest,
  comicSuccessed,
  comicFailed
} = createActions({
  COMIC_REQUEST: (id) => ({ id }),
  COMIC_SUCCESSED: (comic) => ({ comic }),
  COMIC_FAILED: undefined
});

const reducer = handleActions({
  [comicRequest]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: true
    }
  }),
  [comicSuccessed]: (state, { payload: { comic }}) => ({
    ...state,
    ...comic,
    ui: {
      ...state.ui,
      isLoading: false
    }
  }),
  [comicFailed]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: false
    }
  })
}, initialState);

export default reducer;

