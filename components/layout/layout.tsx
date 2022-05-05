import { Footer } from "./footer";
import { MainHeaders } from "./main-headers";

function Layout(props: any) {
  return (
    <>
      <MainHeaders />
      <main className={`w-full`}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
