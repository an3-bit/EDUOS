"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, BarChart3, PieChart, AlertTriangle } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const classLevelData = [
  { name: 'Grade 1', students: 65 },
  { name: 'Grade 2', students: 59 },
  { name: 'Grade 3', students: 80 },
  { name: 'Grade 4', students: 81 },
  { name: 'Grade 5', students: 56 },
];

const genderData = [
    { name: 'Grade 1', Male: 35, Female: 30 },
    { name: 'Grade 2', Male: 30, Female: 29 },
    { name: 'Grade 3', Male: 40, Female: 40 },
    { name: 'Grade 4', Male: 41, Female: 40 },
    { name: 'Grade 5', Male: 26, Female: 30 },
];


export default function StudentAnalyticsPage() {
  return (
    <>
       <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Student Analytics</h2>
          <p className="text-muted-foreground">
            Dashboard metrics & visualizations for student data.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Gender Breakdown</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">620 Male / 614 Female</div>
                     <p className="text-xs text-muted-foreground">Almost a 50/50 split</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Overcrowded Streams</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Grade 5A, 4B, 2C</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Teachers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">52</div>
                    <p className="text-xs text-muted-foreground">Teachers with assigned students</p>
                </CardContent>
            </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Class Level Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={classLevelData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="students" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Gender Breakdown by Class</CardTitle>
                </CardHeader>
                <CardContent>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={genderData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Male" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Female" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    </>
  );
}
