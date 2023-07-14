<template>
    <div>
      <div v-for="transaction in transactions" :key="transaction.transactionID">
        <!-- Display transaction information -->
        <div>{{ transaction.transactionID }}</div>
        <div>{{ transaction.from }}</div>
        <div>{{ transaction.to }}</div>
        <div>{{ transaction.value }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import TronWeb from 'tronweb';
  
  export default {
    data() {
      return {
        transactions: [],
      };
    },
    mounted() {
      const HttpProvider = 'https://api.trongrid.io';
      const fullNode = new TronWeb.providers.HttpProvider(HttpProvider);
      const eventServer = new TronWeb.providers.HttpProvider(HttpProvider);
  
      const tronWeb = new TronWeb(fullNode, null, eventServer);
  
      // Fetch initial transactions
      this.fetchTransactions(tronWeb);
  
      // Continuously fetch transactions at a specified interval
      setInterval(() => {
        this.fetchTransactions(tronWeb);
      }, 5000); // Fetch every 5 seconds, adjust as needed
    },
    methods: {
      async fetchTransactions(tronWeb) {
        const contractAddress = '0x...'; // Specify the contract address to filter events
        const eventName = 'Transfer'; // Specify the event name to filter
  
        try {
          const transactions = await tronWeb.getEventByTransactionID({
            eventName,
            contractAddress,
          });
  
          // Update the transactions data array
          this.transactions = transactions;
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      },
    },
  };
  </script>
  