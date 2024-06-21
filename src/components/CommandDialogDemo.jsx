import * as React from "react"
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Main Menu">
            <a className="cursor-pointer" href="/Introduction" >
            <CommandItem>
              <FaceIcon className="mr-7 h-4 w-4" />
              <span> Introduction </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Firstproject" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Ecommerce </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Secondproject" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Nala Business </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Thirdproject" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Our Team </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Fourproject" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> The aesthetic Design </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Fiveproject" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> UX / UI Design </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Finalmodule" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Performance </span>
            </CommandItem>
            </a>
            </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Shopping">  
            <a className="cursor-pointer" href="/Shopping" >
            <CommandItem>
              <RocketIcon className="mr-7 h-4 w-4" />
              <span>Shop</span>
            </CommandItem>
            </a>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Learning React JS">
            <a className="cursor-pointer" href="/Designskills" >
            <CommandItem>
              <FaceIcon className="mr-7 h-4 w-4" />
              <span> Introduction to React </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Firstdesign" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> JSX language </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Secondesign" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Rendering </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Thirdesign" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Components & Props </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Fourdesign" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> States </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Fivedesign" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Events & More </span>
            </CommandItem>
            </a>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Learning Javascript">
            <a className="cursor-pointer" href="/Performancepatterns" >
            <CommandItem>
              <FaceIcon className="mr-7 h-4 w-4" />
              <span> Starting with JS </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Staticimport" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> JS Topics and patterns </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Dynamicimport" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> JS Arrays & More </span>
            </CommandItem>
            </a>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Performance">
            <a className="cursor-pointer" href="/Renderingintro" >
            <CommandItem>
              <FaceIcon className="mr-7 h-4 w-4" />
              <span> Starting with performance </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Renderingclient" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Rendering Right </span>
            </CommandItem>
            </a>
            <a className="cursor-pointer" href="/Renderingstatic" >
            <CommandItem>
              <CalendarIcon className="mr-7 h-4 w-4" />
              <span> Final Recomendations </span>
            </CommandItem>
            </a>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
