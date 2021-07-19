<template>
  <div>
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
</template>

<script>
export default {
  name: 'ProfileSessions',
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
