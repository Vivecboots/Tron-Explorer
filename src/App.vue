<template>
  <div id="app">
    <Search @searchResult="showResult" />
    <div v-if="searchResult">
      <h2>Search Result:</h2>
      <pre>{{ searchResult }}</pre>
    </div>
  </div>
</template>

<script>
import Search from './components/Search-component.vue'

export default {
  components: {
    Search
  },
  data() {
    return {
      searchResult: null, // added variable to hold search result
    }
  },
  methods: {
    showResult(result) {
      console.log(result);
      this.searchResult = result; // assign the result to searchResult
    }

    
  }
}
</script>
