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
        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
