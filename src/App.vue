<template>
  <layout
    id="app"
    navbar-class="bg-primary"
    :items="navItems"
    width="250px"
    :mobile-fullscreen="true"
    shadow
  >
    <template v-slot:navbar-content>
      <b-navbar-brand>Vue Sidebar Bootstrap</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>Foo</b-nav-item>
        <b-nav-item>Bar</b-nav-item>
      </b-navbar-nav>
    </template>

    <template v-slot:footer>
      <div class="p-3">
        Created By <a href="https://danielkiss.me">Daniel Kiss</a> &copy;
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      navItems: [
        {
          name: 'Introduction',
          children: [
            {
              text: 'Get Started',
              icon: 'file-earmark-play',
              children: [
                { text: 'Introduction', link: '/introduction', icon: 'cup' },
                { text: 'Installation', link: '/install', icon: 'wrench' },
                { text: 'Basic usage', link: '/usage', icon: 'command' }
              ]
            },
            { text: 'Icons', link: '/icons', icon: 'bootstrap' },
            {
              text: 'Layout Component',
              link: '/integrate',
              icon: 'layout-sidebar'
            }
          ]
        },
        {
          name: 'API',
          children: [
            { text: 'Slots', link: '/slots', icon: 'layers' },
            { text: 'Properties', link: '/props', icon: 'journal-text' },
            { text: 'Events', link: '/events', icon: 'calendar3' }
          ]
        },
        {
          name: 'Support',
          children: [{ text: 'Contribute', link: '/contribute', icon: 'bug' }]
        }
      ]
    };
  }
};
</script>
