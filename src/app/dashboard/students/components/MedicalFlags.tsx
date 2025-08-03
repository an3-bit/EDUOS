
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';


interface MedicalFlagsProps {
  studentId: string;
}

// Mock data, replace with API calls
const mockFlags = [
    { id: 'm1', condition: 'Peanut Allergy', is_critical: true, notes: 'Requires EpiPen on-site.' },
    { id: 'm2', condition: 'Asthma', is_critical: false, notes: 'Has inhaler.' },
]

const MedicalFlags: React.FC<MedicalFlagsProps> = ({ studentId }) => {
  // TODO: Fetch medical flags/health alerts using the API function (you'll need to add this)
  const flags = mockFlags;

  return (
    <Card>
      <CardHeader>
         <div className="flex justify-between items-center">
            <div>
                <CardTitle>Medical Flags</CardTitle>
                <CardDescription>Important health alerts for this student.</CardDescription>
            </div>
            <Button size="sm" variant="outline"><PlusCircle className="mr-2 h-4 w-4"/>Add Flag</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
            {flags.length > 0 ? flags.map(flag => (
                <div key={flag.id} className="p-3 rounded-md border bg-card">
                    <div className="flex justify-between items-start">
                        <p className="font-medium">{flag.condition}</p>
                        {flag.is_critical && <Badge variant="destructive">Critical</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{flag.notes}</p>
                </div>
            )) : <p className="text-muted-foreground text-sm">No medical flags on record.</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalFlags;
