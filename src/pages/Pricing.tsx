import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Sparkles, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      icon: Zap,
      description: "Perfect for individuals and small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Core integrations",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      icon: Crown,
      description: "Ideal for growing teams that need advanced features",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "All integrations",
        "Custom workflows",
        "API access",
        "Advanced security"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      icon: Sparkles,
      description: "For large organizations with custom requirements",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited team members",
        "1TB storage",
        "Custom analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solution",
        "On-premise deployment",
        "Enterprise security",
        "SLA guarantee",
        "Custom training"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 14-day free trial for all plans. No credit card required to get started."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise customers."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      {/* Header */}
      <div className="text-center space-y-6">
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
          💰 Save 20% with Annual Billing
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Simple, transparent <span className="gradient-text">pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your team. All plans include our core features 
          with a 14-day free trial.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Yearly
          </span>
          {isYearly && (
            <Badge variant="secondary" className="ml-2">
              Save 20%
            </Badge>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name} 
            className={`glass-card border-border/50 relative ${
              plan.popular 
                ? 'border-primary/50 scale-105 shadow-elegant' 
                : 'hover:border-primary/30'
            } transition-all duration-300`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="glow-button px-4 py-1">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center space-y-4 pb-8">
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                plan.popular ? 'bg-gradient-primary' : 'bg-muted'
              }`}>
                <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-foreground'}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">
                    ${isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-muted-foreground">
                    Billed annually (${plan.yearlyPrice}/year)
                  </p>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button 
                className={`w-full ${plan.popular ? 'glow-button' : ''}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                <p className="font-semibold text-sm">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our pricing and plans.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-card border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <Card className="glass-card border-border/50 p-8 max-w-2xl mx-auto">
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="text-muted-foreground">
              Our team is here to help you choose the right plan for your needs.
            </p>
            <Button className="glow-button" size="lg">
              Contact Sales Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;