import produce from 'immer';

const INITIAL_STATE = {
  post: null,
};
export default function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@post/POST_DETAIL':
      return produce(state, (draft) => {
        draft.post = action.payload;
        console.tron.log(draft);
      });
    default:
      return state;
  }
}
