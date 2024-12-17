import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/user.action";
import { FileUploader } from "./FileUploader";
import SearchBar from "./SearchBar";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <SearchBar />
      <div className="header-wrapper">
        <FileUploader accountId={accountId} ownerId={userId}/>
        <form
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
