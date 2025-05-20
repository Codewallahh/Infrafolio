import PageTitle from '@/components/common/PageTitle';
import SectionTitle from '@/components/common/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

const demoApps = [
  {
    title: 'Microservice Showcase',
    description: 'A set of interconnected microservices demonstrating various patterns like API gateways, service discovery, and fault tolerance. Running on EKS.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#', // Replace with actual link
    githubUrl: 'https://github.com/yourusername/microservice-demo',
    techStack: ['Kubernetes', 'Docker', 'Go', 'Node.js', 'NATS'],
    imageHint: 'microservices architecture'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A scalable chat application built with WebSockets and deployed on Kubernetes. Features include multi-room chat and user presence.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/realtime-chat-demo',
    techStack: ['WebSockets', 'React', 'Redis', 'Python (FastAPI)'],
    imageHint: 'chat application'
  },
  {
    title: 'Serverless Image Processor',
    description: 'An AWS Lambda-based application that processes uploaded images, resizes them, and applies filters. Triggered by S3 events.',
    imageUrl: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername/serverless-image-processor',
    techStack: ['AWS Lambda', 'S3', 'API Gateway', 'Python'],
    imageHint: 'image processing'
  },
];

export default function LiveDemosPage() {
  return (
    <div className="space-y-8">
      <PageTitle title="Live Demo Applications" description="Explore applications running live on my Kubernetes cluster and other cloud environments." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoApps.map((app, index) => (
          <Card key={index} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
              <div className="aspect-video relative w-full mb-4 overflow-hidden rounded-md">
                <Image 
                  src={app.imageUrl} 
                  alt={app.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  data-ai-hint={app.imageHint || "application interface"}
                />
              </div>
              <CardTitle className="text-xl text-foreground">{app.title}</CardTitle>
              <CardDescription className="text-muted-foreground text-sm h-24 overflow-y-auto">{app.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm font-semibold mb-1 text-primary">Tech Stack:</p>
              <p className="text-xs text-muted-foreground">{app.techStack.join(', ')}</p>
            </CardContent>
            <CardFooter className="flex justify-start gap-2 pt-4 border-t">
              {app.liveUrl && (
                <Link href={app.liveUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Live
                  </Button>
                </Link>
              )}
              {app.githubUrl && (
                <Link href={app.githubUrl} target="_blank" rel="noopener noreferrer" passHref>
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <SectionTitle title="About the Demo Environment" className="mt-12"/>
      <Card>
        <CardContent className="p-6 text-muted-foreground">
          <p>
            These demo applications are typically hosted on a personal Kubernetes (EKS or k3s) cluster, showcasing various cloud-native principles and technologies. 
            The infrastructure is managed using IaC tools like Terraform, and CI/CD pipelines ensure continuous integration and delivery. 
            Feel free to explore the source code and live versions.
          </p>
          <p className="mt-2">
            Note: Some demos might be scaled down or have limited resources to manage costs. If you encounter any issues, please check back later or contact me.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
