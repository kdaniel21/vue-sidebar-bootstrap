<template>
  <component
    v-if="icon"
    :is="icon.tag ? icon.tag : 'b-icon'"
    :icon="!icon.tag ? icon : icon.attributes.icon"
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
