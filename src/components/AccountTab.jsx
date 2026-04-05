import { useApp } from "../context/Context";

export default function AccountTab() {
  const { accounts,role } = useApp(); 

  return (
    <div className="bg-white p-4 mt-4 rounded-xl">
      <h2 className="font-bold text-xl">Accounts</h2>
      {role === "admin" && (
  <button className="bg-blue-500 text-white px-3 py-1 rounded mb-3">
    Add Account
  </button>
)}

      <div className="overflow-x-auto mt-3">
        <table className="min-w-full divide-y divide-zinc-200">

          {/* HEAD */}
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Account
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-zinc-600 uppercase">
                Balance
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-zinc-200">

            {accounts.map((acc) => (
              <tr key={acc.id}>

                {/* ACCOUNT NAME */}
                <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">
                  <div className="flex items-center space-x-2">
                    <div className="size-7 bg-zinc-200 rounded-full flex items-center justify-center text-xs">
                      🏦
                    </div>
                    <span>{acc.name}</span>
                  </div>
                </td>

                {/* TYPE */}
                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs capitalize
                      ${
                        acc.type === "bank"
                          ? "bg-blue-100 text-blue-600"
                          : acc.type === "wallet"
                          ? "bg-purple-100 text-purple-600"
                          : acc.type === "credit"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {acc.type}
                  </span>
                </td>

                {/* BALANCE */}
                <td
                  className={`p-4 text-sm font-medium
                    ${
                      acc.balance < 0
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                >
                  $ {acc.balance}
                </td>

              </tr>
            ))}

            {/* EMPTY STATE */}
            {accounts.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No accounts found
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}