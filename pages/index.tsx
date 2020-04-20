import HackerNewsLanding from '../app/containers/templates/NewsLanding';
import getHackerNews from '../app/api';

export default function Index({newsListData}) {
  return <HackerNewsLanding newsListData={newsListData} />
}

// This lifecycle is called at server side to achieve the server side rendering
Index.getInitialProps = async () => {
  // API call to get the hacker news data
  const hackerNewsData = await getHackerNews();
  return {newsListData: hackerNewsData};
}