
"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const AIPredictionsPage: React.FC = () => {
    const [generatedQuestions, setGeneratedQuestions] = React.useState("");

    const handleGenerate = () => {
        // Mock AI generation
        const mockQuestions = {
            "title": "Mid-Term Mathematics Exam - Grade 5",
            "instructions": "Answer all questions. Show your work.",
            "questions": [
                { "type": "multiple_choice", "question": "What is 5 x 8?", "options": ["35", "40", "45", "50"], "answer": "40" },
                { "type": "short_answer", "question": "Solve for x: 2x + 3 = 11", "answer": "4" }
            ]
        }
        setGeneratedQuestions(JSON.stringify(mockQuestions, null, 2));
    }


  return (
     <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Exam with AI</CardTitle>
          <CardDescription>Provide the details and let AI generate a set of questions from the syllabus.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Mathematics" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="class-level">Class Level</Label>
                 <Select>
                    <SelectTrigger id="class-level">
                        <SelectValue placeholder="Select a class level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Grade 5">Grade 5</SelectItem>
                        <SelectItem value="Grade 6">Grade 6</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label htmlFor="term">Term</Label>
                 <Select>
                    <SelectTrigger id="term">
                        <SelectValue placeholder="Select a term" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Term 1">Term 1</SelectItem>
                        <SelectItem value="Term 2">Term 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" type="number" placeholder="e.g., 2024" />
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={handleGenerate}>Generate Questions</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle>Generated Questions (JSON)</CardTitle>
        </CardHeader>
        <CardContent>
            <Textarea readOnly value={generatedQuestions} className="h-[300px] font-mono text-xs" />
        </CardContent>
         <CardFooter className="flex gap-2">
            <Button variant="secondary">Save Prediction</Button>
            <Button variant="outline">Edit in Template Editor</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIPredictionsPage;
