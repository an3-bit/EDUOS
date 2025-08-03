
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Student } from '@/types'; 

interface StudentProfileDetailsProps {
  student: Student; 
}

const StudentProfileDetails: React.FC<StudentProfileDetailsProps> = ({ student }) => {
  return (
    <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
            <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="font-medium">Full Name</p>
                    <p className="text-muted-foreground">{student.first_name} {student.middle_name} {student.last_name}</p>
                </div>
                 <div>
                    <p className="font-medium">Admission Number</p>
                    <p className="text-muted-foreground">{student.admission_number}</p>
                </div>
                 <div>
                    <p className="font-medium">Date of Birth</p>
                    <p className="text-muted-foreground">{new Date(student.date_of_birth).toLocaleDateString()}</p>
                </div>
                 <div>
                    <p className="font-medium">Gender</p>
                    <p className="text-muted-foreground">{student.gender}</p>
                </div>
                <div>
                    <p className="font-medium">Class Level</p>
                    <p className="text-muted-foreground">{student.class_level}</p>
                </div>
                 <div>
                    <p className="font-medium">Stream</p>
                    <p className="text-muted-foreground">{student.stream || 'N/A'}</p>
                </div>
                 <div>
                    <p className="font-medium">Enrollment Status</p>
                    <p><Badge>{student.enrollment_status}</Badge></p>
                </div>
            </div>
        </CardContent>
    </Card>
  );
};

export default StudentProfileDetails;
