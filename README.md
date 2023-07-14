# 🔍 Tron-Explorer

## 🌟 overview

tron-explorer is an intuitive and efficient tool for crawling and interpreting tron blockchain data. Whether it's locating a particular tron hash, identifying a specific block, or examining an account, tron-explorer offers a user-friendly interface and robust functionality to meet your needs.

Our goal is to empower developers and blockchain enthusiasts, particularly those new to evm-derivative blockchains, where simple, easy-to-follow resources may be scarce. By offering a solid introduction and walkthrough of tron, this project serves as a foundational stepping stone to understanding and working with the tron blockchain.

Please note, this project does not incorporate react-script and is specifically designed to demonstrate the back-end aspects of interacting with tron.


![license](https://img.shields.io/badge/License-MIT-brightgreen)

📚 API Reference

#### TronGrid API

Get Account

```http
  GET /api/account/${address}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `address` | `string` | **Required** Address of the account to fetch |

#### Get item

```http
   GET /api/transaction/${transactionHash}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `transactionHash	`      | `string` | **Required** Hash of the transaction to fetch |

#### Get item

```http
   GET /api/block/${blockNumber}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `blockNumber`      | `string` | **Required** Number of the block to fetch |






💻 Installation



    1. Clone the repository to your local machine

```bash
    git clone https://github.com/your_username/Tron-Explorer.git
    
```
2. Install Tron-Explorert with npm

```bash

    cd Tron-Explorer
    npm install Tron-Explorer
```
3. Create a .env file in the root of your project and populate it with the following: 

```bash

VUE_APP_HTTP_PROVIDER=https://api.trongrid.io
VUE_APP_PRIVATE_KEY=YourPrivateKey

```

Remember to replace YourPrivateKey with your actual private key. Your private key is sensitive information. Never share it and use it responsibly!


  4. Launch the development server with the following command:

```bash
npm run serve

```
You can now access Tron-Explorer in your browser at http://localhost:8080. Search for a transaction by its hash, an account by its address (beginning with T), or a block by its number.


🚀5. To deploy this project run:

```bash
  npm run build
```


📝 Documentation

 - [TronDAO Documentation:]https://developers.tron.network/reference


🎉 Acknowledgements

 - [TronDAO Hackathon:]https://trondao.org/hackatron/
 - [TronDAO Official Website:]https://trondao.org


## 💡Why I'm Doing This

Migrating from EVM and ZK EVM to TVM presented initial challenges, as expected when transitioning to a new environment. However, in smaller communities, it can be difficult to find answers to all your questions, making it harder to adapt to the new platform. This challenge is magnified when participating in a hackathon that caters to both amateurs and professionals.

To address this issue and support users facing similar problems, it is crucial to foster a sense of community. By inspiring and empowering builders, we can create an environment where newcomers feel encouraged rather than discouraged. Sharing experiences, providing guidance, and offering resources will help break down barriers and facilitate smoother transitions for new developers.

By actively contributing to community building efforts, we can ensure that knowledge is shared, questions are answered, and a supportive network is established. This will ultimately help newcomers overcome challenges, inspire innovation, and foster a collaborative environment for all participants.

Let's come together to inspire, educate, and create a thriving community where builders of all levels can thrive.
## 🖋️Authors

"#W" (Blair) Is a junior blockchain developer from the Pacific Northwest.  If you would like to know more, please leave a message on the page as a request or at blairqqw@gmail.com.  Please check often as I will be updating with more information. Thank you for checking out my project and check back for more tutorials!

- [@vivecboots](https://github.com/Vivecboots)

## 🤝Contributing

Contributions are always welcome!

Please feel free to reach out to me or submit a request.  Tron is a blockchain with a lot of potential but a shortage of tools. So feel free to use what you need!


📜 License

![license](https://img.shields.io/badge/License-MIT-brightgreen)

