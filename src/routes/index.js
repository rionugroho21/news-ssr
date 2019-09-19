import Layout from '../component/Layout';
import Landing from './Landing';
import Article from './Article';

export default [{
  component: Layout,
  routes: [
    {
      path: "/",
      exact: true,
      component: Article
    },
    {
      path: "/photo",
      exact: true,
      component: Landing
    }
  ]
}]
