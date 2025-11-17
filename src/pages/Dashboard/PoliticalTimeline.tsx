import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, AlertCircle } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    date: "2025-02-03",
    politician: "Senator Johnson",
    statement: "Economy grew by 4% last quarter",
    verification: "mostly-true",
    score: 78,
    category: "Economy"
  },
  {
    id: 2,
    date: "2025-02-01",
    politician: "Governor Smith",
    statement: "New education funding increased by 15%",
    verification: "true",
    score: 92,
    category: "Education"
  },
  {
    id: 3,
    date: "2025-01-28",
    politician: "Mayor Williams",
    statement: "Crime rates decreased by 30%",
    verification: "partially-true",
    score: 65,
    category: "Public Safety"
  },
  {
    id: 4,
    date: "2025-01-25",
    politician: "Representative Davis",
    statement: "Healthcare costs reduced significantly",
    verification: "false",
    score: 35,
    category: "Healthcare"
  }
];

const PoliticalTimeline = () => {
  const getVerificationBadge = (verification: string, score: number) => {
    if (score >= 80) return <Badge className="bg-success">True</Badge>;
    if (score >= 60) return <Badge className="bg-warning">Partially True</Badge>;
    if (score >= 40) return <Badge className="bg-warning">Mostly False</Badge>;
    return <Badge variant="destructive">False</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Political Statements</h1>
        <p className="text-muted-foreground">Track and verify political claims over time</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Statements</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{timelineEvents.length}</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified True</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timelineEvents.filter(e => e.score >= 80).length}
            </div>
            <p className="text-xs text-muted-foreground">High accuracy claims</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flagged</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timelineEvents.filter(e => e.score < 60).length}
            </div>
            <p className="text-xs text-muted-foreground">Misleading or false</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statement Timeline</CardTitle>
          <CardDescription>Chronological fact-check of political statements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {timelineEvents.map((event, idx) => (
              <div key={event.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  {idx < timelineEvents.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                
                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{event.politician}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getVerificationBadge(event.verification, event.score)}
                      <span className="text-sm font-medium">{event.score}%</span>
                    </div>
                  </div>
                  
                  <Card className="bg-muted/50">
                    <CardContent className="pt-4">
                      <p className="text-sm mb-2">"{event.statement}"</p>
                      <Badge variant="outline">{event.category}</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PoliticalTimeline;
