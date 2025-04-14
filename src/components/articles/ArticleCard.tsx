
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, Bookmark, ExternalLink } from "lucide-react";

export interface ArticleProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  externalUrl?: string;
}

interface ArticleCardProps {
  article: ArticleProps;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-tu-green-600">
          {article.category}
        </Badge>
        <button
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors"
          aria-label="Bookmark article"
        >
          <Bookmark className="h-4 w-4 text-tu-green-700" />
        </button>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        {article.externalUrl ? (
          <a href={article.externalUrl} target="_blank" rel="noopener noreferrer" className="group">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-tu-green-600 transition-colors flex items-start">
              {article.title}
              <ExternalLink className="h-4 w-4 ml-1 mt-1 inline opacity-70" />
            </h3>
          </a>
        ) : (
          <Link to={article.slug}>
            <h3 className="text-xl font-semibold mb-3 hover:text-tu-green-600 transition-colors">
              {article.title}
            </h3>
          </Link>
        )}
        <p className="text-gray-600 mb-4">
          {article.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 px-6 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{article.date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
