
"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, BarChart3, CheckCircle, XCircle, Plane } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

const departmentData = [
  { name: 'Science', teachers: 12 },
  { name: 'Mathematics', teachers: 8 },
  { name: 'Humanities', teachers: 15 },
  { name: 'Languages', teachers: 10 },
  { name: 'Arts', teachers: 7 },
];

const genderData = [
    { name: 'Male', value: 32 },
    { name: 'Female', value: 20 },
];

export default function TeacherAnalyticsPage() {
  return (
    <>
       <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Teacher Analytics</h2>
          <p className="text-muted-foreground">
            Dashboard metrics & visualizations for teacher data.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">52</div>
                    <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">48</div>
                     <p className="text-xs text-muted-foreground">92% attendance rate</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
                    <XCircle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Ms. Jones, Mr. Lee</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">On Leave</CardTitle>
                    <Plane className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">1 maternity, 1 sick leave</p>
                </CardContent>
            </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Teachers per Department</CardTitle>
                </CardHeader>
                <CardContent>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={departmentData}>
                            <XAxis dataKey="name" fontSize={12}/>
                            <YAxis fontSize={12} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="teachers" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                     <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Tooltip />
                            <Legend />
                            <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    </>
  );
}
