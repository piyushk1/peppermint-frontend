import { useEffect, useState } from 'react';
import axios from 'axios';

const Balance = ({ refresh }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        console.log("Fetching balance...");
        const response = await axios.get('https://peppermint-backend.onrender.com/api/balance');
        console.log("Balance fetched:", response.data);  
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance', error);
      }
    };

    fetchBalance();
  }, [refresh]); // Re-fetch balance whenever `refresh` changes

  return (
    <div style={{ ...balanceContainerStyle, color: balance < 0 ? 'red' : 'green' }}>
      <h3>Net Balance</h3>
      <p>{balance}</p>
    </div>
  );
};

// Inline Styles
const balanceContainerStyle = {
  textAlign: 'center',
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default Balance;
