import axios from 'axios';

const apiUrl = 'https://peppermint-backend.onrender.com/api/'; 

// Fetch transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${apiUrl}transactions`);  
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

// Add transaction
export const addTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${apiUrl}transactions`, transaction);  
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

// Delete transaction
export const deleteTransaction = async (id) => {
  try {
    await axios.delete(`${apiUrl}transactions/${id}`); 
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};

// Get net balance
export const getBalance = async () => {
  try {
    const response = await axios.get(`${apiUrl}transactions/balance`);  
    return response.data.netBalance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};
