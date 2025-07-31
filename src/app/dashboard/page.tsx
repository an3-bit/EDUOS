import {
  Users,
  GraduationCap,
  Wallet,
  CheckSquare,
  School,
  BookOpen,
  Library,
  CalendarDays,
  Calendar,
  HeartPulse,
  BedDouble,
  Bus,
  ClipboardCheck,
  Bell,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const modules = [
    { title: 'Student Management', description: 'Profiles, AI insights, and academic tracking.', icon: Users, link: '/dashboard/students', status: '3 New', statusVariant: 'default' },
    { title: 'Teacher Management', description: 'Professional profiles, assignments, and metrics.', icon: GraduationCap, link: '/dashboard/teachers' },
    { title: 'Finance Management', description: 'Budgets, invoices, payments, and wallet system.', icon: Wallet, link: '/dashboard/finance', status: 'Overdue', statusVariant: 'destructive' },
    { title: 'Attendance', description: 'School and class attendance tracking.', icon: CheckSquare, link: '/dashboard/attendance' },
    { title: 'Classes & Academics', description: 'Class levels, streams, and promotion system.', icon: School, link: '/dashboard/academics' },
    { title: 'E-Learning', description: 'Courses, lessons, assignments, and live classes.', icon: BookOpen, link: '/dashboard/elearning', status: 'New Course', statusVariant: 'secondary' },
    { title: 'Library Management', description: 'Books, borrowing, fines, and inventory.', icon: Library, link: '/dashboard/library' },
    { title: 'Timetable', description: 'Schedule creation and room allocation.', icon: CalendarDays, link: '/dashboard/timetable', status: 'Conflicts', statusVariant: 'destructive' },
    { title: 'Events & Calendar', description: 'Event management, RSVPs, and recurring events.', icon: Calendar, link: '/dashboard/events', status: 'Upcoming', statusVariant: 'default' },
    { title: 'Medical & Health', description: 'Health records, medicine inventory, and AI alerts.', icon: HeartPulse, link: '/dashboard/health' },
    { title: 'Hostel Management', description: 'Room allocation, inspections, and violations.', icon: BedDouble, link: '/dashboard/hostel' },
    { title: 'Transport Management', description: 'Routes, vehicles, GPS tracking, and bookings.', icon: Bus, link: '/dashboard/transport' },
    { title: 'Assessments & Exams', description: 'Online exams, grading, and performance analytics.', icon: ClipboardCheck, link: '/dashboard/assessments', status: 'Grading', statusVariant: 'secondary' },
    { title: 'Notifications', description: 'Multi-channel notifications and preferences.', icon: Bell, link: '/dashboard/notifications' },
    { title: 'Guardian Portal', description: 'Parent portal, student linking, communication.', icon: Shield, link: '/dashboard/parents', status: '1 Message', statusVariant: 'default' },
];

export default function DashboardPage() {
    return (
        <div className="animate-in fade-in-50">
            <div className="mb-6">
                <h1 className="text-3xl font-bold font-headline">Welcome, Admin!</h1>
                <p className="text-muted-foreground">Here's a snapshot of your institution's activities.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {modules.map((module) => (
                    <Card key={module.title} className="group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 border-border/60 hover:border-primary bg-card flex flex-col">
                        <Link href={module.link} className="block h-full flex flex-col">
                            <CardHeader className="flex flex-row items-start justify-between pb-2">
                                <CardTitle className="text-lg font-medium font-headline">{module.title}</CardTitle>
                                <module.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{module.description}</p>
                            </CardContent>
                             <CardFooter>
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                      {module.status && <Badge variant={module.statusVariant as any}>{module.status}</Badge>}
                                    </div>
                                    <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        View
                                        <ArrowRight className="ml-1 h-4 w-4"/>
                                    </div>
                                </div>
                            </CardFooter>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
