
import Layout from "@/components/layout/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import BookmarkedContent from "@/components/dashboard/BookmarkedContent";
import UserProfile from "@/components/dashboard/UserProfile";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
          
          <DashboardStats />
          
          <Tabs defaultValue="saved">
            <TabsList className="mb-4">
              <TabsTrigger value="saved">Saved Content</TabsTrigger>
              <TabsTrigger value="profile">My Profile</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="saved">
              <Card>
                <CardContent className="pt-6">
                  <BookmarkedContent />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <UserProfile />
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardContent className="pt-6">
                  <RecentActivity />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
