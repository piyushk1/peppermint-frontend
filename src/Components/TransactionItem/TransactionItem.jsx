import { useState } from 'react';
import { addTransaction } from '../../api';

const TransactionItem = ({ onTransactionAdded }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Expense');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !description || !date) {
      alert('Please fill in all fields');
      return;
    }

    const transaction = { amount, description, date, type };

    try {
      await addTransaction(transaction);
      onTransactionAdded();
      setAmount('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error adding transaction', error);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h3 style={formTitleStyle}>Add Transaction</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <button type="submit" style={buttonStyle}>Add</button>
      </form>
    </div>
  );
};

// Inline Styles
const formContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '30px',
  width: '50%',  
  margin: '0 auto',  
};

const formTitleStyle = {
  fontSize: '1.5rem',
  color: '#062150',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const selectStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#062150',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default TransactionItem;
