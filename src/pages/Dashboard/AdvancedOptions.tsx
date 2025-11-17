import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings2, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AdvancedOptions = () => {
  const [accuracyThreshold, setAccuracyThreshold] = useState([75]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [confidenceLevel, setConfidenceLevel] = useState([80]);
  const [batchSize, setBatchSize] = useState([10]);
  const [enableAI, setEnableAI] = useState(true);
  const [debugMode, setDebugMode] = useState(false);

  const handleSave = () => {
    toast.success("Advanced settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Settings2 className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Advanced Options</h1>
          <p className="text-muted-foreground">Fine-tune your analytics settings</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Analysis Settings</CardTitle>
            <CardDescription>Configure fact-checking parameters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="accuracy">Accuracy Threshold</Label>
                <span className="text-sm font-medium text-primary">{accuracyThreshold[0]}%</span>
              </div>
              <Slider
                id="accuracy"
                value={accuracyThreshold}
                onValueChange={setAccuracyThreshold}
                max={100}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Minimum accuracy score required for auto-verification
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="confidence">Confidence Level</Label>
                <span className="text-sm font-medium text-primary">{confidenceLevel[0]}%</span>
              </div>
              <Slider
                id="confidence"
                value={confidenceLevel}
                onValueChange={setConfidenceLevel}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                AI model confidence threshold for predictions
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="batch">Batch Processing Size</Label>
                <span className="text-sm font-medium text-primary">{batchSize[0]}</span>
              </div>
              <Slider
                id="batch"
                value={batchSize}
                onValueChange={setBatchSize}
                min={1}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Number of articles to process simultaneously
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Preferences</CardTitle>
            <CardDescription>Manage application behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-refresh">Auto Refresh</Label>
                <p className="text-sm text-muted-foreground">Automatically update data</p>
              </div>
              <Switch
                id="auto-refresh"
                checked={autoRefresh}
                onCheckedChange={setAutoRefresh}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enable-ai">AI Analysis</Label>
                <p className="text-sm text-muted-foreground">Enable AI-powered insights</p>
              </div>
              <Switch
                id="enable-ai"
                checked={enableAI}
                onCheckedChange={setEnableAI}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="debug">Debug Mode</Label>
                <p className="text-sm text-muted-foreground">Show detailed logs</p>
              </div>
              <Switch
                id="debug"
                checked={debugMode}
                onCheckedChange={setDebugMode}
              />
            </div>

            <div className="space-y-2 pt-4 border-t">
              <Label htmlFor="refresh-interval">Refresh Interval (minutes)</Label>
              <Input
                id="refresh-interval"
                type="number"
                defaultValue="5"
                min="1"
                max="60"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-results">Max Results Per Page</Label>
              <Input
                id="max-results"
                type="number"
                defaultValue="50"
                min="10"
                max="200"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Data Range Settings</CardTitle>
            <CardDescription>Configure date and time ranges for analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="start-date">Analysis Start Date</Label>
                <Input
                  id="start-date"
                  type="date"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="end-date">Analysis End Date</Label>
                <Input
                  id="end-date"
                  type="date"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="time-range">Time Window (hours)</Label>
                <span className="text-sm font-medium text-primary">24h</span>
              </div>
              <Slider
                id="time-range"
                defaultValue={[24]}
                max={168}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Rolling time window for real-time analysis
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default AdvancedOptions;
