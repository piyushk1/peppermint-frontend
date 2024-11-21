# Expense Tracker

  

## Overview

  

Expense Tracker is a simple web application that helps you track your expenses and income. You can add transactions, view your transaction history, and see a summary of your expenses. The app is built using React for the frontend and Express.js with MongoDB for the backend.

  

### Frontend URL (Deployed)

[https://peppermintpiyush.netlify.app](https://peppermintpiyush.netlify.app)

  

### Backend URL (Deployed)

[https://peppermint-backend.onrender.com](https://peppermint-backend.onrender.com)

  

## Features

  

-  **Add Transaction**: Users can add transactions (both expense and income) by specifying the amount, description, date, and type (Expense or Income).

-  **View Transactions**: Displays a list of all transactions with details like amount, description, and date.

-  **Delete Transactions**: Users can delete transactions from the transaction list.

-  **Balance Summary**: Shows the total balance (income - expense).

  

## Technologies Used

  

-  **Frontend**: React.js, Axios, and Tailwind CSS

-  **Backend**: Node.js, Express.js, MongoDB

-  **Deployment**: Netlify (Frontend), Render (Backend)

  

## API Endpoints

  

### 1. `GET /api/transactions`

  

-  **Description**: Fetches all transactions.

-  **Response**: A list of transactions.

  ```
  {

"_id": "607c72ef7a03d5f4691c2b00",

"amount": 100,

"description": "Groceries",

"date": "2023-12-12",

"type": "Expense"

}


```

### . `POST /api/transactions`

-   **Description**: Adds a new transaction.
-   **Request Body**:

    
    `{
      "amount": 150,
      "description": "Rent",
      "date": "2023-12-15",
      "type": "Expense"
    }` 
    
-   **Response**: The created transaction object.

#### Example Response:

`{
  "_id": "607c72ef7a03d5f4691c2b02",
  "amount": 150,
  "description": "Rent",
  "date": "2023-12-15",
  "type": "Expense"
}` 

----------

### 3. `GET /api/balance`

-   **Description**: Fetches the current balance based on all transactions.
-   **Response**: The current balance, which is calculated by subtracting the total expenses from the total income.

#### Example Response:



`{
  "balance": 400
}`
