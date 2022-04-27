import MainHeaders from "./main-headers";

function Layout(props: any) {
  return (
    <>
      <MainHeaders />
      <main className={`w-full`}>{props.children}</main>
    </>
  );
}

export default Layout;
