import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../Routes";
import "./TabBar.css";

interface TabBarItem {
  route: string;
  label: string;
  icon: string;
  disabled: boolean;
}

// В ЛР5 доступны только «Лента» и «Плитка», «Добавление» и «Вход» появятся в ЛР6
const ITEMS: TabBarItem[] = [
  { route: ROUTES.FEED, label: ROUTE_LABELS.FEED, icon: "▶", disabled: false },
  { route: ROUTES.ADD, label: ROUTE_LABELS.ADD, icon: "+", disabled: true },
  { route: ROUTES.GRID, label: ROUTE_LABELS.GRID, icon: "■", disabled: false },
  { route: ROUTES.LOGIN, label: ROUTE_LABELS.LOGIN, icon: "◉", disabled: true },
];

export const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (route: string) =>
    route === ROUTES.GRID ? location.pathname === ROUTES.GRID : location.pathname.startsWith(route);

  return (
    <Nav className="tabBar">
      {ITEMS.map((item) => (
        <Nav.Item key={item.route} className="tabBarCell">
          <Nav.Link
            className={`tabBarItem ${isActive(item.route) ? "tabBarItemActive" : ""}`}
            disabled={item.disabled}
            onClick={() => navigate(item.route)}
          >
            <span className="tabBarIcon">{item.icon}</span>
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
