<template>
  <div id="usage">
    <h3>Usage</h3>

    <p>
      To use the module you only need to install it, then import and register it
      in the component where you would like to use it.
    </p>
    <pre v-pre>
      <span class="font-weight-bold">import {{ Sidebar }} from 'vue-sidebar-bootstrap'</span>

      export default {
        name: 'YourComponent',
        <span class="font-weight-bold">components: {
          Sidebar
          ...
        }</span>
      }
    </pre>
    <p>Then add it to your template where you would like to place it.</p>
    <pre v-pre>&lt;sidebar :items="navItems" /&gt;</pre>
    <p>
      As you've seen, the only thing you need to add is the
      <span class="font-italic">navItems</span> property which contains the menu
      items in the following form:
    </p>
    <pre v-pre>
      navItems: [
              {
                name: 'Introduction',
                children: [
                  {
                    text: 'Get Started',
                    icon: 'person-fill',
                    children: [
                      { text: 'Introduction', link: '/introduction', icon: 'alarm' },
                      ...
                    ]
                  }
                ]
              },
              {
                name: 'API',
                children: [
                  { text: 'Slots', link: '/slots', icon: 'alarm' },
                  ...
                ]
              }
            ]
      </pre
    >
    <p>
      This way you can add "sections" to the sidebar. If you don't need any of
      them, you can leave them and only pleace the menu objects (that would go
      inside <span class="font-italic">children</span>.)
    </p>
    <pre v-pre>
      navItems: [
        {
          text: 'People',
          icon: 'person-fill',
          children: [
            { text: 'Foo', link: '/foo', icon: 'alarm' },
            { text: 'Bar', link: '/bar', icon: 'alarm' }
          ]
        },
        { text: 'Analytics', icon: 'bar-chart', link: '/analytics' }
      ]
    </pre>
    <h5>Further Customization</h5>
    <p>
      I do everything to make the component as customizable as possible. Please
      see the <span class="font-weight-bold">API section</span> on the sidebar
      to explore the customization options, such as
      <router-link to="/slots">slots</router-link> or
      <router-link to="/props">properties</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Usage'
};
</script>

<style></style>
