import PageTitle from '@/components/common/PageTitle';
import AiInsightForm from './AiInsightForm'; // Client component for the form

export default function AiInsightsPage() {
  return (
    <div className="space-y-8">
      <PageTitle 
        title="AI-Powered Infrastructure Insights" 
        description="Leverage AI to analyze your infrastructure metrics and get actionable insights, detect anomalies, and predict performance trends."
      />
      <AiInsightForm />
    </div>
  );
}
