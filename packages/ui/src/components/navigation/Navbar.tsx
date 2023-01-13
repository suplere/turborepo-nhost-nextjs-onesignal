import { Fragment, MouseEventHandler } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "../../utils";
import { useRouter } from "next/router";

export type NavigationLink = {
  name: string;
  href?: string;
  condition?: () => boolean;
  action?: () => void;
  current?: boolean;
};

export type UserProps = {
  name: string;
  email: string;
  avatarUrl: string;
};

type NavbarProps = {
  navigation: NavigationLink[];
  userNavigation: NavigationLink[];
  user: UserProps | null;
  isAuthenticated: boolean;
  onLogin?: () => void;
};

export function Navbar({
  navigation,
  userNavigation,
  user,
  isAuthenticated,
  onLogin,
}: NavbarProps) {
  const router = useRouter();
  const onClickLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onLogin) onLogin();
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-12 w-auto lg:hidden"
                    src="/icons/icon-128x128.png"
                    alt="Your Company"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <Image
                    className="hidden h-12 w-auto lg:block"
                    src="/icons/icon-128x128.png"
                    alt="Your Company"
                    width={48}
                    height={48}
                    unoptimized
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href || "#"}
                      className={classNames(
                        router.pathname === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={
                        router.pathname === item.href ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                {!isAuthenticated && (
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={onClickLogin}
                      className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span>Login</span>
                    </button>
                  </div>
                )}
                {user && (
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full border"
                            src={user.avatarUrl}
                            alt=""
                            width={32}
                            height={32}
                            unoptimized
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) =>
                                item.href ? (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                ) : (
                                  <div
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700",
                                      item.action ? "cursor-pointer" : ""
                                    )}
                                    onClick={() =>
                                      item.action ? item.action() : undefined
                                    }
                                  >
                                    {item.name}
                                  </div>
                                )
                              }
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href || "#"}
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {user && (
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5 sm:px-6">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full border"
                      src={user.avatarUrl}
                      alt=""
                      height={40}
                      width={40}
                      unoptimized
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2 sm:px-3">
                  {userNavigation.map((item) =>
                    item.href ? (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        key={item.name}
                        as="div"
                        onClick={() =>
                          item.action ? item.action() : undefined
                        }
                        className={classNames(
                          "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white",
                          item.action ? "cursor-pointer" : ""
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
