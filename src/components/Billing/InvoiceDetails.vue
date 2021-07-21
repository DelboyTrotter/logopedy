<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between pb-0">
        <div class="title">
          <h4 class="font-size-18">EVENTS</h4>
        </div>
        <v-btn
          color="accent"
          class="white--text text-none"
        >
          Cancel
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>{{ `Invoice - ${invoice.name}` }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="4">
                <div>{{ `Invoice ID  ${invoice.id}` }}</div>
                <div>{{ `Date: ${invoice.date}` }}</div>
                <div>{{ `Subject: ${invoice.subject}` }}</div>
              </v-col>
              <v-col cols="4">
                <div>A</div>
                <div>B</div>
              </v-col>
              <v-col cols="4">
                <div>A</div>
                <div>B</div>
              </v-col>
          </v-row>
          </v-card-text>
        </v-card>
        {{ invoice }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BillingInvoiceDetails',
  props: {
    invoice: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 16px !important;
  }
</style>
