<template>
  <div id="layout" :style="sidebarStyling">
    <!-- NAVBAR -->
    <b-navbar id="navbar" :class="navbarClass">
      <vsb-sidebar
        @change="val => (sidebarOpen = val)"
        @is-mobile="val => (isMobile = val)"
        v-bind="$attrs"
      >
        <!-- PASS DOWN SLOTS TO THE SIDEBAR -->
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </vsb-sidebar>
      <slot name="navbar-content"></slot>
    </b-navbar>

    <!-- CONTENT -->
    <slot name="default">
      <b-container class="py-5">
        <router-view></router-view>
      </b-container>
    </slot>
  </div>
</template>

<script>
import VsbSidebar from '@/components/VsbSidebar';

export default {
  name: 'Layout',
  components: {
    VsbSidebar
  },
  props: {
    navbarClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      sidebarOpen: true,
      isMobile: false
    };
  },
  computed: {
    sidebarStyling() {
      // Does not add margin on mobile or when the sidebar is closed
      if (!this.sidebarOpen || this.isMobile) return;

      const sidebarWidth = this.$attrs.width || '320px';

      return {
        'margin-left': sidebarWidth,
        width: `calc(100vw - ${sidebarWidth})`
      };
    }
  }
};
</script>
