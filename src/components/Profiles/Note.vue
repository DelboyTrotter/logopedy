<template>
  <v-card
    class="elevation-0 mb-2"
    color="white"
  >
    <v-card-text>
      <v-row class="pb-0">
        <v-col cols="6" class="pb-0">
          <v-text-field
            label="Title"
            dense
            color="accent"
            outlined
            clearable
            v-model="note.title"
          />
        </v-col>
      </v-row>
      <v-row class="mt-0 pt-0">
        <v-col cols="9" class="pb-0">
          <v-textarea
            outlined
            dense
            label="Description"
            class="text-justify body-2"
            flat
            auto-grow
            color="accent"
            v-model="note.description">
          </v-textarea>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="7">
          <v-btn
            depressed
            class="white--text"
            color="accent"
            width="100%"
            @click="$emit('save', note)"
          >
            Save
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn depressed width="100%">Cancel</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProfilesNote',
  props: {
    details: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      note: {
        title: '',
        description: '',
        time: new Date().getTime(),
        date: new Date(),
      },
    };
  },
  mounted() {
    if (this.details.id) {
      this.note = this.details;
    }
  },
}
</script>
