import { useState } from 'react';
import Transactions from "./Components/Trasactions/Transactions";
import TransactionItem from "./Components/TransactionItem/TransactionItem";
import Balance from './Components/Balance/Balance';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTransactionAdded = () => {
    console.log("Transaction Added");
    setRefresh((prev) => !prev);  // Toggle refresh state
  };

  const handleTransactionDeleted = () => {
    console.log("Transaction Deleted");
    setRefresh((prev) => !prev);  // Toggle refresh state
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={headerStyle}>Expense Tracker</h1>
      <TransactionItem onTransactionAdded={handleTransactionAdded} />
      <Transactions onTransactionDeleted={handleTransactionDeleted} />
      {/* Pass the 'refresh' state to Balance */}
      <Balance refresh={refresh} />
    </div>
  );
};

// Inline Styles
const appContainerStyle = {
  width: '80%',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f9',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  color: '#062150',
};

export default App;
