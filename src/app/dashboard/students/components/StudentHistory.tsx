
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Activity, ArrowRight, CheckCircle, Clock } from 'lucide-react';


interface StudentHistoryProps {
  studentId: string;
}

// Mock data, replace with API calls
const mockHistory = [
    { id: 'h1', date: '2024-01-10', event: 'Promoted to Grade 5', type: 'Promotion' },
    { id: 'h2', date: '2024-01-12', event: 'Assigned to Stream A', type: 'Assignment' },
    { id: 'h3', date: '2023-01-10', event: 'Promoted to Grade 4', type: 'Promotion' },
]

const StudentHistory: React.FC<StudentHistoryProps> = ({ studentId }) => {
  // TODO: Fetch student history using the API function (getStudentHistory)
  const history = mockHistory;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Student History</CardTitle>
        <CardDescription>Academic progression and notable events.</CardDescription>
      </CardHeader>
      <CardContent>
         <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-[35px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
             {history.map((item, index) => (
                 <div key={item.id} className="flex items-start gap-6 mb-6">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                        <Activity className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="font-medium">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                 </div>
             ))}
         </div>
      </CardContent>
    </Card>
  );
};

export default StudentHistory;
