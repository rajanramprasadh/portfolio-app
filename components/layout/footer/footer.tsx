import { LinkedIn } from "components/icons";
import { Button } from "components/ui";

function Footer() {
  return (
    <footer className="transition-all duration-500 bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="transition-all duration-500 h-0.5 bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="whitespace-normal">
            <p> &#169; Ram Prasadh Varadharajan. All Rights Reserved.</p>
          </div>
          <div>
            <p>Developed by Ram Prasadh Varadharajan</p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            Social-Media: &nbsp;
            <Button
              href="https://www.linkedin.com/in/ram-prasadh-varadharajan-a4220787"
              classes="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <LinkedIn class="h-6 w-6 hover:text-blue-600" />
              <span className="sr-only">Linkedin URL</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
