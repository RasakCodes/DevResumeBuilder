import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

const NavigateMenu = ({ children }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>{children}</NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigateMenu;
