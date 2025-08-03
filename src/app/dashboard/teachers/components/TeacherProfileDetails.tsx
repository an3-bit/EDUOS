
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Teacher } from '@/app/dashboard/teachers/data/schema';
import { Badge } from '@/components/ui/badge';

interface TeacherProfileDetailsProps {
  teacher: Teacher; 
}

const TeacherProfileDetails: React.FC<TeacherProfileDetailsProps> = ({ teacher }) => {

  return (
    <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-1 md:col-span-2">
            <CardHeader>
                <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="font-medium">Full Name</p>
                        <p className="text-muted-foreground">{teacher.first_name} {teacher.middle_name} {teacher.last_name}</p>
                    </div>
                    <div>
                        <p className="font-medium">Staff ID</p>
                        <p className="text-muted-foreground">{teacher.staff_id}</p>
                    </div>
                    <div>
                        <p className="font-medium">Gender</p>
                        <p className="text-muted-foreground">{teacher.gender}</p>
                    </div>
                     <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{teacher.email}</p>
                    </div>
                     <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">{teacher.phone_number}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Professional Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                 <div>
                    <p className="font-medium">Job Title</p>
                    <p className="text-muted-foreground">{teacher.job_title}</p>
                </div>
                 <div>
                    <p className="font-medium">Employment Type</p>
                    <p className="text-muted-foreground">{teacher.employment_type}</p>
                </div>
                 <div>
                    <p className="font-medium">Status</p>
                    <p><Badge variant={teacher.is_active ? 'default' : 'destructive'}>{teacher.is_active ? 'Active' : 'Inactive'}</Badge></p>
                </div>
                <div>
                    <p className="font-medium">Subjects Taught</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {teacher.subjects_taught?.map(subject => <Badge key={subject} variant="secondary">{subject}</Badge>)}
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-3">
             <CardHeader>
                <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{teacher.bio || 'No biography provided.'}</p>
            </CardContent>
        </Card>
    </div>
  );
};

export default TeacherProfileDetails;
