import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, TrendingUp, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to make work more efficient and enjoyable for everyone."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Every decision we make starts with our customers' needs and success in mind."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product to support."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of the curve and deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We lead with empathy, understanding the challenges our users face every day."
    },
    {
      icon: Lightbulb,
      title: "Simplicity",
      description: "We believe powerful tools should be simple to use and beautiful to interact with."
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "100+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Team Members", value: "150+" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to streamline workflows for modern teams."
    },
    {
      year: "2021",
      title: "First 1000 Users",
      description: "Reached our first milestone and launched advanced collaboration features."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M to accelerate product development and team growth."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to serve teams across 100+ countries worldwide."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched AI-powered analytics and automation features."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      {/* Hero */}
      <div className="text-center space-y-6">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          🚀 About SaasFlow
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl mx-auto">
          Building the future of <span className="gradient-text">team collaboration</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're a passionate team of builders, designers, and problem-solvers dedicated to 
          creating tools that make work more efficient, enjoyable, and impactful.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-card border-border/50 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe that work should be a source of fulfillment, not frustration. 
            That's why we're building SaasFlow - to eliminate the friction that prevents 
            teams from doing their best work.
          </p>
          <p className="text-muted-foreground">
            Our platform empowers teams to collaborate seamlessly, make data-driven decisions, 
            and focus on what matters most: creating value for their customers and achieving 
            their goals together.
          </p>
          <Button className="glow-button" size="lg">
            Join Our Mission
          </Button>
        </div>
        <Card className="glass-card border-border/50">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <blockquote className="text-lg italic text-center">
                "Our goal is to make every team more productive, creative, and successful 
                by providing them with the tools they need to thrive in the modern workplace."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold">Alex Thompson</div>
                <div className="text-sm text-muted-foreground">CEO & Co-Founder</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Values */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="glass-card border-border/50 group hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From startup to scale - here's how we've grown over the years.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-white text-sm">
                  {item.year}
                </div>
              </div>
              <Card className="glass-card border-border/50 flex-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Card className="glass-card border-border/50 p-8 lg:p-12 max-w-4xl mx-auto">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to be part of our story?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of teams who trust SaasFlow to power their success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-button">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline">
                View Open Positions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;