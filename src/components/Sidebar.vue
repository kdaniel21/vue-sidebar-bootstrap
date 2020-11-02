<template>
  <div>
    <slot name="toggle-icon">
      <b-icon
        v-b-toggle.sidebar
        icon="list"
        class="h3 m-2 d-md-none"
        style="vertical-align: none"
      ></b-icon>
    </slot>

    <b-sidebar
      id="sidebar"
      v-model="showSidebar"
      :shadow="shadow"
      :no-close-on-esc="!isMobile"
      :no-close-on-backdrop="!isMobile"
      :no-close-on-route-change="!isMobile"
      :no-header-close="!isMobile"
      :backdrop="isMobile && backdrop"
      :width="isMobile && mobileFullscreen ? '100vh' : width"
      v-bind="$attrs"
      @change="val => $emit('change', val)"
    >
      <template v-slot:title>
        <slot name="title">
          <div class="p-2">
            <h5>Sidebar Title</h5>
          </div>
        </slot>
      </template>

      <template v-slot:default>
        <b-list-group
          flush
          class="mb-3"
          v-for="section in sections"
          :key="section.name"
        >
          <slot name="section-title">
            <h6 class="ml-2">{{ section.name }}</h6>
          </slot>
          <div v-for="(item, index) in section.children" :key="item.text">
            <sidebar-item :item="item" :index="index">
              <slot name="dropdown-icon">
                <sidebar-item-icon
                  v-if="item.children"
                  v-b-toggle="`nav-item-${index}`"
                  icon="chevron-right"
                  style="width: 0.7em"
                />
              </slot>
            </sidebar-item>
            <b-collapse
              v-if="item.children"
              :id="`nav-item-${index}`"
              class="pl-3"
            >
              <b-list-group flush>
                <sidebar-item
                  v-for="childItem in item.children"
                  :key="childItem.text"
                  :item="childItem"
                  :text-small="true"
                />
              </b-list-group>
            </b-collapse>
          </div>
        </b-list-group>
      </template>

      <template v-slot:footer>
        <slot name="footer"></slot>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import SidebarItem from '@/components/SidebarItem';
import SidebarItemIcon from '@/components/SidebarItemIcon';

export default {
  name: 'Sidebar',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    width: {
      type: String,
      default: '320px'
    },
    mobileFullscreen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SidebarItem,
    SidebarItemIcon
  },
  data() {
    return {
      showSidebar: true,
      isMobile: false
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  watch: {
    isMobile(value) {
      this.$emit('is-mobile', value);
      this.showSidebar = !value;
    }
  },
  computed: {
    sections() {
      return this.items[0].name
        ? this.items
        : [{ name: null, children: [...this.items] }];
    }
  }
};
</script>
