import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useApp } from "../context/Context";

export default function Charts() {
  const { transaction } = useApp();
  const COLORS = ["#22c55e", "#ef4444", "#3b82f6", "#f59e0b"];


  const expenses = transaction.filter((t) => t.type === "expense");

 
  const pieData = Object.values(
    
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { name: curr.category, value: 0 };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );


  let balance = 0;
  const trendData = transaction.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return { ...t, balance };
  });

  return (
    <div className="grid md:grid-cols-2 gap-4">

      
      <div className="bg-white p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Balance Trend</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    
      <div className="bg-white p-4 rounded-xl">
        <h2 className="font-semibold mb-2">Spending Breakdown</h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80}>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}