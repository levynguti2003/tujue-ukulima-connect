
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How soon will I receive an expert response?",
    answer: "Most chat questions receive an instant AI-powered response. For the expert consultation form, you'll typically hear back from a human expert within 24-48 hours depending on query complexity and expert availability."
  },
  {
    question: "Are the experts real agricultural professionals?",
    answer: "Yes, our team consists of trained agricultural specialists with practical experience in various farming disciplines. They include agronomists, soil scientists, pest management experts, and agricultural technology specialists."
  },
  {
    question: "Is this service available in multiple languages?",
    answer: "Currently, our service is primarily available in English and Swahili. We're working to expand language support to include more local languages in the future."
  },
  {
    question: "How can I send images of my crops or problems?",
    answer: "You can upload images through the consultation form by clicking the attachment button. For the chat feature, image upload will be coming soon."
  },
  {
    question: "Is there a limit to how many questions I can ask?",
    answer: "No, you can ask as many questions as you need through both our chat system and consultation forms. We're here to help you succeed in your farming endeavors."
  }
];

const FAQAccordion = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
