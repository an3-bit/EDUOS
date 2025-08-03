
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Upload } from 'lucide-react';


interface StudentDocumentsProps {
  studentId: string;
}

const mockDocuments = [
    { id: 'd1', name: 'Birth Certificate.pdf', uploaded_at: '2023-01-15' },
    { id: 'd2', name: 'Previous School Report.pdf', uploaded_at: '2023-01-16' },
]


const StudentDocuments: React.FC<StudentDocumentsProps> = ({ studentId }) => {
  // TODO: Fetch student documents using the API function (getStudentDocuments)
  const documents = mockDocuments;

  return (
    <Card>
        <CardHeader>
             <div className="flex justify-between items-center">
                <div>
                    <CardTitle>Student Documents</CardTitle>
                    <CardDescription>Birth certificates, reports, and other files.</CardDescription>
                </div>
                <Button size="sm" variant="outline"><Upload className="mr-2 h-4 w-4"/>Upload Document</Button>
            </div>
        </CardHeader>
      <CardContent>
        <div className="space-y-3">
            {documents.map(doc => (
                <div key={doc.id} className="flex items-center justify-between p-2 rounded-md border">
                    <div className="flex items-center gap-3">
                         <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-medium text-sm">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">Uploaded on {new Date(doc.uploaded_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4"/>
                    </Button>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentDocuments;
