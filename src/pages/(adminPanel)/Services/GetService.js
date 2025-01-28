import React, { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const GetService = () => {
  const { id: serviceId } = useParams();
  const [service, setService] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        // Fetch Service
        const { data: serviceData, error: serviceError } = await supabase
          .from("services")
          .select("*")
          .eq("id", serviceId)
          .single();
        if (serviceError) throw serviceError;
        setService(serviceData);

        // Fetch Service FAQs
        const { data: faqsData, error: faqsError } = await supabase
          .from("service_faqs")
          .select("*")
          .eq("service_id", serviceId);
        if (faqsError) throw faqsError;
        setFaqs(faqsData || []);

        // Fetch Specialities Content
        const { data: contentData, error: contentError } = await supabase
          .from("service_content")
          .select("*")
          .eq("service_id", serviceId);
        if (contentError) throw contentError;
        setContent(contentData || []);

      } catch (error) {
        console.error("Error fetching service details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{service?.name}</h1>

      <section>
        <h2>FAQs</h2>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id}>
              <strong>{faq.question}</strong>: {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Content</h2>
        <ul>
          {content.map((item) => (
            <li key={item.id}>
              <h3>{item.subcontent_title}</h3>
              <h3>{item.details_title}</h3>
              <h3>{item.title}</h3>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      
    </div>
  );
};

export default GetService;
