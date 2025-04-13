
import Layout from "@/components/layout/Layout";
import ArticleBanner from "@/components/articles/ArticleBanner";
import AskExpertChat from "@/components/ask-expert/AskExpertChat";
import ExpertRequestForm from "@/components/ask-expert/ExpertRequestForm";
import FAQAccordion from "@/components/ask-expert/FAQAccordion";

const AskExpertPage = () => {
  return (
    <Layout>
      <ArticleBanner 
        title="Ask an Expert" 
        description="Get personalized answers to your farming questions from our agricultural experts."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Chat with an Agricultural Expert</h2>
            <AskExpertChat />
          </div>
          
          <div className="space-y-6">
            <ExpertRequestForm />
            <FAQAccordion />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AskExpertPage;
