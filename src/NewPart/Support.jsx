
import React, { useState,useEffect } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Truck, Undo2, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "📦 How do I track my order?",
    answer: "After placing your order, you will receive a confirmation email with a tracking link. You can also log in to your account and view the tracking status from the “Orders” section.",
  },
  {
    question: "🔁 How do I return or exchange an item?",
    answer: "You can return or exchange items within 30 days of purchase. Visit the “Returns” section in your account, select the item, and follow the instructions. Make sure the product is in original condition.",
  },
  {
    question: "🧾 Where can I find my invoice?",
    answer: "Invoices are sent to your registered email after purchase. You can also download them anytime from your “Orders” section by clicking the “Download Invoice” button.",
  },
  {
    question: "👤 How do I contact customer service?",
    answer: "You can reach us via email at support@gadgetheaven.com, call us at + (880) 123-4567, or use our live chat from Mon–Fri, 9am–6pm.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
   useEffect(() => {
        document.title = 'Gadget Heaven | Support';
      }, []);
    useEffect(() => {
      const navbar = document.querySelector('nav');
      if (navbar) navbar.classList.add('bg-white', 'text-black');
      return () => navbar?.classList.remove('bg-white', 'text-black');
    }, []);

  return (
    <div className="p-6  mx-auto">
      <div className="bg-purple-600 text-white text-center mb-16 py-10 px-4">
      <h1 className="text-4xl font-bold  mb-6 text-center">📞 Support & Help Center</h1>

      <p className="mb-8 text-lg  text-center max-w-2xl mx-auto">
        Need help? We're here for you! Whether it's about your order, product info, or returns — check out the FAQs below or reach us directly.
      </p>
      </div>
      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MessageSquare className="text-purple-600" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 flex items-center justify-between text-lg font-medium text-gray-800 hover:bg-purple-50 rounded-t-lg"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Phone className="text-purple-600" /> Contact Us
        </h2>
        <div className="text-gray-700 text-lg space-y-2">
          <p><Mail className="inline mr-2 text-purple-600" /> Email: <a href="mailto:support@gadgetheaven.com" className="text-purple-600 underline">support@gadgetheaven.com</a></p>
          <p><Phone className="inline mr-2 text-purple-600" /> Phone: + (880) 123-4567</p>
          <p><MessageSquare className="inline mr-2 text-purple-600" /> Live Chat: Mon–Fri, 9am–6pm</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Truck className="text-purple-600" /> Shipping & <Undo2 className="text-purple-600" /> Returns
        </h2>
        <p className="text-gray-700 text-lg">
          ✅ We offer <strong>free shipping</strong> on orders over $50. Returns are accepted within 30 days of purchase. Contact support for detailed return instructions.
        </p>
      </section>

     
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="text-purple-600" /> Visit Our Store
        </h2>
        <div className="mb-4 text-gray-700 text-lg">
          Gadget Heaven, Jamuna Future Park, KA-244, Kuril, Progoti Shoroni, Dhaka
        </div>
        
      </section>
    </div>
  );
};

export default Support;
