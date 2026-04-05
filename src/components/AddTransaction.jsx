import { useState } from "react";
import { useApp } from "../context/Context";

export default function AddTransaction() {
  const { addTransaction } = useApp();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTx = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount)
    };

    addTransaction(newTx);

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl mt-4">
      <h2 className="font-bold mb-2">Add Transaction</h2>

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({...form, amount: e.target.value})}
        className="border p-2 w-full mb-2"
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({...form, category: e.target.value})}
        className="border p-2 w-full mb-2"
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({...form, date: e.target.value})}
        className="border p-2 w-full mb-2"
      />

      <select
        value={form.type}
        onChange={(e) => setForm({...form, type: e.target.value})}
        className="border p-2 w-full mb-2"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}