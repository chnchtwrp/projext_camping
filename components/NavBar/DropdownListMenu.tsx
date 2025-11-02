import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { toast } from "sonner";

const DropdownListMenu = () => {
  return (
    // <div className="flex item-center gap-2 ">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* asChild = ใช้ความสามารถของ child */}
        <Button variant={"outline"}>
          <Menu className="cursor-pointer hover:opacity-50 transition duration-300" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Loged in */}
        <SignedIn>
          {links.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>

        {/* Loged out */}
        <SignedOut>
          {/* sign in */}
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="cursor-pointer">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          {/* sign up */}
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="cursor-pointer">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
