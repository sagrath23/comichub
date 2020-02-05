import { createActions, handleActions } from 'redux-actions';

export const initialState = {
  character_credits: [],
  concept_credits: [],
  id: '',
  image: {
    original_url: ''
  },
  issue_number: '',
  location_credits: [],
  ui: {
    isLoading: false
  },
  team_credits: [],
  volume: {
    name: ''
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

