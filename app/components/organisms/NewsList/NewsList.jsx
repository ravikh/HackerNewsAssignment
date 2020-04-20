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
            
            <div className="row">
                <div className="col-lg-offset-2 col-lg-10">
                    <LoadMore onClick={loadMoreNews}>Load More</LoadMore>
                </div>
            </div>
            
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
