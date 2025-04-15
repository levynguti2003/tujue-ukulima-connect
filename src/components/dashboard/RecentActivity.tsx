
import { Activity, BookOpen, Video, MessageSquare, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { videoData } from "@/utils/videoData";

type ActivityType = "article" | "video" | "question";

interface ActivityItem {
  id: number;
  type: ActivityType;
  title: string;
  date: string;
  link: string;
}

const staticActivities: ActivityItem[] = [
  {
    id: 3,
    type: "question",
    title: "Asked: How can I improve soil drainage in my rice field?",
    date: "Apr 10, 2025",
    link: "/ask-expert"
  }
];

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case "article":
      return <BookOpen className="h-5 w-5 text-blue-500" />;
    case "video":
      return <Video className="h-5 w-5 text-red-500" />;
    case "question":
      return <MessageSquare className="h-5 w-5 text-green-500" />;
  }
};

const RecentActivity = () => {
  const { currentUser } = useAuth();
  
  // Generate activity items from watched videos
  const videoActivities = currentUser?.watchedVideos
    ? currentUser.watchedVideos.map((videoId, index) => {
        const videoInfo = videoData.find(video => video.id === videoId);
        if (!videoInfo) return null;
        
        return {
          id: index + 100, // unique ID
          type: "video" as ActivityType,
          title: `Watched: ${videoInfo.title}`,
          date: new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          link: `/videos#${videoId}`
        };
      }).filter(Boolean).slice(0, 5) // Take most recent 5
    : [];

  const allActivities = [...(videoActivities as ActivityItem[]), ...staticActivities]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Activity className="h-5 w-5 mr-2 text-tu-green-600" />
        Recent Activity
      </h2>
      
      {allActivities.length > 0 ? (
        <div className="space-y-4">
          {allActivities.map((item) => (
            <Link 
              key={item.id} 
              to={item.link}
              className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="mr-3 mt-0.5">
                {getActivityIcon(item.type)}
              </div>
              <div>
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {item.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>No recent activity found.</p>
          <p className="text-sm mt-2">
            Watch some videos or read articles to see your activity here.
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentActivity;
