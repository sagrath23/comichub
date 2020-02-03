import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  list: [],
  ui: {
    isLoading: false
  }
};

export const {
  comicListRequest,
  comicListSuccessed,
  comicListFailed
} = createActions({
  COMIC_LIST_REQUEST: undefined,
  COMIC_LIST_SUCCESSED: (list) => ({ list }),
  COMIC_LIST_FAILED: undefined
});

const reducer = handleActions({
  [comicListRequest]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: true
    }
  }),
  [comicListSuccessed]: (state, { payload: { list }}) => ({
    ...state,
    list,
    ui: {
      ...state.ui,
      isLoading: false
    }
  }),
  [comicListFailed]: (state) => ({
    ...state,
    ui: {
      ...state.ui,
      isLoading: false
    }
  })
}, initialState);

export default reducer;

