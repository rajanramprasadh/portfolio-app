import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "components/ui";
import { LinkedIn, MoonFilled, SunFilled } from "components/icons";

function HeaderButtons() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
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
    </>
  );
}

export default HeaderButtons;
