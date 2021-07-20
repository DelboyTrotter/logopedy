<template>
  <v-app>
    <v-card>
      <v-app-bar
        app
        flat
        color="white"
      >
        <v-app-bar-nav-icon @click="sidebarCollapsed = !sidebarCollapsed"></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-fullscreen</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      v-model="sidebarCollapsed"
      bottom
      color="primary"
      dark
      app
    >
      <div class="pa-2">
        <v-img src="@/assets/logo.svg" height="40" />
      </div>
      <v-list nav>
        <div class="caption">MENU</div>
        <v-list-item 
          dense 
          :ripple="false"
          v-for="item, i of routes" 
          :key="i" 
          :to="{path: `${item.name}`}"
        >
          <v-icon small class="pr-2">{{item.icon}}</v-icon>
          {{ routeName(item.name) }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="background: #f8f8fb">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { upperFirst } from 'lodash';

export default {
  name: 'App',
  data() {
    return {
      sidebarCollapsed: true,
      toggle: null,
      routes: [
        {
          name: 'profile',
          icon: 'mdi-account-circle-outline'
        },
        {
          name: 'billing',
          icon: 'mdi-cash-multiple',
        },
        {
          name: 'calendar',
          icon: 'mdi-calendar-text-outline'
        },
        {
          name: 'materials',
          icon: 'mdi-cash-multiple',
        },
      ],
    };
  },
  methods: {
    routeName(route) {
      return upperFirst(route);
    },
  },
};
</script>

<style  lang="scss" scoped>
  .v-list--nav {
    padding: 30px;

    .caption {
      color: #6a7187;
      padding-bottom: 15px;
    }

    .v-list-item--link:before {
      background-color: transparent;
    }

    .v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
      color: #6a7187 !important;
      transition: 0.5s;

      .v-icon {
        color: #6a7187;
      }

      &:hover {
        color: #ffffff !important;

        .v-icon {
          color: #ffffff;
        }
      }
    }

    .v-list .v-list-item--active .v-icon {
      color: #ffffff;
    }
  }
</style>
