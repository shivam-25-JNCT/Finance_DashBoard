import { useApp } from "../context/Context";

export default function Navbar({setOpen}) {
  const { role, setRole } = useApp();

  return (
  
     <div className="flex justify-between items-center mb-4 bg-zinc-950 h-15 rounded-2xl text-white px-4 ">

      <h1 className="text-xl font-bold">FinDash</h1>
         
      

      <div className="flex items-center gap-2">
        <span className="text-sm">Role: </span>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border px-2 py-1 rounded text-gray-400"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button
  className="md:hidden text-2xl"
  onClick={() => setOpen(true)}
>
  ☰
</button>

    </div>

   
  );
}