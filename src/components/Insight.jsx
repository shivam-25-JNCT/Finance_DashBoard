import { useApp } from "../context/Context";


export default function Insight() {
  const { transaction } = useApp();
const filteredTx = transaction.filter(
  (t) => t.category !== "Salary"
);
  const highest = filteredTx.reduce((prev, curr) =>
    curr.amount > prev.amount ? curr : prev
  );

  return (
    
             <div className={`bg-amber-200  p-5 rounded-xl flex items-end justify-between cursor-pointer card-hover`}>

            <div className='col gap-10 md:gap-12'>
               <p className='text-sm text-zinc-600 mb-1'>
                  Insights
                </p>
                 <p className='text-2xl font-bold  text-zinc-900 '>
                  $ {highest.amount}</p>
            </div>
            <div className={`p-2 rounded-full bg-white`}>
                <p>Highest Transaction:  {highest.category}</p>
            </div>

        </div>
  )
}