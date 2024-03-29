import HomePage, { getHomePageData } from './pages/Home';
import UserPage, { getUserPageData } from './pages/User/index';
import EditPostPage from './pages/EditPost';
import { DefaultPost, getDefaultPostData } from './pages/Post/index';
import OverviewPage, { getPageData } from './pages/Overview';
import UsersPage from './pages/Users/index';
import OrganizationPage, { getOrganizationPageData } from './pages/Organization';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './components/Registration/Registration';
import GovernancePage from './pages/Governance';
import Tag from './pages/Tag';
import Faq from './pages/Faq/index';
import Statistics from './pages/Statistics';
import Ambassador, { getAmbassadorPageData } from './pages/Ambassador';

export default [{
  exact: true,
  path: '/',
  component: HomePage,
  getData: getHomePageData,
}, {
  exact: true,
  path: '/overview/:route/filter/:filter',
  component: OverviewPage,
  getData: getPageData,
}, {
  exact: true,
  path: '/overview/:route/filter/:filter/page/:page',
  component: OverviewPage,
  getData: getPageData,
}, {
  exact: false,
  path: '/user/:userId',
  component: UserPage,
  getData: getUserPageData,
}, {
  exact: true,
  path: '/user/:userId/:postId',
  component: UserPage,
  getData: getUserPageData,
}, {
  exact: true,
  path: '/user/:userId/profile',
  component: UserPage,
  getData: getUserPageData,
}, {
  exact: true,
  path: '/posts/new',
  component: EditPostPage,
}, {
  exact: true,
  path: '/posts/:id/edit',
  component: EditPostPage,
}, {
  exact: true,
  path: '/posts/:postId',
  component: DefaultPost,
  getData: getDefaultPostData,
}, {
  exact: true,
  path: '/registration',
  component: RegistrationPage,
}, {
  exact: true,
  path: '/users',
  component: UsersPage,
}, {
  exact: false,
  path: '/communities/:id',
  component: OrganizationPage,
  getData: getOrganizationPageData,
}, {
  exact: true,
  path: '/communities/:id/:postId',
  component: OrganizationPage,
  getData: getOrganizationPageData,
}, {
  exact: true,
  path: '/communities/:id/profile',
  component: OrganizationPage,
  getData: getOrganizationPageData,
}, {
  exact: true,
  path: '/communities/:organizationId/discussions/new', // TODO: Change url /posts/new?orgId=123
  component: EditPostPage,
}, {
  exact: false,
  path: '/governance',
  component: GovernancePage,
}, {
  exact: true,
  path: '/tags/:title',
  component: Tag,
}, {
  exact: true,
  path: '/faq',
  component: Faq,
},
{
  exact: true,
  path: '/ambassador/:userIdentity',
  component: Ambassador,
  getData: getAmbassadorPageData,
},
{
  exact: true,
  path: '/stats',
  component: Statistics,
},
{
  exact: true,
  path: '*',
  component: NotFoundPage,
}];
