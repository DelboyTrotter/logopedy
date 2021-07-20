<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between pb-0">
        <div class="title">
          <h4 class="font-size-18">INVOICES</h4>
        </div>
        <v-btn
          to="/new-invoice"
          color="accent"
          class="white--text text-none"
          @click="loader = 'loading3'"
        >
          <v-icon
            left
            dark
          >
            mdi-plus
          </v-icon>
          New invoice
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="col-md-4 col-lg-4 col-12">
        <v-card outlined color="white">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="text-h5"
              >
                This month
              </v-card-title>
              <v-card-subtitle>{{ `${billings.currentMonthTotal} KM` }}</v-card-subtitle>
            </div>
            <v-avatar
              class="ma-3"
              color="accent"
              size="62"
            >
              <v-icon color="white">mdi-approximately-equal-box</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4" class="col-md-4 col-lg-4 col-12">
        <v-card outlined color="white">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="text-h5"
              >
                Previous month
              </v-card-title>
              <v-card-subtitle>{{ `${billings.previousMonthTotal} KM` }}</v-card-subtitle>
            </div>
            <v-avatar
              class="ma-3"
              color="accent"
              size="62"
            >
              <v-icon color="white">mdi-artstation</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4" class="col-md-4 col-lg-4 col-12">
        <v-card outlined color="white">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="text-h5"
              >
                This year
              </v-card-title>
              <v-card-subtitle>{{ `${billings.currentYearTotal} KM` }}</v-card-subtitle>
            </div>
            <v-avatar
              class="ma-3"
              color="accent"
              size="62"
            >
              <v-icon color="white">mdi-alarm</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="0" color="white">
          <v-card-text class="title">This month invoices</v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Month
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in billings.paid"
                  :key="index"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.month }}</td>
                  <td class="red--text">{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="0" color="white">
          <v-card-text class="title">Unpaid invoices</v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Month
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in billings.unpaid"
                  :key="index"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.month }}</td>
                  <td class="red--text">{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Billing',
  computed: {
    ...mapState([
      'billings',
    ]),
  },
  methods: {
    ...mapActions([
      'getBillings',
    ]),
  },
  mounted() {
    this.getBillings();
  },
}
</script>

<style scoped>
  .title {
    font-weight: 600;
    font-size: 16px !important;
  }
</style>