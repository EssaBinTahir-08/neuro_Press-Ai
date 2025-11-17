import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import articlesData from "@/data/dummy/articles.json";

const Articles = () => {
  const navigate = useNavigate();

  const getScoreBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-success">{score}</Badge>;
    if (score >= 60) return <Badge className="bg-warning">{score}</Badge>;
    return <Badge variant="destructive">{score}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="text-muted-foreground">Fact-checked news articles</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Articles</CardTitle>
          <CardDescription>View and manage fact-checked articles</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articlesData.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium max-w-xs truncate">
                    {article.title}
                  </TableCell>
                  <TableCell>{article.source}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{article.category}</Badge>
                  </TableCell>
                  <TableCell>{getScoreBadge(article.score)}</TableCell>
                  <TableCell>{article.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant={article.status === "verified" ? "default" : "secondary"}>
                      {article.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigate(`/articles/${article.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
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

export default Articles;
