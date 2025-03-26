import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { dataMenu } from "../../db/data";

const Menu = () => {
  const classBased = "menu__item";
  return (
    <ul className="menu">
      {dataMenu.map((item) => {
        return (
          <NavLink
            key={uuidv4()}
            className={({ isActive }) => 
              isActive ?
             `${classBased} menu__item-active` :
              classBased }
            to={item.path}
          >
            {item.name}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Menu;