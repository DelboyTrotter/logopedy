<template>
  <v-card
    elevation="0"
    class="rounded-md"
    color="white"
  >
    <v-card-text class="pt-1 pb-0 px-0">
      <v-textarea
        class="text-justify body-2"
        flat
        auto-grow
        filled
        background-color="white"
        color="black"
        solo
        v-model="profileDetails.firstReview">
      </v-textarea>
    </v-card-text>
        <v-card-actions>
          <v-btn
            depressed
            width="85%"
            class="white--text"
            color="accent"
            @click="saveFirstReview(profileDetails)"
          >
            Save
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn depressed>
            Cancel
          </v-btn>
        </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProfilesFirstReview',
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions([
      'saveFirstReview',
    ]),
  },
}
</script>