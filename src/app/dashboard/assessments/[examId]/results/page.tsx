
"use client"

import React, { useState, useEffect } from 'react';
import { getExamResults, getExamStatistics } from '@/api';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ResultsSummaryPageProps {
  params: {
    examId: string;
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ResultsSummaryPage({ params }: ResultsSummaryPageProps) {
  const { examId } = params;
  const [results, setResults] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const resultsResponse = await getExamResults(/* filter by examId */);
      setResults(resultsResponse.data.results || []);

      const statsResponse = await getExamStatistics(examId);
      setStats(statsResponse.data);
    }
    fetchData();
  }, [examId]);

  const subjectAverages = stats?.subject_averages || [];
  const gradeDistribution = stats?.grade_distribution || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Results Summary</h2>
        <Button variant="outline"><Download className="mr-2 h-4 w-4"/> Export Results</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mean Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.mean_score?.toFixed(2) || 'N/A'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.top_grade || 'N/A'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lowest Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.lowest_score || 'N/A'}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Standard Deviation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.std_dev?.toFixed(2) || 'N/A'}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
          <Card>
              <CardHeader>
                  <CardTitle>Average Scores per Subject</CardTitle>
              </CardHeader>
              <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={subjectAverages}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="subject" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="average" fill="#8884d8" />
                      </BarChart>
                  </ResponsiveContainer>
              </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                   <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={gradeDistribution} dataKey="count" nameKey="grade" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                {gradeDistribution.map((entry: any, index: number) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
              </CardContent>
          </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Detailed Results</CardTitle>
            <CardDescription>Individual student performance in the exam.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Average Score</TableHead>
                <TableHead>Final Grade</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {results.map((result) => (
                <TableRow key={result.id}>
                    <TableCell>{result.rank}</TableCell>
                    <TableCell>{result.studentName}</TableCell>
                    <TableCell>{result.averageScore.toFixed(2)}</TableCell>
                    <TableCell>{result.finalGrade}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
