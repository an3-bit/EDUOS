
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AcademicSnapshotProps {
  studentId: string;
}

// Mock data, replace with API calls
const performanceData = [
  { term: 'Term 1', score: 65 },
  { term: 'Term 2', score: 72 },
  { term: 'Term 3', score: 68 },
  { term: 'Term 4', score: 78 },
];

const behaviorData = [
  { name: 'Attendance', value: 95 },
  { name: 'Punctuality', value: 88 },
  { name: 'Participation', value: 92 },
];


const AcademicSnapshot: React.FC<AcademicSnapshotProps> = ({ studentId }) => {
  // TODO: Fetch academic snapshots/performance summaries using the API function (getStudentAcademicSnapshots)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Snapshot</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
            <h4 className="text-sm font-medium mb-2">Performance Over Time</h4>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={performanceData}>
                <XAxis dataKey="term" fontSize={12} />
                <YAxis fontSize={12}/>
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8884d8" name="Average Score" />
                </LineChart>
            </ResponsiveContainer>
        </div>
         <div>
            <h4 className="text-sm font-medium mb-2">Behavioral Metrics (%)</h4>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={behaviorData} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={80} fontSize={12} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicSnapshot;
