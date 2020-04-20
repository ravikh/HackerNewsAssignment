import actionConstants from './constants';

export const upVote = (dispatch, newsItem) => {
    dispatch({ type: actionConstants.UPVOTE_ITEM, payload: newsItem.objectID });
}

export const hideNews = (dispatch, newsItem) => {
    dispatch({ type: actionConstants.HIDE_ITEM, payload: newsItem.objectID });
}

export const loadMore = (dispatch, payload) => {
    dispatch({ type: actionConstants.APPEND_ITEMS, payload });
}

export default {};