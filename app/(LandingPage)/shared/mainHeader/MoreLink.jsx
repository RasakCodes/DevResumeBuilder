import React from "react";
import NavigateMenu from "@/shared/component/NaviagateMenu";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const MoreLink = () => {
  return (
    <NavigateMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="!bg-transparent !px-0">
          More
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex flex-col gap-3 p-3 w-[200px] md:w-[300px]">
            <NavigationMenuLink>Link</NavigationMenuLink>
            <NavigationMenuLink>Link</NavigationMenuLink>
            <NavigationMenuLink>Link</NavigationMenuLink>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigateMenu>
  );
};

export default MoreLink;
