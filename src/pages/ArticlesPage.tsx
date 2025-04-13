
import Layout from "@/components/layout/Layout";
import ArticleBanner from "@/components/articles/ArticleBanner";
import ArticleList from "@/components/articles/ArticleList";

const ArticlesPage = () => {
  return (
    <Layout>
      <ArticleBanner 
        title="Articles & Resources" 
        description="Explore our collection of expert articles, guides, and resources to enhance your farming knowledge and practices."
      />
      <div className="container mx-auto px-4 py-8">
        <ArticleList />
      </div>
    </Layout>
  );
};

export default ArticlesPage;
