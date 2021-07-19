<template>
  <div>
    <v-card
      class="elevation-0 mb-2"
      color="white"
    >
      <v-card-text>Patience Info</v-card-text>
      <v-list-item-group>
        <v-list-item
          class="black--text"
          disabled
        >
          <template v-slot:default>
            <v-list-item-content>
              <v-list-item-subtitle>First name</v-list-item-subtitle>
              <v-list-item-title>{{ profileDetails.info.firstName }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>Last name</v-list-item-subtitle>
              <v-list-item-title>{{ profileDetails.info.lastName }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-list-item class="black--text" disabled>
          <template v-slot:default>
            <v-list-item-content>
              <v-list-item-subtitle>Birth</v-list-item-subtitle>
              <v-list-item-title>{{ profileDetails.info.birth }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-card>
    <v-card
      class="elevation-0"
      color="white"
    >
      <v-card-text>Parent Info</v-card-text>
      <v-list-item-group>
        <v-list-item
          class="black--text"
          disabled
        >
          <template v-slot:default>
            <v-list-item-content>
              <v-list-item-subtitle>Name</v-list-item-subtitle>
              <v-list-item-title>{{ profileDetails.info.parent }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-subtitle>Phone</v-list-item-subtitle>
              <v-list-item-title>{{ profileDetails.info.phone }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
