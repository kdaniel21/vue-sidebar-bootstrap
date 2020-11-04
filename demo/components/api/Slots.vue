<template>
  <div id="slots">
    <h3>Slots</h3>
    <h4>&lt;vsb-sidebar /&gt; component</h4>
    <p>
      Every slot provided by the default b-sidebar component is available.
      <a
        href="https://bootstrap-vue.org/docs/components/sidebar#comp-ref-b-sidebar-slots"
        >The original docs.</a
      >
    </p>
    <h5>Additional Slots</h5>
    <b-table :items="sidebarSlots"></b-table>

    <h4>&lt;vsb-layout /&gt; component</h4>
    <p>
      Every above mentioned slot can be passed here and they will get passed to
      the sidebar.
    </p>
    <b-table :items="layoutSlots"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Slots',
  data() {
    return {
      sidebarSlots: [
        {
          name: 'toggle-icon',
          description:
            'Toggle icon. Defaults to hamburger menu provided by Bootstrap (list icon). v-b-toggle.sidebar needs to be added to toggle the sidebar'
        },
        { name: 'section-title', description: 'Title of the sections.' },
        {
          name: 'dropdown-icon',
          description:
            'The icon of the dropdown on the right side of the menu item.'
        },
        {
          name: 'footer',
          description: 'Footer on the bottom of the sidebar. No default value.'
        }
      ],
      layoutSlots: [
        {
          name: 'default',
          description:
            'The content of the page. Defaults to a fluid b-container with a router-view inside.'
        },
        {
          name: 'navbar-content',
          description: 'Complete content of the navbar.'
        }
      ]
    };
  }
};
</script>

<style></style>
