<template>
  <component
    :is="icon.tag ? icon.tag : 'b-icon'"
    :icon="!icon.tag ? icon : null"
    v-bind="icon.attributes"
  />
</template>

<script>
export default {
  name: 'SidebarItemIcon',
  props: {
    icon: {
      type: [Object, String],
      default: null
    }
  }
};
</script>
