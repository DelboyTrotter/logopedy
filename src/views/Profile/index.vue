<template>
  <div>
    <div class="title">
      <h4 class="font-size-18">PROFILE</h4>
    </div>
  <v-row>
    <v-col cols="4">
      <v-text-field
        class="rounded-pill"
        height="35"
        dense
        flat
        prepend-inner-icon="mdi-magnify"
        solo
        label="Search"
        clearable
      />
      <v-list two-line>
        <v-list-item-group
          v-model="selected"
          active-class="active-profile"
        >
          <template v-for="(profile, index) in profiles">
            <v-list-item
              :key="index"
              class="rounded"
              :disabled="index === selected"
              @click="setActiveItem(profile, index)"
            >
              <template v-slot:default>
                <v-list-item-avatar>
                  <v-img :src="profile.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="profile.name"></v-list-item-title>
                  <v-list-item-subtitle v-html="profile.parent" />
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-divider
              :key="profile.name"
              light
            />
          </template>
        </v-list-item-group>
      </v-list>
    </v-col>
    <v-col cols="8">
      <v-card
        elevation="0"
        class="rounded-md"
        color="white"
      >
        <v-list-item two-line color="#f8f8fb">
          <v-list-item-content>
            <v-list-item-title>{{ profileDetails.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ `Parent: ${profileDetails.parent}`}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn-toggle
            v-model="activeChip"
            mandatory
            borderless
            dense
            color="white"
            active-class="accent"
          >
            <v-btn
              v-for="(chip, index) in profileChips"
              :key="index"
              class="rounded text-none"
              min-width="112"
              @click="setActiveProfileMenu(chip, index)"
            >
              <span class="hidden-sm-and-down">{{ chip }}</span>
            </v-btn>
          </v-btn-toggle>
        </v-card-actions>
      </v-card>
      <v-divider></v-divider>
      <component
        :is="activeProfileMenu"
        :profileDetails="profileDetails"
      />
    </v-col>
  </v-row>
  </div>
</template>

<script>
import { capitalize, camelCase } from 'lodash';
import { mapState, mapActions } from 'vuex';
import Sessions from '@/components/Profiles/Sessions';
import Info from '@/components/Profiles/Info';
import FirstReview from '@/components/Profiles/FirstReview';
import Invoices from '@/components/Profiles/Invoices';
import Notes from '@/components/Profiles/Notes';

export default {
  name: 'Profile',
  components: {
    Sessions,
    Info,
    FirstReview,
    Invoices,
    Notes,
  },
  data() {
    return {
      selected: 0,
      profileDetails: {},
      activeProfileMenu: null,
      profileChips: ['Sessions', 'Info', 'First review', 'Invoices', 'Notes'],
      activeChip: 0,
    };
  },
  computed: {
    ...mapState([
      'profiles',
    ]),
  },
  methods: {
    ...mapActions([
      'getProfiles',
    ]),
    setActiveItem(profile, index) {
      this.selected = index;
      this.profileDetails = profile;
    },
    setActiveProfileMenu(menuItem, index) {
      this.activeChip = index;
      this.activeProfileMenu = camelCase(capitalize(menuItem));
    },
  },
  mounted() {
    this.getProfiles();
  },
  watch: {
    profiles(items) {
      this.profileDetails = items[0];
      this.activeProfileMenu = 'Sessions';
      this.activeChip = 0;
    },
  },
}
</script>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 16px !important;
    padding-bottom: 24px;
  }

  .theme--light.v-sheet {
    background-color: #f8f8fb;
  }

  .active-profile {
    background-color: white;
  }

  .v-list-item--link:before {
    background-color: transparent;
  }

  .theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.05);
  }
</style>
