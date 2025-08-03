
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Book, UserCheck } from 'lucide-react';

interface AiInsightsProps {
  studentId: string;
}

// Mock data, replace with API calls
const mockInsights = {
    ai_insights: "John has shown consistent improvement in Mathematics but struggles with complex word problems. His participation in class discussions has increased by 30% this term.",
    performance_comments: "Excellent effort in the recent science project. Keep working on articulating your findings more clearly. Focus on foundational concepts in History to improve your test scores.",
    recommended_books: ["The Number Devil: A Mathematical Adventure", "A Short History of Nearly Everything"],
    recommended_teachers: ["Mr. Alan (Math)", "Ms. Davis (History)"],
};

const AiInsights: React.FC<AiInsightsProps> = ({ studentId }) => {
  // TODO: Fetch AI insights using an API function
  const insights = mockInsights;

  return (
    <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Lightbulb /> AI Insights Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{insights.ai_insights}</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Personalized Feedback</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{insights.performance_comments}</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Book /> Recommended Books</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {insights.recommended_books.map((book, index) => (
                        <li key={index}>{book}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><UserCheck /> Recommended Mentors</CardTitle>
            </CardHeader>
            <CardContent>
                 <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {insights.recommended_teachers.map((teacher, index) => (
                        <li key={index}>{teacher}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
  );
};

export default AiInsights;
