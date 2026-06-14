import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/src/shared/components/ui/card";
import { Badge } from "@/src/shared/components/ui/badge";

export const metadata: Metadata = { title: "Dashboard" };

export const dynamic = "force-dynamic"; // user-specific data — never cache

// Placeholder metrics; replace with real data fetched from your API/DB.
const metrics = [
  { label: "Courses enrolled", value: "4", delta: "+1 this month" },
  { label: "Lessons completed", value: "37", delta: "+12 this week" },
  { label: "Hours logged", value: "18h", delta: "+3h today" },
];

export default async function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back.</p>
        </div>
        <Badge>Beta</Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <Card key={m.label}>
            <CardHeader className="pb-2">
              <CardDescription>{m.label}</CardDescription>
              <CardTitle className="text-3xl">{m.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{m.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
