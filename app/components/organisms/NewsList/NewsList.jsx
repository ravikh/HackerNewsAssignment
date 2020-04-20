import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewsItem from '../NewsListItem';
import LoadMore from '../../molecules/LoadMore'
import List from '../../atoms/List';
import ListItem from '../../atoms/ListItem';
import styles from './NewsList.style';

const NewsList = ({newsListData, loadMoreNews, upVoteNewsItem, hideNewsItem, className}) => {
    return (
        <div className={className}>
            <List type="ol">
                {newsListData.map(listItem => {
                    if (!listItem.title || listItem.hidden) return null;
                    return (
                        <ListItem key={listItem.objectID} type="ol">
                            <NewsItem 
                                key={listItem.objectID} 
                                newsItem={listItem} 
                                hideNewsItem={hideNewsItem} 
                                upVoteNewsItem={upVoteNewsItem}
                                className="news-item-row"
                            />
                        </ListItem>
                    )
                })}
            </List>
            <LoadMore onClick={loadMoreNews}>Load More</LoadMore>
        </div>
    );
};

NewsList.propTypes = {
    newsListData: PropTypes.array,
};

const StyledNewsList = styled(NewsList)`
  ${styles};
`;

export default StyledNewsList;
