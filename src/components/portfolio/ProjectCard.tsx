import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({ title, description, imageUrl, imageHint, techStack, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
      <CardHeader>
        <div className="aspect-video relative w-full mb-4 overflow-hidden rounded-md">
          <Image 
            src={imageUrl} 
            alt={title} 
            layout="fill" 
            objectFit="cover" 
            className="transition-transform duration-300 hover:scale-105"
            data-ai-hint={imageHint || "project code"}
          />
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground h-20 overflow-y-auto text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-primary">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 pt-4 border-t">
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </Link>
        )}
        {liveUrl && (
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
