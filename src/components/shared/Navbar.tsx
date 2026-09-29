"use client";

import Logo from "@/components/shared/Logo";
import { navLinks } from "@/data/home";
import { logout } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/store";
import { cn } from "@/utils/cn";
import { App, Avatar, Drawer, Dropdown, type MenuProps } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

/* Routes whose first section is a brand-blue hero the bar can float over. */
const isOverlayRoute = (pathname: string) =>
  pathname === "/" || pathname.startsWith("/courses");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { message } = App.useApp();
  const { user } = useSelector((state: RootState) => state.auth);

  // The bar stays pinned while scrolling; once the page moves it gains a
  // solid background so links stay readable over light sections.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = isOverlayRoute(pathname);
  const solid = !overlay || scrolled;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeDrawer = () => setIsOpen(false);

  const initials = user
    ? `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`.toUpperCase()
    : "";

  const handleLogout = () => {
    dispatch(logout());
    closeDrawer();
    message.success("Signed out.");
    router.push("/");
  };

  const openCart = () => message.info("Your cart is empty.");

  const userMenu: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <div className="px-1 py-1">
          <p className="text-sm font-semibold text-ink">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-xs text-ink-soft">{user?.email}</p>
        </div>
      ),
      disabled: true,
    },
    { type: "divider" },
    {
      key: "dashboard",
      icon: <FiGrid />,
      label: <Link href="/user-dashboard">Dashboard</Link>,
    },
    { type: "divider" },
    {
      key: "logout",
      icon: <FiLogOut />,
      label: "Sign out",
      danger: true,
      onClick: handleLogout,
    },
  ];

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 font-body text-white transition-[background-color,box-shadow] duration-300",
        // Overlay routes float the bar over their hero; others keep it in flow.
        overlay ? "fixed" : "sticky",
        solid ? "bg-brand" : "bg-transparent",
        scrolled && "shadow-[0_8px_30px_-12px_rgba(0,20,90,0.45)]",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex w-full max-w-300 items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8 xl:px-0",
          scrolled ? "h-[68px] lg:h-[76px]" : "h-[88px] lg:h-[104px]",
        )}
      >
        <Logo />

        {/* Center links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[26px] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "text-[15px] transition-opacity hover:opacity-100",
                  isActive(link.href)
                    ? "font-semibold opacity-100"
                    : "opacity-85",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-[26px] md:flex">
          {user ? (
            <Dropdown
              menu={{ items: userMenu }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-white/10 py-1 pl-1 pr-2.5 transition-colors hover:bg-white/20">
                <Avatar size={30} className="bg-lime! font-semibold text-ink!">
                  {initials || <FiUser />}
                </Avatar>
                <span className="max-w-24 truncate text-sm">
                  {user.first_name}
                </span>
                <FiChevronDown className="opacity-70" />
              </button>
            </Dropdown>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[15px] text-white opacity-85 transition-opacity hover:opacity-100"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-[15px] text-white opacity-85 transition-opacity hover:opacity-100"
              >
                Join Us
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={openCart}
            aria-label="Cart"
            className="cursor-pointer text-xl transition-opacity hover:opacity-80"
          >
            <FiShoppingBag />
          </button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-white/10 md:hidden"
        >
          <FiMenu size={24} />
        </button>
      </nav>

      <Drawer
        placement="right"
        open={isOpen}
        onClose={closeDrawer}
        closable={false}
        size={300}
        styles={{ body: { padding: 0 } }}
        classNames={{ body: "bg-brand! font-body" }}
      >
        <div className="flex h-full flex-col text-white">
          <div className="flex items-center justify-between px-5 py-5">
            <Logo onClick={closeDrawer} />
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-white/10"
            >
              <FiX size={20} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 px-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeDrawer}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base transition-colors",
                    isActive(link.href)
                      ? "bg-white/15 font-semibold"
                      : "hover:bg-white/10",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3 border-t border-white/15 p-5">
            {user ? (
              <>
                <Link
                  href="/user-dashboard"
                  onClick={closeDrawer}
                  className="flex h-11 items-center justify-center gap-2 rounded-full bg-lime font-medium text-ink"
                >
                  <FiGrid /> Dashboard
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-white/30"
                >
                  <FiLogOut /> Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  onClick={closeDrawer}
                  className="flex h-11 items-center justify-center rounded-full bg-lime font-medium text-ink"
                >
                  Join Us
                </Link>
                <Link
                  href="/login"
                  onClick={closeDrawer}
                  className="flex h-11 items-center justify-center rounded-full border border-white/30"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </Drawer>
    </header>
  );
}
