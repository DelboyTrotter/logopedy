<template>
  <div>
    <div v-if="!sessionDialogActive">
      <v-card
        class="elevation-0 mt-2 mb-2"
        color="white"
      >
        <v-row class="ma-0">
          <v-col align="end">
            <v-btn
              class="text-none"
              outlined
              color="accent"
              @click="sessionDialogActive = true">
                <v-icon>mdi-plus</v-icon>
              Create new session
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        elevation="0"
        class="mb-2"
      >
        <v-card-text>Upcoming Sessions</v-card-text>
        <v-list-item-group>
          <v-list-item
            class="black--text"
            disabled
            v-for="(upcomingSession, index) in profileDetails.sessions.upcoming"
            :key="index"
          >
            <template v-slot:default>
              <v-list-item-content>
                <v-list-item-title>{{ upcomingSession.date }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ upcomingSession.time }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-card>
      <v-card
        elevation="0"
      >
        <v-card-text>Finished Sessions</v-card-text>
        <v-list-item-group>
          <v-list-item
            class="black--text"
            disabled
            v-for="(finishedSession, index) in profileDetails.sessions.finished"
            :key="index"
          >
            <template v-slot:default>
              <v-list-item-content>
                <v-list-item-title>{{ finishedSession.date }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-content>
                <v-list-item-title>{{ finishedSession.time }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </div>
    <div v-if="sessionDialogActive">
      <Session
        @save="save"
        @close="sessionDialogActive = false"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Session from './Session';

export default {
  name: 'ProfileSessions',
  components: {
    Session,
  },
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      sessionDialogActive: false,
    };
  },
  methods: {
    ...mapActions([
      'saveNewSession',
    ]),
    save(session) {
      this.saveNewSession(session);
      this.sessionDialogActive = false;
    },
  },
}
</script>
