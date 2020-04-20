import React from 'react';
import styled from 'styled-components';
import timeSince from '../../../utils/timeSince';
import VoteButton from '../../molecules/VoteButton';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import styles from './NewsListItem.style';

const NewsListItem = ({newsItem, hideNewsItem, upVoteNewsItem, className}) => {
    const hideThisItem = (e) => {
        e.preventDefault();
        hideNewsItem(newsItem);
    }

    const upVote = (e) => {
        e.preventDefault();
        if (!newsItem.upvoted) {
            upVoteNewsItem(newsItem);
        }
    }

    if (newsItem.title && !newsItem.hidden) {
        return <div className={`row ${className}`}>
            <div className="col-xs-3 col-lg-1 comments-count">{newsItem.num_comments}</div>
            
            <div className="col-xs-5 col-lg-1">
                <span className="vote-count">{newsItem.points}</span>
                <VoteButton onVoteClick={upVote} isVoted={newsItem.upvoted ? true : false} >Up Vote</VoteButton>
            </div>

            <div className="col-xs-12 col-lg-10">
                <Heading type="h3">{newsItem.title}</Heading>
                <span className="url">{`(${newsItem.url})`}</span>
                <span className="author">
                    <span>{`by `}</span>
                    <span className="author-name">{newsItem.author}</span>
                </span>
                <span className="created-at">{timeSince(newsItem.created_at)}</span>
                <Button onClick={hideThisItem}>[hide]</Button>
            </div>
        </div>
    }
    return null;
}

const StyledNewsListItem = styled(NewsListItem)`
  ${styles};
`;

export default StyledNewsListItem;