<template>
  <v-card elevation="0" color="white">
    <v-card-text>Paid invoices</v-card-text>
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
            v-for="(item, index) in profileDetails.invoices.paid"
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
</template>

<script>
  export default {
    name: 'ProfilesInvoices',
    props: {
      profileDetails: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>

<style scoped>
  .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th,
  .theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:not(:last-child) > 
  td:not(.v-data-table__mobile-row), .theme--light.v-data-table > .v-data-table__wrapper > 
  table > tbody > tr:not(:last-child) > th:not(.v-data-table__mobile-row) {
    border: none;
  }
</style>