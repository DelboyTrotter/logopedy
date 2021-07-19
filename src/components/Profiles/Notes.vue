<template>
  <div>
    <div v-if="!showNoteDialog">
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
              @click="showNoteDialog = true">
                <v-icon>mdi-plus</v-icon>
              Create new note
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-card
        class="elevation-0 mb-2"
        color="white"
        v-for="(item, index) in profileDetails.notes"
        :key="index"
      >
        <v-list>
          <v-list-group
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="subtitle-1">
                  {{ item.title}} {{ `- ${item.date}` }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.time }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon @click="editNote($event, item)">mdi-plus</v-icon>
            </template>

            <v-list-item class="pl-4">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.description }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </div>
    <div v-if="showNoteDialog">
      <Note @save="save" :details="noteDetails"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Note from './Note';

export default {
  name: 'ProfilesNotes',
  components: {
    Note,
  },
  props: {
    profileDetails: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      noteDetails: {},
      showNoteDialog: false,
    };
  },
  methods: {
    ...mapActions([
      'saveNote',
    ]),
    save(note) {
      console.log('note: ', note);
      this.saveNote(note);
      this.showNoteDialog = false;
    },
    editNote(e, item) {
      this.showNoteDialog = true;
      e.stopPropagation();
      e.preventDefault();
      this.noteDetails = item;
    },
  },
}
</script>
