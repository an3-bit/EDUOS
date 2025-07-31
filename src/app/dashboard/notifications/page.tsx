
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function NotificationsManagementPage() {
  return (
    <>
      <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Send and manage notifications to students, teachers, and parents.
          </p>
      </div>
       <div className="mt-6">
        <Card>
            <CardHeader>
                <CardTitle>Compose Message</CardTitle>
                <CardDescription>Send a notification to a specific group or to everyone.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient</Label>
                    <Input id="recipient" placeholder="e.g., 'All Students', 'Grade 5 Parents', 'Mr. Smith'" />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Type your notification message here." className="min-h-[120px]" />
                 </div>
            </CardContent>
            <CardFooter>
                 <Button>
                    <Send className="mr-2 h-4 w-4"/> Send Notification
                </Button>
            </CardFooter>
        </Card>
      </div>
    </>
  );
}
