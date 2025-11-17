import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Newspaper, AlertTriangle, CheckCircle, Filter, Calendar, BarChart, Settings2, Zap } from "lucide-react";
import articlesData from "@/data/dummy/articles.json";
import { useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const verifiedCount = articlesData.filter(a => a.status === "verified").length;
  const avgScore = Math.round(articlesData.reduce((sum, a) => sum + a.score, 0) / articlesData.length);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to NeuroPress.ai Analytics</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Time Period</DropdownMenuLabel>
            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Last 7 Days
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="mr-2 h-4 w-4" />
              Last Quarter
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Data View</DropdownMenuLabel>
            <DropdownMenuItem>
              <BarChart className="mr-2 h-4 w-4" />
              Summary View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BarChart className="mr-2 h-4 w-4" />
              Detailed View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BarChart className="mr-2 h-4 w-4" />
              Export Data
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articlesData.length}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Verified</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{verifiedCount}</div>
            <p className="text-xs text-muted-foreground">High confidence articles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgScore}</div>
            <p className="text-xs text-muted-foreground">+5.2% accuracy improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Flags</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Requires review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
            <CardDescription>Latest fact-checked content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {articlesData.slice(0, 3).map((article) => (
                <div key={article.id} className="flex items-start gap-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{article.title}</p>
                    <p className="text-sm text-muted-foreground">{article.source}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`text-sm font-bold ${
                      article.score >= 80 ? 'text-success' :
                      article.score >= 60 ? 'text-warning' :
                      'text-destructive'
                    }`}>
                      {article.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Sources</CardTitle>
            <CardDescription>Most reliable sources this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Reuters", "BBC", "NASA"].map((source, idx) => (
                <div key={source} className="flex items-center gap-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{source}</p>
                    <p className="text-sm text-muted-foreground">Quality Score: {[90, 88, 92][idx]}</p>
                  </div>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* More Options Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings2 className="h-5 w-5 text-primary" />
            <CardTitle>More Options</CardTitle>
          </div>
          <CardDescription>Advanced configuration and filtering options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Additional Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="action-type">Action Type</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Select Action
                    <BarChart className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover z-50">
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => toast.success("Verifying pending articles...")}>
                    Verify All Pending
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info("Exporting data to CSV...")}>
                    Export to CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.loading("Generating report...")}>
                    Generate Report
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success("Articles archived successfully")}>
                    Archive Old Articles
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Analysis Tools</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => toast.loading("Running fact check analysis...")}>
                    Run Fact Check
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info("Analyzing content for bias...")}>
                    Detect Bias
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.loading("Checking sources...")}>
                    Check Sources
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info("Running sentiment analysis...")}>
                    Analyze Sentiment
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Data Management</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => toast.info("Import dialog opened")}>
                    Bulk Import
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success("Database backup initiated")}>
                    Backup Database
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.success("Cache cleared successfully")}>
                    Clear Cache
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.loading("Optimizing storage...")}>
                    Optimize Storage
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Multi-select */}
            <div className="space-y-2">
              <Label htmlFor="source-filter">Source Filter</Label>
              <Select>
                <SelectTrigger id="source-filter" className="w-full">
                  <SelectValue placeholder="Select sources" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="reuters">Reuters</SelectItem>
                  <SelectItem value="bbc">BBC</SelectItem>
                  <SelectItem value="cnn">CNN</SelectItem>
                  <SelectItem value="nyt">New York Times</SelectItem>
                  <SelectItem value="guardian">The Guardian</SelectItem>
                  <SelectItem value="ap">Associated Press</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Custom Value Input */}
            <div className="space-y-2">
              <Label htmlFor="custom-value">Custom Filter Value</Label>
              <Input
                id="custom-value"
                placeholder="Enter custom criteria..."
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
              />
            </div>
          </div>

          {/* Category Checkboxes */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Category Selection</Label>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {["Politics", "Technology", "Health", "Science", "Business", "Entertainment", "Sports", "Environment"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      }
                    }}
                  />
                  <Label
                    htmlFor={category}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Mode Toggle */}
          <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <Label htmlFor="advanced-mode" className="font-semibold cursor-pointer">
                  Advanced Mode
                </Label>
                <p className="text-sm text-muted-foreground">
                  Enable advanced filtering and analysis features
                </p>
              </div>
            </div>
            <Switch
              id="advanced-mode"
              checked={advancedMode}
              onCheckedChange={(checked) => {
                setAdvancedMode(checked);
                toast.success(
                  checked ? "Advanced mode enabled" : "Advanced mode disabled",
                  { description: checked ? "You now have access to advanced features" : "Advanced features disabled" }
                );
              }}
            />
          </div>

          {advancedMode && (
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5 space-y-3">
              <p className="text-sm font-medium text-primary">Advanced Features Enabled</p>
              <p className="text-sm text-muted-foreground">
                You now have access to deep analytics, custom algorithms, and experimental tools.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
