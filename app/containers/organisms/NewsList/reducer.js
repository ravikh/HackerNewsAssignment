import actionConstants from './constants';

export default (state, { type, payload }) => {
  switch (type) {
    case actionConstants.UPVOTE_ITEM: {
      const newsList = state.hits.map(newsItem => {
        if (newsItem.objectID === payload) {
          return {
            ...newsItem,
            upvoted: true,
          };
        }
        return newsItem;
      });
      return { ...state, hits: newsList };
    }

    case actionConstants.HIDE_ITEM: {
      const hits = state.hits.map(newsItem => {
        if (newsItem.objectID === payload) {
          return {
            ...newsItem,
            hidden: true,
          };
        }
        return newsItem;
      });
      return { ...state, hits };
    }

    case actionConstants.APPEND_ITEMS: {
      const mergedNewsItems = [...state.hits, ...payload.hits];
      return { ...state, hits: mergedNewsItems, pageDisplayed: payload.page };
    }

    default:
      return state;
  }
};
