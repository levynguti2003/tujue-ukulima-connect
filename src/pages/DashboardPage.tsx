
import Layout from "@/components/layout/Layout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import BookmarkedContent from "@/components/dashboard/BookmarkedContent";
import UserProfile from "@/components/dashboard/UserProfile";
import RecentActivity from "@/components/dashboard/RecentActivity";
import WatchedVideos from "@/components/dashboard/WatchedVideos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const DashboardPage = () => {
  const { currentUser } = useAuth();
  
  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">
            {currentUser ? `Welcome, ${currentUser.name}` : 'My Dashboard'}
          </h1>
          
          <DashboardStats />
          
          <Tabs defaultValue="videos">
            <TabsList className="mb-4">
              <TabsTrigger value="videos">Watched Videos</TabsTrigger>
              <TabsTrigger value="saved">Saved Content</TabsTrigger>
              <TabsTrigger value="profile">My Profile</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos">
              <WatchedVideos />
            </TabsContent>
            
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
