import { Outlet } from "react-router-dom";
import { TabBar } from "./components/TabBar";

// Общий макет: экран телефона по центру, внизу панель вкладок
export const AppLayout = () => (
  <div className="greenhouseApp">
    <Outlet />
    <TabBar />
  </div>
);
