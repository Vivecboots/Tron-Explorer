

<template>
  <div>
    <input v-model="searchInput" type="text" placeholder="Enter transaction hash, address or block">
    <button @click="search">Search</button>
  </div>
</template>

<script>




export default {

  data() {
    return {
      searchInput: '',
     

    }
  },
  methods: {
    async search() {
      const tronWeb = this.$tronWeb;  // Here we access the globally set tronWeb instance
      let result;
      if (this.searchInput.startsWith('T')) {  // Assume it's an address
        result = await tronWeb.trx.getAccount(this.searchInput);
      } else if (this.searchInput.length === 64) { // Assume it's a transaction hash
        result = await tronWeb.trx.getTransaction(this.searchInput);
      } else { // Assume it's a block number
        result = await tronWeb.trx.getBlock(this.searchInput);
      }
      this.$emit('searchResult', result);
    }
  }


  
}
</script>
