"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bell,
  BookOpen,
  Bus,
  BedDouble,
  Calendar,
  CalendarDays,
  CheckSquare,
  ClipboardCheck,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Library,
  LogOut,
  School,
  Search,
  Settings,
  Shield,
  User,
  Users,
  Wallet,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';

const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/students", label: "Student Management", icon: Users },
    { href: "/dashboard/teachers", label: "Teacher Management", icon: GraduationCap },
    { href: "/dashboard/finance", label: "Finance Management", icon: Wallet },
    { href: "/dashboard/attendance", label: "Attendance", icon: CheckSquare },
    { href: "/dashboard/academics", label: "Classes & Academics", icon: School },
    { href: "/dashboard/elearning", label: "E-Learning", icon: BookOpen },
    { href: "/dashboard/library", label: "Library", icon: Library },
    { href: "/dashboard/timetable", label: "Timetable", icon: CalendarDays },
    { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar },
    { href: "/dashboard/health", label: "Medical & Health", icon: HeartPulse },
    { href: "/dashboard/hostel", label: "Hostel Management", icon: BedDouble },
    { href: "/dashboard/transport", label: "Transport", icon: Bus },
    { href: "/dashboard/assessments", label: "Assessments & Exams", icon: ClipboardCheck },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/parents", label: "Guardian Portal", icon: Shield },
];

const Logo = () => (
    <div className="flex items-center gap-2 px-2">
         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="hsl(var(--sidebar-primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-headline font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">EDUOS Lite</span>
    </div>
);


export default function DashboardLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    
    const isLinkActive = (href: string) => {
        return href === '/dashboard' ? pathname === href : pathname.startsWith(href);
    };

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <Logo />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton asChild isActive={isLinkActive(item.href)} tooltip={item.label}>
                                    <Link href={item.href}>
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild tooltip="Settings">
                                <Link href="/dashboard/settings">
                                    <Settings />
                                    <span>Settings</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            <SidebarInset>
                 <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card/80 backdrop-blur-sm px-4 sm:px-6">
                    <SidebarTrigger className="md:hidden" />
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search modules..."
                            className="w-full rounded-lg bg-muted pl-8 md:w-[200px] lg:w-[320px]"
                        />
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="https://placehold.co/100x100" alt="Admin" data-ai-hint="person user"/>
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => router.push('#')}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => router.push('/dashboard/settings')}>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onSelect={() => router.push('/')}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex-1 p-4 sm:p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
