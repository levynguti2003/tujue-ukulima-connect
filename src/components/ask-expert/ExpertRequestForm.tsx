
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  topic: z.string({
    required_error: "Please select a topic",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ExpertRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  });
  
  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Format the email subject and body
      const subject = `[SkyField] ${values.topic} Consultation Request`;
      
      // Format the body with all the form details
      let body = `Hello SkyField Team,\n\n`;
      body += `I'd like to request a consultation on ${values.topic}.\n\n`;
      body += `My details:\n`;
      body += `Name: ${values.name}\n`;
      body += `Email: ${values.email}\n`;
      body += `Phone: ${values.phone || "Not provided"}\n\n`;
      body += `My question/issue:\n${values.message}\n\n`;
      body += `Please contact me at your earliest convenience.\n\n`;
      body += `Thank you,\n${values.name}`;
      
      // Encode the subject and body for the mailto link
      const mailtoLink = `mailto:skyfield.kenya@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      
      // Open the user's email client
      window.open(mailtoLink, "_blank");
      
      toast({
        title: "Email Client Opened",
        description: "Please send the email in your mail application to complete your request.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem opening your email client. Please try again.",
        variant: "destructive",
      });
      console.error("Email opening error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Request Expert Consultation</h3>
      <p className="text-gray-600 mb-6">
        Submit this form to have an agricultural expert contact you directly
        about your specific farming challenges.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+254 ..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pest-control">Pest Control</SelectItem>
                      <SelectItem value="smart-farming">Smart Farming</SelectItem>
                      <SelectItem value="drone-spraying">Drone Spraying</SelectItem>
                      <SelectItem value="climate-smart">Climate-Smart Agriculture</SelectItem>
                      <SelectItem value="soil-health">Soil Health</SelectItem>
                      <SelectItem value="rice-farming">Rice Farming</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Question or Issue</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your farming challenge or question in detail..." 
                    className="h-32"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Please provide as much detail as possible for the most relevant advice.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Opening Email..." : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Send Request
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ExpertRequestForm;
