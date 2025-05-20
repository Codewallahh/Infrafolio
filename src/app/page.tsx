import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, LayoutDashboard, PlayCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/common/PageTitle';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative py-20 md:py-32 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233F51B5' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <PageTitle title="Welcome to Infrafolio" className="text-5xl md:text-7xl font-bold tracking-tight" />
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
            Your all-in-one platform for showcasing DevOps projects, monitoring live infrastructure,
            and gaining AI-powered insights. Built for professionals, by professionals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/dashboard" passHref>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group">
                View Dashboard <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                Explore Portfolio <Briefcase className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Briefcase className="h-10 w-10 text-primary" />}
            title="Project Portfolio"
            description="Showcase your projects, skills, and experience with a professional touch."
            link="/portfolio"
          />
          <FeatureCard
            icon={<LayoutDashboard className="h-10 w-10 text-primary" />}
            title="Live Metrics Dashboard"
            description="Monitor key infrastructure metrics in real-time with intuitive visualizations."
            link="/dashboard"
          />
          <FeatureCard
            icon={<PlayCircle className="h-10 w-10 text-primary" />}
            title="Live Demo Apps"
            description="Host and display live demonstrations of your applications running on Kubernetes."
            link="/live-demos"
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 text-primary" />}
            title="AI-Powered Insights"
            description="Leverage AI for anomaly detection and performance predictions from your metrics."
            link="/ai-insights"
          />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
         <Card className="bg-card/50 shadow-xl">
          <CardContent className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Infra Monitoring Illustration" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md object-cover w-full lg:w-1/2"
              data-ai-hint="devops dashboard" 
            />
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Why Infrafolio?</h3>
              <p className="text-foreground/80 mb-3">
                Infrafolio is designed for DevOps engineers, SREs, and developers who need a dynamic way to present their work and keep a pulse on their infrastructure. 
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-6">
                <li>Unified platform for portfolio and monitoring.</li>
                <li>Clean, professional, and dark-mode optimized UI.</li>
                <li>Real-time data visualization for quick insights.</li>
                <li>AI-driven analytics to stay ahead of potential issues.</li>
              </ul>
              <Button variant="link" className="p-0 text-accent hover:text-accent/80 group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Link href={link} passHref>
      <Card className="h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
        <CardHeader className="items-center text-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center text-foreground/70">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
