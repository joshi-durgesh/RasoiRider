import { useEffect, useState } from "react";
import MENU_API from "./constant";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(
        MENU_API + resId
      )}`
    );

    const json = await data.json();
    setMenuData(json);
  };

  return menuData;
};

export default useRestaurantMenu;
