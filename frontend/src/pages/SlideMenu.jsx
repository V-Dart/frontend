import { NavLink } from "react-router-dom";
import {
  FaTasks,
  FaComments,
  FaChartBar,
  FaProjectDiagram,
  FaStream,
  FaVideo,
} from "react-icons/fa";

const menuItems = [
  { name: "Task", icon: <FaTasks />, to: "/dashboard/task" },
  { name: "Live Chat", icon: <FaComments />, to: "/dashboard/chat" },
  { name: "PowerBI", icon: <FaChartBar />, to: "/dashboard/powerbi" },
  { name: "Workspace", icon: <FaProjectDiagram />, to: "/dashboard/workspace" },
  { name: "Pipelines", icon: <FaStream />, to: "/dashboard/pipelines" },
  { name: "Meet", icon: <FaVideo />, to: "/dashboard/meet" },
];

export default function SlideMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay dimmer */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-20 transition-opacity duration-300 z-10 ${
          isOpen ? "opacity-200 visible" : "opacity-0 invisible"
        } transition-opacity duration-300 ease-in-out`}
      />

      {/* Sliding panel */}
      
      <div
        className={`fixed top-0 left-2.5 h-full w-51 bg-[#273549] text-white z-10  
            transition-transform duration-300 ease-in-out
            border-l-2 border-gray-600
            ${ isOpen ? "translate-x-10" : "-translate-x-60"} `}
            //style={{ left: '48px' }}  // 64px - 2px border = 62px
      >
        <div className="p-4 font-semibold text-lg">
          Menu
        </div>
        <nav className="flex flex-col gap-0 mt-0">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 mx-4 rounded-lg transition duration-200 ${
                  isActive ? "bg-[#334155]" : "hover:bg-[#334155]/80"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
