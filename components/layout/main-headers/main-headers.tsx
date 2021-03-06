import { useEffect, useState } from "react";

import PortfolioLogo from "components/icons/logo";
import { Button } from "components/ui";
import HeaderButtons from "./header-buttons";
import HamburgerButton from "./hamburger-button";
import { useToggler } from "Utilities";
import MobileNavigationDrawer from "./mobile-navigation-drawer";
import NavigationItems from "./navigation-items";

interface MainHeadersProps {
  isShrunk: boolean;
}

function MainHeaders({ isShrunk }: MainHeadersProps) {
  // const [open, setOpen] = useState(false);
  const [open, toggleDrawer] = useToggler(false);

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full transition-colors duration-500 bg-white dark:bg-slate-800 shadow-xl transition-all duration-500`}
    >
      <nav
        className={`max-w-6xl mx-auto w-11/12 flex justify-between items-center h-16 py-10 px-4 md:px-0 md:${
          isShrunk ? "py-12" : "py-20"
        } transition-all duration-500`}
      >
        <div className={`w-20 h-auto`}>
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
