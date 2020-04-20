import React, { useReducer } from 'react';
import reducer from './reducer';
import getHackernews from '../../../api';
import {
    upVote,
    hideNews,
    loadMore
} from './actions';

import NewsListComponent from '../../../components/organisms/NewsList';

const NewsList = props => {

    const initial_state = { 
        hits: props.newsListData.hits, 
        pageDisplayed: props.newsListData.page
    }
    
    const [state, dispatch] = useReducer( reducer, initial_state );

    const upVoteNewsItem = newsItem => upVote(dispatch, newsItem);
    
    const hideNewsItem = newsItem => hideNews(dispatch, newsItem);
    
    const loadMoreNews = async () => {
        const moreData = await getHackernews(parseInt(state.pageDisplayed) + 1);
        loadMore(dispatch, moreData);
    }

    return (
        <NewsListComponent
            newsListData={state.hits}
            loadMoreNews={loadMoreNews}
            upVoteNewsItem={upVoteNewsItem}
            hideNewsItem={hideNewsItem}
     />)
};

export default NewsList;
