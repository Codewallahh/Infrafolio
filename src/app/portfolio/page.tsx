import PageTitle from '@/components/common/PageTitle';
import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/portfolio/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'Kubernetes Operations Dashboard',
    description: 'A real-time dashboard for monitoring Kubernetes cluster health, deployments, and resource utilization. Built with Next.js, Prometheus, and Grafana embedding.',
    imageUrl: 'https://placehold.co/600x400.png',
    techStack: ['Next.js', 'TypeScript', 'Prometheus', 'Grafana', 'Kubernetes API'],
    githubUrl: 'https://github.com/yourusername/k8s-dashboard',
    liveUrl: '#', // Replace with actual link or remove if not applicable
    imageHint: 'kubernetes dashboard'
  },
  {
    title: 'CI/CD Pipeline Automation Suite',
    description: 'A collection of tools and scripts to automate build, test, and deployment processes across multiple environments using Jenkins, GitLab CI, and Ansible.',
    imageUrl: 'https://placehold.co/600x400.png',
    techStack: ['Jenkins', 'GitLab CI', 'Ansible', 'Python', 'Docker'],
    githubUrl: 'https://github.com/yourusername/cicd-automation',
    imageHint: 'pipeline automation'
  },
  {
    title: 'Serverless Log Analytics Platform',
    description: 'A cost-effective solution for ingesting, processing, and analyzing application logs using AWS Lambda, S3, Athena, and QuickSight.',
    imageUrl: 'https://placehold.co/600x400.png',
    techStack: ['AWS Lambda', 'S3', 'Athena', 'QuickSight', 'Serverless Framework'],
    liveUrl: '#',
    imageHint: 'log analytics'
  },
];

const experiences = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    responsibilities: [
      'Led the design and implementation of CI/CD pipelines, reducing deployment times by 40%.',
      'Managed and scaled Kubernetes clusters on AWS EKS, ensuring 99.99% uptime.',
      'Developed infrastructure-as-code using Terraform and Ansible for multiple cloud environments.',
      'Implemented comprehensive monitoring and alerting systems using Prometheus, Grafana, and ELK stack.',
    ],
  },
  {
    role: 'Cloud Infrastructure Engineer',
    company: 'Innovate Cloud Ltd.',
    duration: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Migrated on-premise applications to AWS, optimizing for cost and performance.',
      'Automated server provisioning and configuration management.',
      'Provided L3 support for cloud infrastructure and resolved critical incidents.',
    ],
  },
];

const skills = {
  'Cloud Platforms': ['AWS (EC2, S3, EKS, Lambda, VPC)', 'Azure', 'Google Cloud Platform'],
  'Containerization & Orchestration': ['Docker', 'Kubernetes', 'Helm', 'Istio'],
  'CI/CD Tools': ['Jenkins', 'GitLab CI', 'ArgoCD', 'GitHub Actions'],
  'Infrastructure as Code': ['Terraform', 'Ansible', 'CloudFormation'],
  'Monitoring & Logging': ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
  'Programming Languages': ['Python', 'Go', 'Bash', 'JavaScript/TypeScript'],
  'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'Networking': ['TCP/IP', 'DNS', 'Load Balancing', 'Firewalls'],
  'Operating Systems': ['Linux (Ubuntu, CentOS)', 'Windows Server'],
};

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <PageTitle title="My Portfolio" description="A showcase of my professional journey, projects, and expertise in DevOps and Cloud Engineering." />

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <SectionTitle title="Featured Projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="experience">
          <SectionTitle title="Professional Experience" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                  <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resume">
          <SectionTitle title="Resume" />
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Download My Resume</CardTitle>
              <CardDescription>Get the latest version of my professional resume for a detailed overview of my qualifications and achievements.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start space-y-4">
              <p>
                My resume provides a comprehensive look at my skills, experience, and education. It highlights key accomplishments and contributions in various DevOps and Cloud Engineering roles.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="/placeholder-resume.pdf" download="YourName_Resume.pdf"> {/* Replace with actual resume path */}
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
              </Button>
              <SectionTitle title="Key Highlights" className="mt-6 !mb-2" />
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Over X years of experience in DevOps, Cloud Architecture, and System Administration.</li>
                <li>Proven ability to design, implement, and manage scalable and resilient infrastructure.</li>
                <li>Expertise in CI/CD, automation, containerization, and cloud-native technologies.</li>
                <li>Strong problem-solving skills and a proactive approach to incident management.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <SectionTitle title="Technical Skills" />
          <Card className="shadow-md">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-primary mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
