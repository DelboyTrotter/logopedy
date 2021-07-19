<template>
  <v-card
    class="elevation-0 mb-2"
    color="white"
  >
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="mt-0">
        <v-col cols="6" class="pb-0">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedDatefns"
                :rules="[rules.required]"
                clearable
                dense
                label="Date"
                readonly
                v-bind="attrs"
                outlined
                v-on="on"
                color="accent"
                @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="session.date"
              color="accent"
              @change="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="6" class="pb-0">
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="session.time"
                :rules="[rules.required]"
                dense
                color="accent"
                label="Time"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              v-model="session.time"
              full-width
              color="accent"
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="6" class="pb-0">
          <v-text-field
            label="Price"
            dense
            :rules="[rules.required]"
            color="accent"
            outlined
            clearable
            v-model="session.price"
          />
        </v-col>
      </v-row>
      <v-row class="mt-0 pt-0">
        <v-col cols="9" class="pb-0">
          <v-textarea
            outlined
            :rules="[rules.required]"
            dense
            label="Note"
            class="text-justify body-2"
            flat
            auto-grow
            color="accent"
            v-model="session.note"
          />
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col cols="7">
          <v-btn
            depressed
            class="white--text"
            color="accent"
            width="100%"
            @click="save"
            :disabled="!valid"
          >
            Save
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn
            depressed
            width="100%"
            @click="$emit('close');"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  import { format, parseISO } from 'date-fns'

  export default {
    data: () => ({
      valid: false,
      menu1: false,
      time: null,
      menu2: false,
      rules: {
          required: value => !!value || 'Required.',
        },
      session: {
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        time: null,
        price: '',
        note: '',
      },
    }),
    computed: {
      computedDateFormattedDatefns () {
        return this.session.date ? format(parseISO(this.session.date), 'EEEE, do, MMMM yyyy') : ''
      },
    },
    methods: {
      save() {
        this.session.date = format(parseISO(this.session.date), 'EEEE, do, MMMM yyyy');
        this.$emit('save', this.session)
      },
    },
  }
</script>
