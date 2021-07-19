<template>
  <v-card
    elevation="0"
    class="rounded-md"
    color="white"
  >
    <v-card-text class="pt-1 pb-0 px-0">
      <v-textarea
        class="text-justify"
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
            @click="saveFirstReview"
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
export default {
  name: 'ProfilesFirstReview',
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    saveFirstReview() {},
  },
}
</script>