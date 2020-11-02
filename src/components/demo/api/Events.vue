<template>
  <div id="events">
    <h3>Events</h3>
    <h4>&lt;vsb-sidebar /&gt; component</h4>
    <b-table :items="sidebarEvents"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      sidebarEvents: [
        {
          name: 'change',
          description: 'Fired every time the sidebar is toggled.'
        },
        {
          name: 'is-mobile',
          description: 'Fired once the mobile mode is toggled.'
        }
      ]
    };
  }
};
</script>

<style></style>
