import { Button } from "components/ui";
import { useState } from "react";
import { useToggler } from "Utilities";

type HamburgerButtonProps = {
  onClick: React.MouseEventHandler;
  open: boolean;
};

function HamburgerButton(props: HamburgerButtonProps) {
  const { onClick, open } = props;

  return (
    <Button
      classes={`z-20 flex md:relative w-12 h-8 flex-col justify-between items-center md:hidden right-8 ${
        open && "sticky"
      }`}
      onClick={onClick}
      ariaLabel="Menu Button"
    >
      <span
        className={`h-1 w-full bg-gray-600 dark:bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${
          open ? "rotate-45 translate-y-3.5" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-gray-600 dark:bg-gray-300 rounded-lg transition-all duration-300 ease-in-out ${
          open ? "w-0" : "w-full"
        }`}
      />
      <span
        className={`h-1 w-full bg-gray-600 dark:bg-gray-300 rounded-lg transform transition duration-300 ease-in-out ${
          open ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      />
    </Button>
  );
}

export default HamburgerButton;
