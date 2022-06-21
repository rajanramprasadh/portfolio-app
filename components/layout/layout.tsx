import { useEffect, useCallback } from "react";
import { useControlNavbar } from "Utilities";
import { Footer } from "./footer";
import { MainHeaders } from "./main-headers";

function Layout(props: any) {
  const { isShrunk, stickNavbar } = useControlNavbar();

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => window.removeEventListener("scroll", stickNavbar);
  }, [stickNavbar]);

  return (
    <>
      <MainHeaders isShrunk={isShrunk} />
      <main className={`w-full`}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
