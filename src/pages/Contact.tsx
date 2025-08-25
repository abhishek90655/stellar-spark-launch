import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@saasflow.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST"
    },
    {
      icon: MapPin,
      label: "Office",
      value: "San Francisco, CA",
      description: "123 Innovation Street, Suite 100"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 hours",
      description: "We respond to all inquiries quickly"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with SaasFlow?",
      answer: "Getting started is easy! Simply sign up for our free 14-day trial. No credit card required. You'll have access to all Pro features during your trial period."
    },
    {
      question: "Can I integrate SaasFlow with other tools?",
      answer: "Yes! SaasFlow integrates with over 100 popular tools including Slack, Google Workspace, Microsoft Teams, Salesforce, and many more. We also provide a robust API for custom integrations."
    },
    {
      question: "Is my data secure with SaasFlow?",
      answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is hosted on secure AWS servers with 99.9% uptime guarantee."
    },
    {
      question: "Do you offer custom plans for large organizations?",
      answer: "Yes, we offer Enterprise plans with custom pricing, dedicated support, on-premise deployment options, and tailored features for large organizations. Contact our sales team for more information."
    },
    {
      question: "How does billing work?",
      answer: "We offer flexible billing options including monthly and annual plans. Annual plans include a 20% discount. You can upgrade, downgrade, or cancel your subscription at any time."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes! We offer comprehensive onboarding, training resources, video tutorials, and dedicated customer support. Enterprise customers get priority support and dedicated account managers."
    },
    {
      question: "Can I migrate my data from other platforms?",
      answer: "Absolutely. We provide free data migration assistance and have built-in importers for popular platforms. Our team can help you migrate your existing workflows, projects, and team data seamlessly."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You can cancel anytime with no penalties. You'll continue to have access until the end of your billing period. We also provide data export options so you can take your data with you."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      {/* Header */}
      <div className="text-center space-y-6">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          💬 Get in Touch
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold">
          We'd love to <span className="gradient-text">hear from you</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question about SaasFlow? Need help getting started? 
          Our team is here to help you succeed.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="glass-card border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">How can we help?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Question</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about how we can help you..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full glow-button" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-muted-foreground">
              Prefer to reach out directly? Here are all the ways you can contact us.
            </p>
          </div>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-lg font-medium text-foreground mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Office Hours */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <h3 className="text-xl font-semibold">Office Hours</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">8:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM - 2:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about SaasFlow and our services.
          </p>
        </div>

        <Card className="glass-card border-border/50 max-w-4xl mx-auto">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;