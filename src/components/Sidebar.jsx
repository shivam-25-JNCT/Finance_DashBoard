import { DollarSign, X } from "lucide-react";
import { tabs } from "../assets/data";
import NavItem from "./UI/NavItem";

function Sidebar({ activeTab, setActiveTab, onLogout, open, setOpen }) {
  const handleClick = (tabName) => {
    setActiveTab(tabName);
    setOpen(false); 
  };

  return (
    <>
      
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white p-4 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* CLOSE BUTTON (mobile) */}
        <button
          className="md:hidden mb-4"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        <div className="flex flex-col h-full">

          {/* LOGO */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-zinc-200 p-2 rounded-lg">
              <DollarSign size={24} className="text-zinc-700" />
            </div>
            <span className="text-xl tracking-tight font-bold text-zinc-900">
              FinanceDash
            </span>
          </div>

          {/* NAV */}
          <nav className="flex-1 space-y-2">
            {tabs.map(({ key, ...tab }) => (
              <NavItem
                key={key}
                activeTab={activeTab}
                onTabClick={handleClick}
                {...tab}
              />
            ))}
          </nav>

          {/* BOTTOM */}
          <div className="mt-auto pt-6 border-t border-zinc-100">

            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg text-red-600 bg-red-50 hover:bg-red-100"
            >
              🚪 Logout
            </button>

            <div className="mt-4 bg-zinc-100 p-4 rounded-lg text-center">
              <div className="bg-green-100 p-3 rounded-full inline-flex mb-3">
                <DollarSign size={24} className="text-green-600" />
              </div>

              <p className="text-sm font-semibold text-zinc-900">
                Unlock Premium
              </p>
              <p className="text-xs text-zinc-600 mb-3">$9.99/month</p>

              <button className="w-full bg-zinc-900 text-white text-sm py-2 rounded-lg hover:bg-zinc-700">
                Explore plans
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;