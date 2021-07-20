<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between pb-0">
        <div class="title">
          <h4 class="font-size-18">NEW PROFILE</h4>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="elevation-0 mb-2"
          color="white"
        >
          <v-card-subtitle>Patience info</v-card-subtitle>
          <v-card-text>
            <v-row class="pb-0">
              <v-col cols="3" class="pb-0">
                <v-text-field
                  label="Name"
                  dense
                  color="accent"
                  outlined
                  clearable
                />
              </v-col>
              <v-col cols="3" class="pb-0">
                <v-text-field
                  label="Surname"
                  dense
                  color="accent"
                  outlined
                  clearable
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="pb-0">
                <v-text-field
                  label="Date birth"
                  dense
                  color="accent"
                  outlined
                  clearable
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="elevation-0 mb-2"
          color="white"
        >
          <v-card-subtitle>Parent info</v-card-subtitle>
          <v-card-text>
            <v-row class="pb-0">
              <v-col cols="3" class="pb-0">
                <v-text-field
                  label="Parent name"
                  dense
                  color="accent"
                  outlined
                  clearable
                />
              </v-col>
              <v-col cols="3" class="pb-0">
                <v-text-field
                  label="Telephone"
                  dense
                  color="accent"
                  outlined
                  clearable
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          class="elevation-0 mb-2"
          color="white"
        >
          <v-card-subtitle>First review</v-card-subtitle>
          <v-card-text>
            <v-row class="pb-0">
              <v-col cols="6" class="pb-0">
                <v-textarea
                  class="text-justify body-2"
                  flat
                  auto-grow
                  outlined
                  label="Type here"
                  background-color="white"
                  color="accent">
                </v-textarea>
              </v-col>
            </v-row>
            <v-row class="mt-0">
        <v-col cols="4">
          <v-btn
            depressed
            class="white--text"
            color="accent"
            width="100%"
            @click="save"
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 16px !important;
  }
</style>
