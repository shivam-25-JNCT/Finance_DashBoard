import { useApp } from "../context/Context";
import AddTransaction from "./AddTransaction";
export default function Transactions() {
  const { transaction, filter, setFilter, role } = useApp();

  const menu = [
    { id: "all", name: "All" },
    { id: "income", name: "Income" },
    { id: "expense", name: "Expense" },
  ];

  const filtered =
    filter === "all"
      ? transaction
      : transaction.filter((t) => t.type === filter);

  return (
    <div className="bg-white p-4 mt-4 rounded-xl">
      <h2 className="font-bold text-xl">Transactions</h2>

      {/* FILTER */}
      <div className="my-2 flex gap-3">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`px-3 py-1 rounded transition
              ${filter === item.id
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-green-300"
              }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* ADMIN BUTTON */}
      {role === "admin" && <AddTransaction />}

      {/* TABLE */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-zinc-200">

          {/* HEAD */}
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Category
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Type
              </th>
              {role === "admin" && <th>Action</th>}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-zinc-200">

            {filtered.map((item) => (
              <tr key={item.id}>

                {/* CATEGORY */}
                <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                  <div className="flex items-center space-x-2">
                    <div className="size-7 bg-zinc-200 rounded-full flex items-center justify-center text-xs">
                      💰
                    </div>
                    <span>{item.category}</span>
                  </div>
                </td>

                {/* AMOUNT */}
                <td className={`p-4 text-sm font-medium 
                  ${item.type === "expense" ? "text-red-500" : "text-green-600"}`}>
                  {item.type === "expense" ? "-" : "+"}$ {item.amount}
                </td>

                {/* DATE */}
                <td className="p-4 text-sm text-zinc-600">
                  {item.date}
                </td>

                {/* TYPE */}
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs
                      ${item.type === "expense"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                      }`}
                  >
                    {item.type}
                  </span>
                </td>
                {role === "admin" && (
                  <td className="p-4">
                    <button className="text-blue-500 mr-2">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                )}
              </tr>
            ))}

            {/* EMPTY STATE */}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No transactions found
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}