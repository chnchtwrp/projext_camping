"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

type Props = {};
const SignOutLink = (props: Props) => {
  const handleLogOut = () => {
    toast("You have been logged out");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="cursor-pointer" onClick={() => handleLogOut()}>
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
