"use client"
import React from 'react'
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from './ModeToggle'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const router =useRouter()
  return (
    <div className='sticky top-0 z-50'>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
             <div className="flex items-center gap-2">
          <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
            <div className="text-primary-foreground font-bold text-2xl">TB</div>
          </div>
          <span className="text-2xl font-medium text-foreground">TaskBidder</span>
        </div>
          </Link>
          {/* <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            
            TaskBidder
          </Link> */}
          <Link
            href="/jobs"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Jobs
          </Link>
          <Link
            href="/postjob"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Post
          </Link>
          <Link
            href="/faq"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/settings"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="/posts"
                className="text-muted-foreground hover:text-foreground"
              >
                Posts
              </Link>
              <Link
                href="/post"
                className="text-muted-foreground hover:text-foreground"
              >
                Post
              </Link>
              <Link
                href="/settings"
                className="text-muted-foreground hover:text-foreground"
              >
                Settings
              </Link>
              <Link href="#" className="hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ModeToggle/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel ><Link href={"/profile"}>My Account</Link></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href={"/settings"}>Settings</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href={"/support"}>Support</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href={"/"}>Logout</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  )
}

export default Navbar
