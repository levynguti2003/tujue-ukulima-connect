
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from 'lucide-react';

interface ContactFormProps {
  companyName: string;
  companyEmail: string;
}

const ContactForm = ({ companyName, companyEmail }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create properly formatted email body
    const emailBody = `Dear ${companyName} Team,

${formData.message}

Best regards,
${formData.name}
Email: ${formData.email}`;

    // Create Gmail compose URL with properly encoded data
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form after opening Gmail
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-tu-green-600" />
          Contact {companyName}
        </CardTitle>
        <p className="text-sm text-gray-600">
          Send a message directly to {companyName} via email
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="What is this message about?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Type your message here..."
              rows={5}
              className="resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-tu-green-600 hover:bg-tu-green-700"
            disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
          >
            <Send className="w-4 h-4 mr-2" />
            Send via Gmail
          </Button>
          <p className="text-xs text-gray-500 text-center">
            This will open Gmail in a new tab with your message pre-filled. You can edit before sending.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
