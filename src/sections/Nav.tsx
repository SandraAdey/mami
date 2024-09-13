import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Adjust path if necessary
import mami from "../assets/logos/mami.svg"; // Ensure this path is correct
import ButtonLink from "../common/ButtonLink";

const Nav = () => {
  const textLinkClasses =
    "text-purple-500 hover:text-purple-900 active:text-purple-400";

  const navLinks = [
    { href: "#features", children: "Features" },
    { href: "#partners", children: "Partners" },
    { href: "#reviews", children: "Reviews" },
  ];

  return (
    <Disclosure as="nav" className="bg-purple-100">
      {({ open }) => (
        <>
          <div className="flex h-[16vh] max-w-7xl items-center justify-between px-8">
            <div className="flex items-center">
              <ButtonLink href="#">
                <img
                  src={mami}
                  alt="mami logo"
                  style={{ width: "200px", height: "auto" }} // Adjust width as needed
                />
              </ButtonLink>

              <div className="hidden md:flex md:items-center md:space-x-4">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children={"Install Mami Fertility"}
              className="active:bg hidden rounded-3xl bg-purple-800 px-5 py-3 text-white hover:bg-purple-900 active:bg-purple-600 sm:flex"
            />
            <div className="flex md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-purple-500 hover:bg-purple-700 hover:text-white">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="bg-purple-100 md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <a
                className="block px-3 py-2 text-base font-medium text-purple-500 hover:bg-gray-100"
                href="#features"
              >
                Features
              </a>
              <a
                className="block px-3 py-2 text-base font-medium text-purple-500 hover:bg-gray-100"
                href="#partners"
              >
                Partners
              </a>
              <a
                className="block px-3 py-2 text-base font-medium text-purple-500 hover:bg-gray-100"
                href="#reviews"
              >
                Reviews
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-purple-800 px-5 py-3 text-white hover:bg-purple-900 active:bg-purple-600"
              >
                Install Mami fertility
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
