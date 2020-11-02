<template>
  <div id="props">
    <h3>Properties</h3>
    <h4>&lt;sidebar /&gt; component</h4>
    <p class="mb-1">
      The sidebar component extends the b-sidebar, hence it offers everything
      that the b-sidebar does.
    </p>
    <a
      href="https://bootstrap-vue.org/docs/components/sidebar#comp-ref-b-sidebar"
      target="_blank"
      >Bootstrap Vue b-sidebar reference
    </a>
    <h5 class="mt-4">Additional props</h5>
    <!-- TODO: mobile-fullscreen inside a table -->
    <b-table :items="sidebarProps"> </b-table>

    <h4>&lt;layout /&gt; component</h4>
    <p>
      All of the above mentioned properties can be passed to this component and
      everything will be passed down to the sidebar except the following.
    </p>
    <b-table :items="layoutProps"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Props',
  data() {
    return {
      sidebarProps: [
        {
          property: 'mobile-fullscreen',
          default: false,
          description: 'The menu is full-screen on mobile (<=768px) devices.'
        }
      ],
      layoutProps: [
        {
          property: 'navbar-class',
          default: 'null',
          description: 'Class(es) added to the navbar (eg. bg-primary)'
        }
      ]
    };
  }
};
</script>

<style></style>
