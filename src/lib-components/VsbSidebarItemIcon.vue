<template>
  <component
    v-if="icon && Object.keys(icon).length"
    :is="icon.tag ? icon.tag : 'b-icon'"
    :icon="!icon.tag ? icon : icon.attributes.icon"
    v-bind="icon.attributes"
  />
</template>

<script>
export default {
  name: 'VsbSidebarItemIcon',
  props: {
    icon: {
      type: [Object, String],
      default: () => {}
    }
  }
};
</script>
