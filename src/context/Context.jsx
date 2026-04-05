import { createContext, useContext, useState } from "react";
import { transactionsData } from "../data/TransData";
import {accountsData} from '../data/AccData'
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transaction, setTransaction] = useState(transactionsData);
  const [accounts, setAccounts] = useState(accountsData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");
const [page, setPage] = useState("dashboard");

const addTransaction = (newTx) => {
  setTransactions((prev) => [...prev, newTx]);
};
  return (
    <AppContext.Provider value={{
      transaction,
      setTransaction,
      accounts,
      setTransaction,
      role,
      setRole,
      filter,
      setFilter,
      page,
      setPage,
      addTransaction
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);