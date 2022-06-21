import { useCallback, useState } from "react";

const useControlNavbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  const stickNavbar = useCallback(() => {
    if (typeof window !== undefined) {
      if (window.scrollY > 160) {
        !isShrunk && setIsShrunk(true);
      }
      if (window.scrollY < 10) {
        isShrunk && setIsShrunk(false);
      }
    }
  }, [isShrunk]);

  return { isShrunk, stickNavbar };
};

export default useControlNavbar;
