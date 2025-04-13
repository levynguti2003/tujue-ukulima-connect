
import { Activity, BookOpen, Video, MessageSquare } from "lucide-react";

type ActivityType = "article" | "video" | "question";

interface ActivityItem {
  id: number;
  type: ActivityType;
  title: string;
  date: string;
  link: string;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    type: "article",
    title: "Modern Approaches to Pest Control in Rice Farming",
    date: "Today, 10:25 AM",
    link: "/articles/modern-approaches-to-pest-control"
  },
  {
    id: 2,
    type: "video",
    title: "Getting Started with Drone Spraying",
    date: "Yesterday, 3:45 PM",
    link: "/videos/getting-started-with-drone-spraying"
  },
  {
    id: 3,
    type: "question",
    title: "Asked: How can I improve soil drainage in my rice field?",
    date: "Apr 10, 2025",
    link: "/ask-expert"
  },
  {
    id: 4,
    type: "article",
    title: "How Drone Technology is Revolutionizing Agriculture",
    date: "Apr 8, 2025",
    link: "/articles/drone-technology-in-agriculture"
  },
  {
    id: 5,
    type: "video",
    title: "Soil Testing Techniques for Small-Scale Farmers",
    date: "Apr 5, 2025",
    link: "/videos/soil-testing-techniques"
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
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Activity className="h-5 w-5 mr-2 text-tu-green-600" />
        Recent Activity
      </h2>
      
      <div className="space-y-4">
        {activities.map((item) => (
          <a 
            key={item.id} 
            href={item.link}
            className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="mr-3 mt-0.5">
              {getActivityIcon(item.type)}
            </div>
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
