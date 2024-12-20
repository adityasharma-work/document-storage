"use client";
import { avatarPlaceholder, navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <Link href={"/"} className="flex gap-4 items-center">
        {/* <Image
          src="/assets/icons/logo-full-brand.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        /> */}
        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className=""
        />
        <div className="text-brand font-medium text-2xl hidden lg:block ">
          DocStore
        </div>
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} className="lg:w-full" href={url}>
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathName === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathName === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src={"/assets/images/files-2.png"}
        alt={"logo"}
        width={506}
        height={418}
        className={"w-full"}
      />
      <div className="sidebar-user-info">
        <Image
          src={avatarPlaceholder}
          alt={"Avatar"}
          width={44}
          height={44}
          className={"sidebar-user-avatar"}
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption text-ellipsis truncate">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
