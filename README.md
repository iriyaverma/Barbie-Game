# Barbie's Fashion Shop

Welcome to Barbie's Fashion Shop! This web application allows you to connect to MetaMask, interact with a custom ERC20 token (BarbieToken), and manage your virtual inventory.

## Features

- **Connect to MetaMask**: Easily connect your MetaMask wallet.
- **Mint Tokens**: Mint 1000 BarbieTokens, only callable by the contract owner.
- **View Balance**: Check the balance of your MetaMask account in BarbieTokens.
- **Manage Inventory**: Purchase items and add them to your virtual inventory.
- **Donate All Items**: Donate all purchased items without resetting your balance.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) browser extension

### Installation

1. **Clone the repository**:
    

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Compile the contract**:
    ```sh
    npx truffle compile
    ```

4. **Deploy the contract**:
    Update `truffle-config.js` with your network settings, then run:
    ```sh
    npx truffle migrate --network <network_name>
    ```

### Smart Contract

The smart contract `BarbieToken.sol` is located in the `contracts` directory. It includes the following functionalities:
- Mint 1000 tokens (callable only by the contract owner)
- Get the balance of an account

### Frontend

The frontend is a simple HTML/CSS/JavaScript setup located in the `src` directory. It includes:
- MetaMask integration
- Functions to connect MetaMask, mint tokens, get balance, purchase items, and donate all items

### Usage

1. **Open the application**:
    Open `index.html` in your browser.

2. **Connect to MetaMask**:
    Click the "Connect to MetaMask" button to connect your MetaMask wallet.

3. **Mint Tokens**:
    If you are the contract owner, click "Mint 1000 Tokens" to mint tokens.

4. **View Balance**:
    Click "Get Balance" to view the balance of your connected MetaMask account in BarbieTokens.

5. **Purchase Items**:
    Click "Purchase Item" to purchase items and add them to your inventory.

6. **Donate All Items**:
    Click "Donate All" to donate all purchased items. This action does not reset your balance.

### Files

- `contracts/BarbieToken.sol`: The Solidity smart contract.
- `src/index.html`: The HTML file for the frontend.
- `src/styles.css`: The CSS file for styling.
- `src/scripts.js`: The JavaScript file for MetaMask integration and contract interaction.

### Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Shopping with Barbie's Fashion Shop!
