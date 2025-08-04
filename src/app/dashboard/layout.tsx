
"use client";

import * as React from 'react';
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
  BarChart3,
  UserPlus,
  DollarSign
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
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from '@/components/ui/sidebar';
import { UserRole } from '@/types';
import { DataProvider } from '@/context/DataContext';


const allMenuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT, UserRole.LIBRARIAN, UserRole.FINANCE, UserRole.HOSTEL_MANAGER] },
    { 
        label: "Student Management", 
        icon: Users, 
        roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER],
        subItems: [
            { href: "/dashboard/students", label: "Analytics", icon: BarChart3 },
            { href: "/dashboard/students/list", label: "All Students", icon: Users },
            { href: "/dashboard/students/create", label: "New Admission", icon: UserPlus },
        ] 
    },
    { 
        label: "Teacher Management", 
        icon: GraduationCap, 
        roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN],
        subItems: [
            { href: "/dashboard/teachers", label: "Analytics", icon: BarChart3 },
            { href: "/dashboard/teachers/list", label: "All Teachers", icon: Users },
            { href: "/dashboard/teachers/create", label: "Add Teacher", icon: UserPlus },
        ] 
    },
    { href: "/dashboard/finance", label: "Finance Management", icon: Wallet, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FINANCE] },
    { href: "/dashboard/fee", label: "Fee Management", icon: DollarSign, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.FINANCE] },
    { href: "/dashboard/attendance", label: "Attendance", icon: CheckSquare, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER] },
    { href: "/dashboard/academics", label: "Classes & Academics", icon: School, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER] },
    { href: "/dashboard/elearning", label: "E-Learning", icon: BookOpen, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT] },
    { href: "/dashboard/library", label: "Library", icon: Library, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.LIBRARIAN, UserRole.STUDENT, UserRole.TEACHER] },
    { href: "/dashboard/timetable", label: "Timetable", icon: CalendarDays, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT] },
    { href: "/dashboard/events", label: "Events & Calendar", icon: Calendar, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT] },
    { href: "/dashboard/health", label: "Medical & Health", icon: HeartPulse, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN] },
    { href: "/dashboard/hostel", label: "Hostel Management", icon: BedDouble, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.HOSTEL_MANAGER] },
    { href: "/dashboard/transport", label: "Transport", icon: Bus, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN] },
    { href: "/dashboard/assessments", label: "Assessments & Exams", icon: ClipboardCheck, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT] },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN] },
    { href: "/dashboard/parents", label: "Guardian Portal", icon: Shield, roles: [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.TEACHER] },
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
    const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

    const handleLogout = () => {
        router.push('/');
    };
    
    const isLinkActive = (href: string) => {
        return href === '/dashboard' ? pathname === href : pathname.startsWith(href);
    };

    const toggleMenu = (label: string) => {
        setOpenMenus(prev => ({ ...prev, [label]: !prev[label] }));
    };

    const menuItems = allMenuItems;


    return (
        <DataProvider>
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        <Logo />
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.label}>
                                    {item.subItems ? (
                                        <>
                                            <SidebarMenuButton 
                                                onClick={() => toggleMenu(item.label)} 
                                                isActive={item.subItems.some(sub => isLinkActive(sub.href))}
                                                tooltip={item.label}
                                            >
                                                <item.icon />
                                                <span>{item.label}</span>
                                            </SidebarMenuButton>
                                            {openMenus[item.label] && (
                                                <SidebarMenuSub>
                                                    {item.subItems.map(subItem => (
                                                        <SidebarMenuSubItem key={subItem.href}>
                                                            <Link href={subItem.href}>
                                                                <SidebarMenuSubButton isActive={isLinkActive(subItem.href)}>
                                                                    <subItem.icon />
                                                                    <span>{subItem.label}</span>
                                                                </SidebarMenuSubButton>
                                                            </Link>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={item.href!}>
                                            <SidebarMenuButton as="a" isActive={isLinkActive(item.href!)} tooltip={item.label}>
                                                <item.icon />
                                                <span>{item.label}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link href="/dashboard/settings">
                                    <SidebarMenuButton as="a" tooltip="Settings">
                                        <Settings />
                                        <span>Settings</span>
                                    </SidebarMenuButton>
                                </Link>
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
                                <DropdownMenuItem onSelect={handleLogout}>
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
        </DataProvider>
    );
}
