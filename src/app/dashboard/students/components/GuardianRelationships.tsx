
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';


interface GuardianRelationshipsProps {
  studentId: string;
}

// Mock data, replace with API calls
const mockGuardians = [
    { id: 'g1', name: 'Jane Doe', relationship: 'Mother', photo: 'https://placehold.co/100x100.png' },
    { id: 'g2', name: 'John Doe', relationship: 'Father', photo: 'https://placehold.co/100x100.png' },
]

const GuardianRelationships: React.FC<GuardianRelationshipsProps> = ({ studentId }) => {
  // TODO: Fetch guardian relationships using the API function (getStudentGuardians)
  const guardians = mockGuardians;

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <div>
                <CardTitle>Guardian Relationships</CardTitle>
                <CardDescription>Linked guardians for this student.</CardDescription>
            </div>
            <Button size="sm" variant="outline"><UserPlus className="mr-2 h-4 w-4"/>Link New Guardian</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
            {guardians.map(guardian => (
                 <div key={guardian.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={guardian.photo} data-ai-hint="person woman" />
                            <AvatarFallback>{guardian.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium">{guardian.name}</p>
                            <p className="text-sm text-muted-foreground">{guardian.relationship}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm">View Profile</Button>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GuardianRelationships;
