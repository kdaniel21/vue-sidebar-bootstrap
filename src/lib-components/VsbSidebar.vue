<template>
  <div class="align-self-end">
    <slot name="toggle-icon">
      <b-icon v-b-toggle.sidebar icon="list" class="h3 m-2 d-md-none"></b-icon>
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
            <vsb-sidebar-item :item="item" :index="index">
              <slot name="dropdown-icon" :item="item" :index="index">
                <vsb-sidebar-item-icon
                  v-if="item.children"
                  v-b-toggle="`nav-item-${index}`"
                  icon="chevron-right"
                  style="width: 0.7em"
                />
              </slot>
            </vsb-sidebar-item>
            <b-collapse
              v-if="item.children"
              :id="`nav-item-${index}`"
              class="pl-3"
            >
              <b-list-group flush>
                <vsb-sidebar-item
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
import VsbSidebarItem from './VsbSidebarItem.vue';
import VsbSidebarItemIcon from './VsbSidebarItemIcon.vue';

export default {
  name: 'VsbSidebar',
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
    VsbSidebarItem,
    VsbSidebarItemIcon
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
      const sections = [];
      const emptySection = { name: null, children: [] };

      this.items.forEach(section => {
        // If not section title, just add to the empty list
        if (!section.name) return emptySection.children.push(section);

        // Close empty section and add to final list if it contains children
        if (emptySection.children.length) {
          sections.push({ ...emptySection });
          emptySection.children = [];
        }
        sections.push(section);
      });

      return sections;
    }
  }
};
</script>
