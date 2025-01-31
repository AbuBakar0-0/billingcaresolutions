import React, { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import { useParams } from "react-router-dom";

const GetSpeciality = () => {
  const { id: specialityId } = useParams();
  const [speciality, setSpeciality] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [content, setContent] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialityDetails = async () => {
      try {
        // Fetch Speciality
        const { data: specialityData, error: specialityError } = await supabase
          .from("specialities")
          .select("*")
          .eq("id", specialityId)
          .single();
        if (specialityError) throw specialityError;
        setSpeciality(specialityData);

        // Fetch Speciality FAQs
        const { data: faqsData, error: faqsError } = await supabase
          .from("speciality_faqs")
          .select("*")
          .eq("speciality_id", specialityId);
        if (faqsError) throw faqsError;
        setFaqs(faqsData || []);

        // Fetch Specialities Content
        const { data: contentData, error: contentError } = await supabase
          .from("specialities_content")
          .select("*")
          .eq("speciality_id", specialityId);
        if (contentError) throw contentError;
        setContent(contentData || []);

        // Fetch Specialities Testimonials
        const { data: testimonialsData, error: testimonialsError } =
          await supabase
            .from("speciality_testimonials")
            .select("*")
            .eq("speciality_id", specialityId);
        if (testimonialsError) throw testimonialsError;
        setTestimonials(testimonialsData || []);
      } catch (error) {
        console.error("Error fetching speciality details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialityDetails();
  }, [specialityId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{speciality?.name}</h1>

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

      <section>
        <h2>Testimonials</h2>
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <blockquote>{testimonial.answer}</blockquote>
              <p>- {testimonial.question}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default GetSpeciality;
