<template>
  <div id="app">
    <Search @searchResult="showResult" />
    <div v-if="searchResult">
      <h2>Search Result:</h2>
      <pre>{{ searchResult }}</pre>
    </div>
    <BlockInfo :transactions="transactions" />
  </div>
</template>

<script>
import Search from './components/Search-component.vue'
import BlockInfo from './components/BlockInfo.vue' // Import the BlockInfo component

export default {
  components: {
    Search,
    BlockInfo // Register the BlockInfo component
  },
  data() {
    return {
      searchResult: null, // added variable to hold search result
      transactions: [], // added variable to hold transactions
    }
  },
  methods: {
    showResult(result) {
      console.log(result);
      this.searchResult = result; // assign the result to searchResult
    },
    // Add a new method to update the transactions
    updateTransactions(transactions) {
      this.transactions = transactions;
    }
  },
  mounted() {
    // Call the updateTransactions method every few seconds to fetch new transactions
    setInterval(this.updateTransactions, 5000);
  }
}
</script>
