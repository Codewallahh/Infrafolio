import PageTitle from '@/components/common/PageTitle';
import SectionTitle from '@/components/common/SectionTitle';
import MetricCard from './MetricCard';
import ChartComponent from './ChartComponent';
import { Cpu, MemoryStick, Router, GitMerge, Box, Activity, FileText, PackageCheck, ScanLine, Settings2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const cpuData = [
  { name: '10:00', usage: 20 }, { name: '10:05', usage: 25 }, { name: '10:10', usage: 22 },
  { name: '10:15', usage: 30 }, { name: '10:20', usage: 28 }, { name: '10:25', usage: 35 },
  { name: '10:30', usage: 32 },
];
const cpuChartConfig = { usage: { label: 'CPU Usage (%)', color: 'hsl(var(--accent))' } };

const memoryData = [
  { name: '10:00', usage: 40 }, { name: '10:05', usage: 45 }, { name: '10:10', usage: 42 },
  { name: '10:15', usage: 50 }, { name: '10:20', usage: 48 }, { name: '10:25', usage: 55 },
  { name: '10:30', usage: 52 },
];
const memoryChartConfig = { usage: { label: 'Memory Usage (%)', color: 'hsl(var(--primary))' } };

const networkData = [
  { name: '10:00', traffic: 100 }, { name: '10:05', traffic: 120 }, { name: '10:10', traffic: 110 },
  { name: '10:15', traffic: 150 }, { name: '10:20', traffic: 130 }, { name: '10:25', traffic: 160 },
  { name: '10:30', traffic: 140 },
];
const networkChartConfig = { traffic: { label: 'Network Traffic (Mbps)', color: 'hsl(var(--chart-3))' } };

const recentDeployments = [
  { id: 'deploy-001', service: 'Auth Service', version: 'v1.2.3', status: 'Success', time: '2 mins ago', environment: 'Production' },
  { id: 'deploy-002', service: 'Payment Gateway', version: 'v2.0.1', status: 'Failed', time: '15 mins ago', environment: 'Staging' },
  { id: 'deploy-003', service: 'User Profile API', version: 'v0.8.0', status: 'In Progress', time: '30 secs ago', environment: 'Development' },
];

const imageScans = [
 { id: 'scan-alpha', image: 'my-app/service-x:latest', status: 'Vulnerable', vulnerabilities: 5, severity: 'High', time: '1 hour ago' },
 { id: 'scan-beta', image: 'infra/base-node:18-alpine', status: 'Secure', vulnerabilities: 0, severity: 'None', time: '3 hours ago' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageTitle title="Live Infrastructure Dashboard" description="Real-time monitoring of your key infrastructure components and applications." />

      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Dashboard Controls</CardTitle>
            <CardDescription>Customize your view and time range.</CardDescription>
          </div>
          <Button variant="outline" size="icon">
            <Settings2 className="h-5 w-5" />
            <span className="sr-only">Customize Dashboard</span>
          </Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Select defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Select Metric Group" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Metrics</SelectItem>
              <SelectItem value="compute">Compute Resources</SelectItem>
              <SelectItem value="network">Network</SelectItem>
              <SelectItem value="cicd">CI/CD Pipelines</SelectItem>
              <SelectItem value="k8s">Kubernetes</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="1h">
            <SelectTrigger><SelectValue placeholder="Select Time Range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="15m">Last 15 Minutes</SelectItem>
              <SelectItem value="1h">Last 1 Hour</SelectItem>
              <SelectItem value="6h">Last 6 Hours</SelectItem>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
            </SelectContent>
          </Select>
           <Button className="sm:col-span-2 lg:col-span-1 bg-primary hover:bg-primary/90">Apply Filters</Button>
           <Button variant="outline" className="sm:col-span-2 lg:col-span-1">Refresh Data</Button>
        </CardContent>
      </Card>

      <SectionTitle title="Key Performance Indicators" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="CPU Utilization" value="32%" unit="avg" icon={<Cpu className="h-6 w-6 text-accent" />} status="healthy" trend="up" />
        <MetricCard title="Memory Usage" value="55%" unit="avg" icon={<MemoryStick className="h-6 w-6 text-primary" />} status="warning" trend="stable" />
        <MetricCard title="Network Throughput" value="140" unit="Mbps" icon={<Router className="h-6 w-6 text-foreground" />} status="healthy" trend="down" />
        <MetricCard title="Active Pods (K8s)" value="156" unit="pods" icon={<Box className="h-6 w-6 text-blue-400" />} status="healthy" trend="stable" />
      </div>

      <SectionTitle title="Resource Usage Over Time" />
      <div className="grid gap-6 lg:grid-cols-1"> {/* Changed to 1 column for larger charts initially */}
        <ChartComponent title="CPU Usage (%)" data={cpuData} config={cpuChartConfig} dataKey="usage" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartComponent title="Memory Usage (%)" data={memoryData} config={memoryChartConfig} dataKey="usage" />
        <ChartComponent title="Network Traffic (Mbps)" data={networkData} config={networkChartConfig} dataKey="traffic" />
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><GitMerge className="h-5 w-5 text-primary" /> CI/CD Pipeline Status</CardTitle>
            <CardDescription>Overview of recent pipeline executions.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for CI/CD statuses */}
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card-foreground/5 rounded-md">
                <div>
                  <p className="font-medium">Frontend Build</p>
                  <p className="text-xs text-muted-foreground">main branch - #a1b2c3d</p>
                </div>
                <Badge variant="default" className="bg-accent text-accent-foreground">Success</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-card-foreground/5 rounded-md">
                <div>
                  <p className="font-medium">Backend Deploy (Staging)</p>
                  <p className="text-xs text-muted-foreground">feat/new-feature - #e4f5g6h</p>
                </div>
                <Badge variant="destructive">Failed</Badge>
              </div>
               <div className="flex justify-between items-center p-3 bg-card-foreground/5 rounded-md">
                <div>
                  <p className="font-medium">Infra Provision (Prod)</p>
                  <p className="text-xs text-muted-foreground">tf-module-update - #i7j8k9l</p>
                </div>
                <Badge variant="secondary">Running</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Application Performance</CardTitle>
            <CardDescription>Key application health metrics.</CardDescription>
          </CardHeader>
          <CardContent>
             {/* Placeholder for App Performance */}
            <div className="space-y-3">
              <div className="flex justify-between items-center"><span>API Latency (p95)</span> <span className="font-semibold">120ms</span></div>
              <div className="flex justify-between items-center"><span>Error Rate</span> <span className="font-semibold text-destructive-foreground">0.5%</span></div>
              <div className="flex justify-between items-center"><span>Active Users</span> <span className="font-semibold">1,204</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <SectionTitle title="Recent Deployments" />
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Environment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentDeployments.map((deploy) => (
              <TableRow key={deploy.id}>
                <TableCell className="font-medium">{deploy.service}</TableCell>
                <TableCell>{deploy.version}</TableCell>
                <TableCell>{deploy.environment}</TableCell>
                <TableCell>
                  <Badge 
                    variant={deploy.status === 'Success' ? 'default' : deploy.status === 'Failed' ? 'destructive' : 'secondary'}
                    className={deploy.status === 'Success' ? 'bg-accent text-accent-foreground' : ''}
                  >
                    {deploy.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{deploy.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <SectionTitle title="Image Scan Results" />
       <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className="text-center">Vulnerabilities</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Scanned</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {imageScans.map((scan) => (
              <TableRow key={scan.id}>
                <TableCell className="font-medium text-xs">{scan.image}</TableCell>
                <TableCell className="text-center">{scan.vulnerabilities}</TableCell>
                <TableCell>
                    <Badge variant={scan.severity === 'High' ? 'destructive' : scan.severity === 'None' ? 'secondary' : 'outline'}>
                        {scan.severity}
                    </Badge>
                </TableCell>
                <TableCell>
                  {scan.status === 'Secure' ? 
                    <CheckCircle2 className="h-5 w-5 text-accent" /> : 
                    <AlertTriangle className="h-5 w-5 text-destructive" />}
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{scan.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <SectionTitle title="Recent Logs" />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><FileText className="h-5 w-5 text-primary" />Log Stream</CardTitle>
          <CardDescription>Live tail of important logs (placeholder).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-card-foreground/5 p-4 rounded-md overflow-y-auto font-mono text-xs text-muted-foreground">
            <p>[2023-10-27T10:00:00Z] INFO: User 'admin' logged in from 192.168.1.100</p>
            <p>[2023-10-27T10:00:05Z] WARN: High CPU usage detected on pod 'service-a-xyz123' (95%)</p>
            <p>[2023-10-27T10:00:10Z] INFO: Deployment 'service-b-new-version' completed successfully.</p>
            <p>[2023-10-27T10:00:15Z] ERROR: Failed to connect to database 'order_db': Connection refused.</p>
            <p>[2023-10-27T10:00:20Z] INFO: New user registered: 'john.doe@example.com'</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
