import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Rocket, 
  CheckCircle,
  Star,
  ArrowRight 
} from "lucide-react";
import dashboardImage from "@/assets/saas-dashboard.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times for all operations."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and SOC 2 compliance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools to keep your team in sync and productive."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting to drive data-driven decisions."
    },
    {
      icon: Rocket,
      title: "Easy Integration",
      description: "Connect with 100+ tools through our robust API and integrations."
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime",
      description: "Reliable infrastructure with industry-leading uptime guarantee."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      company: "TechCorp",
      content: "SaasFlow transformed our workflow efficiency by 300%. The team collaboration features are game-changing.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      content: "The analytics insights helped us make crucial business decisions. Couldn't imagine working without it now.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Project Manager",
      company: "DesignStudio",
      content: "Best investment we've made for our team. The integration capabilities saved us countless hours.",
      rating: 5
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              ✨ New: Advanced AI Analytics Now Available
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto">
              Streamline Your Workflow with{" "}
              <span className="gradient-text">Next-Gen SaaS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Boost productivity by 300% with our intelligent platform. 
              Collaborate seamlessly, analyze effortlessly, and scale infinitely.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-button text-lg px-8 py-6" asChild>
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
          <img 
            src={dashboardImage}
            alt="SaasFlow Dashboard Interface"
            className="relative z-10 w-full max-w-5xl mx-auto rounded-2xl shadow-elegant border border-border/50"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to accelerate your team's productivity and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted by <span className="gradient-text">10,000+</span> teams worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card border-border/50 p-8 lg:p-12 text-center">
          <CardContent className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of teams already using SaasFlow to boost their productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-button text-lg px-8 py-6" asChild>
                <Link to="/signup">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;