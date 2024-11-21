import { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../../api';

const Transactions = ({ onTransactionDeleted }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [onTransactionDeleted]);

  const handleDelete = async (id) => {
    try {
      await deleteTransaction(id);
      onTransactionDeleted();  // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div style={listContainerStyle}>
      <h3 style={listTitleStyle}>Transaction List</h3>
      <ul style={listStyle}>
        {transactions.map((transaction) => (
          <li key={transaction._id} style={transactionItemStyle}>
            <span>{transaction.type}: ${transaction.amount} - {transaction.description} ({formatDate(transaction.date)})</span>
            <button onClick={() => handleDelete(transaction._id)} style={deleteButtonStyle}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles
const listContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '50%',  
  margin: '0 auto',  
};

const listTitleStyle = {
  fontSize: '1.5rem',
  color: '#062150',
  marginBottom: '20px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const transactionItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #eee',
  marginBottom: '10px',
};

const deleteButtonStyle = {
  backgroundColor: '#f44336',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Transactions;
