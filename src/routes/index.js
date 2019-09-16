import Layout from '../component/Layout';
import Landing from './Landing';
import Article from './Article';

export default [{
  component: Layout,
  routes: [
    {
      path: "/",
      exact: true,
      component: Landing
    },
    {
      path: "/article",
      exact: true,
      component: Article
    }
  ]
}]
