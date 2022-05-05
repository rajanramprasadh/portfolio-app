import { useCallback, useEffect, useState } from "react";

function useToggler(initialValue: boolean): [boolean, () => void] {
  const [open, setOpen] = useState<boolean>(initialValue);

  const toggleDrawer = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return [open, toggleDrawer];
}

export default useToggler;
