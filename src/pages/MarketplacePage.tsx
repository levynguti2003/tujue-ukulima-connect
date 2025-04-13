
import Layout from "@/components/layout/Layout";
import ArticleBanner from "@/components/articles/ArticleBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const MarketplacePage = () => {
  return (
    <Layout>
      <ArticleBanner 
        title="Marketplace" 
        description="Browse and purchase agricultural inputs, tools, and services to support your farming operations."
      />
      
      <div className="container mx-auto px-4 py-12 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6 pb-4">
            <div className="py-8 px-4">
              <h2 className="text-2xl font-semibold mb-4 text-tu-green-700">Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                Our marketplace is under construction. It will soon offer a wide range of agricultural products, services, and tools to help your farm thrive.
              </p>
              <div className="w-24 h-1 bg-tu-green-500 mx-auto mb-6"></div>
              <p className="text-sm text-gray-500">
                Visit our office or contact support for current offerings and services.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
