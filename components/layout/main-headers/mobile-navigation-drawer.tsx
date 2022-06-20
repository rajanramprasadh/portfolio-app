import NavigationItems from "./navigation-items";
import HeaderButtons from "./header-buttons";

type MobileNavigationDrawerProps = {
  isOpened: true | false;
};

function MobileNavigationDrawer({ isOpened }: MobileNavigationDrawerProps) {
  return (
    <aside
      className={`flex flex-col items-center bg-white 
    dark:bg-slate-800 fixed top-0 right-0 h-full w-56 
    max-w-xs z-10 py-24 px-14 drop-shadow-md
    transition ease-in-out duration-500 ${
      isOpened ? "translate-x-0" : "translate-x-full"
    }`}
    >
      <NavigationItems />

      <div className={`fixed md:sticky top-3/4 space-y-10 flex flex-col items-center`}>
        <HeaderButtons />
      </div>
    </aside>
  );
}

export default MobileNavigationDrawer;
