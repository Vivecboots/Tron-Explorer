<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>Block</th>
            <th>Age</th>
            <th>From</th>
            <th>To</th>
            <th>Contract</th>
            <th>Value</th>
            <th>Transaction Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.transactionID">
            <td>{{ transaction.transactionID }}</td>
            <td>{{ transaction.blockNumber }}</td>
            <td>{{ transaction.age }}</td>
            <td>{{ transaction.from }}</td>
            <td>{{ transaction.to }}</td>
            <td>{{ transaction.contract }}</td>
            <td>{{ transaction.value }}</td>
            <td>{{ transaction.fee }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  // ... existing code ...
  
  export default {
    // ... existing code ...
  
    methods: {
        async fetchTransactions(tronWeb) {
  try {
    const transactions = await tronWeb.trx.getRecentTransactions();

    // Update the transactions data array
    this.transactions = transactions.data.map(transaction => ({
      transactionID: transaction.txID,
      blockNumber: transaction.blockNumber,
      age: 'Placeholder Age', // Replace with actual code to calculate age
      from: transaction.raw_data.contract[0].parameter.value.owner_address,
      to: transaction.raw_data.contract[0].parameter.value.to_address,
      contract: 'Placeholder Contract', // Replace with actual code to fetch contract information
      value: transaction.raw_data.contract[0].parameter.value.amount,
      fee: 'Placeholder Fee', // Replace with actual code to fetch transaction fee
    }));
  } catch (error) {
    console.error('Error fetching transactions:', error);
}
    },
  },
};
</script>