import { useState, useEffect } from 'react';
import { getBalance } from '../../api';

const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await getBalance();
        setBalance(data);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div style={balanceContainerStyle}>
      <h3 style={balanceTextStyle}>Net Balance: ${balance}</h3>
    </div>
  );
};

const balanceContainerStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  textAlign: 'center',
};

const balanceTextStyle = {
  fontSize: '1.5rem',
  color: '#4caf50',
  fontWeight: 'bold',
};

export default Balance;
