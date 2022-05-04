import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import PortfolioLogo from "components/icons/logo";
import Button from "components/ui/button";
import LinkedIn from "components/icons/linkedin";
import MoonFilled from "components/icons/moon-filled";
import SunFilled from "components/icons/SunFilled";

function MainHeaders() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`w-full bg-white dark:bg-slate-800`}>
      <nav
        className={`max-w-6xl mx-auto flex justify-between items-center h-16 py-10 md:py-20`}
      >
        <div className="w-20 h-20">
          <PortfolioLogo />
        </div>
        <div className={`hidden md:block`}>
          <div className="space-x-8">
            <Button
              classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
              href="/"
              hoverEffect={true}
            >
              About Me
            </Button>
            <Button
              classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
              href="/projects"
              hoverEffect={true}
            >
              Projects
            </Button>
            <Button
              classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
              href="/experience"
              hoverEffect={true}
            >
              Experience
            </Button>
            <Button
              classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
              href="/contact"
              hoverEffect={true}
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="space-x-8 flex flex-row items-center">
          <Button
            href="https://www.linkedin.com/in/ram-prasadh-varadharajan-a4220787"
            classes="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <LinkedIn class="h-6 w-6 hover:text-blue-600" />
            <span className="sr-only">Linkedin URL</span>
          </Button>
          <Button
            classes="text-base font-normal text-gray-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme button"
          >
            {mounted && theme === "dark" ? (
              <SunFilled class="h-6 w-6 hover:text-yellow-400" />
            ) : (
              <MoonFilled class="h-6 w-6 hover:text-gray-600" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default MainHeaders;
