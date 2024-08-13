import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      {/* User Info */}
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/165342064?v=4" />
        </Avatar>
        {/* User Name and Email */}
        <div>
          <p className="font-bold">Lucas</p>
          <p className="text-xs">pepete@pepete.com</p>
        </div>
      </div>
      {/* Menu Items */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/">
            <CalendarIcon size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>
      {/* Quick Search */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            key={option.title}
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              width={18}
              height={18}
            />
            {option.title}
          </Button>
        ))}
      </div>
      {/* Logout */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
