
"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Upload, Eye, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data
const archivedExams = [
    { id: '1', subject: 'Mathematics', class: 'Grade 5', year: 2023, source: '2023_math_final.pdf' },
    { id: '2', subject: 'Science', class: 'Grade 5', year: 2023, source: '2023_science_final.pdf' },
];

const ArchivesPage: React.FC = () => {
    const { toast } = useToast();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (file) {
            // Mock upload
            toast({ title: 'File uploaded successfully!', description: `Uploaded ${file.name}` });
            setFile(null);
        }
    };


  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Upload Past Exams</CardTitle>
          <CardDescription>Upload PDF or image files of past exams for OCR processing and archiving.</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleUpload} disabled={!file}>
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        </CardContent>
      </Card>

       <Card>
        <CardHeader>
          <CardTitle>Archived Exams</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Source File</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {archivedExams.map((exam) => (
                        <TableRow key={exam.id}>
                            <TableCell>{exam.subject}</TableCell>
                            <TableCell>{exam.class}</TableCell>
                            <TableCell>{exam.year}</TableCell>
                            <TableCell>{exam.source}</TableCell>
                            <TableCell className="space-x-2">
                                <Button variant="outline" size="icon"><Eye className="h-4 w-4" /></Button>
                                <Button variant="outline" size="icon"><Download className="h-4 w-4" /></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArchivesPage;
