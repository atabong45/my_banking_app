'use client'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({user}:MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left">
                    {/* <SheetHeader>
                        <SheetTitle>Are you sure ?</SheetTitle>
                        <SheetDescription>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi?
                        </SheetDescription>
                    </SheetHeader> */}
                    <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="my_bank logo"
                        className="size-[24px] max-xl:size-14"
                    />     
                    <h1 className="sidebar-logo">Horizon</h1> 

                </Link>
                {sidebarLinks.map((item)=>{
                    const isActive =  pathname === item.route 
                                  || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link href={item.route}
                              key={item.label}
                              className={cn('siderbar-link rounded-lg',{'bg-bank-gradient':isActive})}
                        >
                            <div className="relative size-5">
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert-0':isActive
                                    })}
                                />
                            </div>
                            <p className={cn('sidebar-label',{'!text-white':isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}    

                USEr
            </nav>
                </SheetContent>
            </Sheet>
        </section>
    );
}

export default MobileNav;