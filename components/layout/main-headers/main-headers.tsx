import { useEffect, useState } from "react";

import PortfolioLogo from "components/icons/logo";
import { Button } from "components/ui";
import HeaderButtons from "./header-buttons";
import HamburgerButton from "./hamburger-button";
import { useToggler } from "Utilities";
import MobileNavigationDrawer from "./mobile-navigation-drawer";
import NavigationItems from "./navigation-items";

function MainHeaders() {
  // const [open, setOpen] = useState(false);
  const [open, toggleDrawer] = useToggler(false);

  return (
    <header className={`z-0 w-full bg-white dark:bg-slate-800`}>
      <nav
        className={`max-w-6xl mx-auto flex justify-between items-center h-16 py-10 px-4 md:px-0 md:py-20`}
      >
        <div className="w-20 h-20">
          <PortfolioLogo />
        </div>
        <div className={`hidden md:block`}>
          <NavigationItems />
        </div>
        <div className="hidden space-x-8 md:flex flex-row items-center">
          <HeaderButtons />
        </div>
        {/* Below is Mobile Navigation toggle button */}
        <HamburgerButton open={open} onClick={toggleDrawer} />
      </nav>
      <div className="block md:hidden">
        <MobileNavigationDrawer isOpened={open} />
      </div>
    </header>
  );
}

export default MainHeaders;
