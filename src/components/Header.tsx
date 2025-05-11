import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
    const user =null;
    return (
        <header
        className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
        style={{
          boxShadow: shadow,
        }}
      >

            <Link href="/">
                <Image
                    src="/"
                    height={60}
                    width={60}
                    alt="logo"
                    className="rounded-full"
                    priority


                />
            </Link>
            <div className="flex gap-4">
        {user ? (
          "<LogOutButton />"
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
        </header>
    );
}
export default Header;