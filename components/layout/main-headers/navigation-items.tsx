import React from "react";

import { Button } from "components/ui";

function NavigationItems() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-12 md:space-x-8 md:space-y-0">
      <Button
        classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
        href="/"
        afterHoverEffect={true}
      >
        About Me
      </Button>
      <Button
        classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
        href="/projects"
        afterHoverEffect={true}
      >
        Projects
      </Button>
      <Button
        classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
        href="/experience"
        afterHoverEffect={true}
      >
        Experience
      </Button>
      <Button
        classes={`px-3 text-gray-600 dark:text-gray-300 font-semibold`}
        href="/contact"
        afterHoverEffect={true}
      >
        Contact
      </Button>
    </div>
  );
}

export default NavigationItems;
