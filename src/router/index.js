import Introduction from '@/components/demo/introduction/Introduction';
import Install from '@/components/demo/introduction/Install';
import Usage from '@/components/demo/introduction/Usage';
import Icons from '@/components/demo/introduction/Icons';
import Integration from '@/components/demo/introduction/Integration';
import Props from '@/components/demo/api/Props';
import Slots from '@/components/demo/api/Slots';
import Events from '@/components/demo/api/Events';
import Contribute from '@/components/demo/support/Contribute';

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
