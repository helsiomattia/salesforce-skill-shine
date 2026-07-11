import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

type ResultsRadarChartProps = {
  data: Array<{
    category: string;
    score: number;
    fullMark: number;
  }>;
};

const ResultsRadarChart = ({ data }: ResultsRadarChartProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart data={data}>
      <PolarGrid stroke="hsl(var(--border))" />
      <PolarAngleAxis
        dataKey="category"
        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
      />
      <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{ fontSize: 10 }} />
      <Radar
        name="Score"
        dataKey="score"
        stroke="hsl(var(--secondary))"
        fill="hsl(var(--secondary))"
        fillOpacity={0.25}
        strokeWidth={2}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default ResultsRadarChart;
