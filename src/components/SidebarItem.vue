<template>
  <b-list-group-item
    class="d-flex justify-content-between align-items-center"
    :to="item.link"
    v-b-toggle="item.children ? `nav-item-${index}` : null"
    active-class="active"
    exact
    :disabled="item.disabled"
  >
    <span>
      <sidebar-item-icon :icon="item.icon" class="mr-3" />
      <span :class="{ small: textSmall }">{{ item.text }}</span>
    </span>
    <slot></slot>
  </b-list-group-item>
</template>

<script>
import SidebarItemIcon from '@/components/SidebarItemIcon';

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: null
    },
    textSmall: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SidebarItemIcon
  }
};
</script>

<style scoped></style>
