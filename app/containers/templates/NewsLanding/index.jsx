import React from 'react';
import NewsListContainer from '../../organisms/NewsList';
import NewsLandingComponent from '../../../components/templates/NewsLanding';

const NewsLandingContainer = ({newsListData}) => {
    return (
        <NewsLandingComponent>
            <NewsListContainer newsListData={newsListData} />
        </NewsLandingComponent>
    );
}

export default NewsLandingContainer;