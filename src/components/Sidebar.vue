<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar">
      <v-icon>mdi-dots-vertica</v-icon>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sidebar',
  props: {},
  computed: {
    ...mapGetters([
      'sidebarCollapsed',
    ]),
    sidebarWidth() {
      return this.sidebarCollapsed ? `38px` : '180px';
    },
  },
  methods: {
    ...mapActions([
      'toggleSidebar',
    ]),
  },
}
</script>

<style scoped>
  .sidebar {
    color: white;
    background-color: green;
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
</style>
