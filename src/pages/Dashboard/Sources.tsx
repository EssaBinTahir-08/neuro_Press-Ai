import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle } from "lucide-react";
import sourcesData from "@/data/dummy/sources.json";

const Sources = () => {
  const getBiasColor = (bias: string) => {
    switch (bias.toLowerCase()) {
      case "center":
        return "bg-muted";
      case "center-left":
      case "left":
        return "bg-info";
      case "center-right":
      case "right":
        return "bg-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sources</h1>
        <p className="text-muted-foreground">Track and manage news source quality</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sources</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sourcesData.length}</div>
            <p className="text-xs text-muted-foreground">Active sources tracked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Quality</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sourcesData.filter(s => s.quality >= 85).length}
            </div>
            <p className="text-xs text-muted-foreground">Quality score ≥ 85</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Needs Review</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sourcesData.filter(s => s.quality < 75).length}
            </div>
            <p className="text-xs text-muted-foreground">Quality concerns</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Source Directory</CardTitle>
          <CardDescription>Quality metrics and bias analysis for news sources</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Quality Score</TableHead>
                <TableHead>Bias</TableHead>
                <TableHead>Verification Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sourcesData.map((source) => (
                <TableRow key={source.id}>
                  <TableCell className="font-medium">{source.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{source.category}</Badge>
                  </TableCell>
                  <TableCell>{source.region}</TableCell>
                  <TableCell>
                    <div className="space-y-1 min-w-32">
                      <div className="flex items-center gap-2">
                        <Progress value={source.quality} className="h-2 flex-1" />
                        <span className="text-sm font-medium w-8">{source.quality}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getBiasColor(source.bias)} variant="secondary">
                      {source.bias}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      className={
                        source.verification === "Very High" ? "bg-success" :
                        source.verification === "High" ? "bg-primary" :
                        "bg-warning"
                      }
                    >
                      {source.verification}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sources;
