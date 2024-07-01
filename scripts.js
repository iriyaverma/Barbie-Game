// Function to connect to MetaMask and display account ID
async function connectMetaMask() {
    try {
        // Request MetaMask provider
        if (window.ethereum) {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Get the accounts
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const account = accounts[0];
            
            // Display account ID
            document.getElementById('account-id').textContent = account;
        } else {
            // MetaMask not detected
            console.error('MetaMask extension not detected!');
            document.getElementById('account-id').textContent = 'MetaMask not detected!';
        }
    } catch (error) {
        console.error('Error fetching account ID:', error);
        document.getElementById('account-id').textContent = 'Error fetching account ID';
    }
}

// Function to handle purchase action
function purchaseItem() {
    let balance = parseInt(document.getElementById('balance').innerText);
    const items = [
        "Pink Dress", "Blue Top", "Red Skirt", "Yellow Hat", "Green Shoes",
        "Purple Scarf", "Orange Bag", "White Gloves", "Black Sunglasses", "Gold Necklace"
    ];
    const inventoryList = document.getElementById('inventory-list');
    const inventoryCount = inventoryList.getElementsByTagName('li').length;

    if (balance >= 10 && inventoryCount < items.length) {
        balance -= 10;
        const item = items[inventoryCount];

        document.getElementById('balance').innerText = balance;

        const newItem = document.createElement('li');
        newItem.innerText = item;
        inventoryList.appendChild(newItem);
    } else if (inventoryCount >= items.length) {
        alert('You have purchased all available items!');
    } else {
        alert('Insufficient balance!');
    }
}

// Function to handle selling all items action
function sellAllItems() {
    const inventoryList = document.getElementById('inventory-list');
    const itemsSold = inventoryList.getElementsByTagName('li').length;
    let balance = parseInt(document.getElementById('balance').innerText);

    
    document.getElementById('balance').innerText = balance;

    inventoryList.innerHTML = '';
}

// No need to auto-connect on page load
// window.addEventListener('load', async () => {
//     await connectMetaMask();
// });
