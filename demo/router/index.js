import Introduction from '../components/introduction/Introduction';
import Install from '../components/introduction/Install';
import Usage from '../components/introduction/Usage';
import Icons from '../components/introduction/Icons';
import Integration from '../components/introduction/Integration';
import Props from '../components/api/Props';
import Slots from '../components/api/Slots';
import Events from '../components/api/Events';
import Contribute from '../components/support/Contribute';

export default [
  { path: '/', redirect: '/introduction' },
  { path: '/introduction', component: Introduction },
  { path: '/install', component: Install },
  { path: '/usage', component: Usage },
  { path: '/icons', component: Icons },
  { path: '/integrate', component: Integration },
  { path: '/props', component: Props },
  { path: '/slots', component: Slots },
  { path: '/events', component: Events },
  { path: '/contribute', component: Contribute }
];
