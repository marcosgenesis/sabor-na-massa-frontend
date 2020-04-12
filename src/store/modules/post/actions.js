export function postDetail(selectedPost) {
  return {
    type: '@post/POST_DETAIL',
    payload: selectedPost,
  };
}
