import HackerNews from '../app/containers/organisms/NewsList';

export default function Index(props) {
  return <HackerNews />
}

Index.getInitialProps = async () => {
  return {}
}