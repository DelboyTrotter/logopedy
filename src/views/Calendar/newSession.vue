<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between pb-0">
        <div class="title">
          <h4 class="font-size-18">NEW SESSION</h4>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Session />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Session from '@/components/Profiles/Session';

export default {
  name: 'CalendarNewSession',
  components: {
    Session,
  },
}
</script>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 16px !important;
  }
</style>
