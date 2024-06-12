import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session, getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { Button } from "./ui/button"
  

function UserButton({ session }: { session: Session | null}) {

  if(!session) return(
    <Button>
      Sign in
    </Button>
  )

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar  name="Mike" image="https://github.com/shadcn.png"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserButton