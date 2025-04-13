
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, PlaySquare, MessageSquare, Award } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Saved Articles</CardTitle>
          <BookMarked className="h-4 w-4 text-tu-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground mt-1">
            +3 in the last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Videos Watched</CardTitle>
          <PlaySquare className="h-4 w-4 text-tu-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <p className="text-xs text-muted-foreground mt-1">
            +2 in the last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Questions Asked</CardTitle>
          <MessageSquare className="h-4 w-4 text-tu-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground mt-1">
            +1 in the last month
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Points Earned</CardTitle>
          <Award className="h-4 w-4 text-tu-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">320</div>
          <p className="text-xs text-muted-foreground mt-1">
            +80 in the last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
