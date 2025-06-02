import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/ServiceDetails/Hero";
import ContactForm from "./../components/Contact/ContactForm";
import ExpansionTile from "./../components/FaqDetails/ExpansionTile";
import Heading from "./../components/Heading";
import HeadingLine from "./../components/HeadingLine";

function ServiceDetails() {
  const { id: serviceName } = useParams();
  const [service, setService] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [subcontent1, setSubContent1] = useState([]);
  const [subcontent2, setSubContent2] = useState([]);
  const [subcontent3, setSubContent3] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchServiceDetails = async () => {
      var serviceId = "";
      setLoading(true);
      try {
        // Fetch Service
        const { data: serviceData, error: serviceError } = await supabase
          .from("services")
          .select("*")
          .eq("slug", serviceName)
          .single();
        if (serviceError) throw serviceError;
        setService(serviceData);
        serviceId = serviceData.id;

        // Fetch Service FAQs
        const { data: faqsData, error: faqsError } = await supabase
          .from("service_faqs")
          .select("*")
          .eq("service_id", serviceId);
        if (faqsError) throw faqsError;
        setFaqs(faqsData || []);

        // Fetch Specialities Content
        const { data: subContentData1, error: subContentError1 } =
          await supabase
            .from("service_content")
            .select("*")
            .eq("service_id", serviceId)
            .eq("content_no", 1);
        if (subContentError1) throw subContentError1;
        setSubContent1(subContentData1 || []);

        const { data: subContentData2, error: subContentError2 } =
          await supabase
            .from("service_content")
            .select("*")
            .eq("service_id", serviceId)
            .eq("content_no", 2);
        if (subContentError2) throw subContentError2;
        setSubContent2(subContentData2 || []);

        const { data: subContentData3, error: subContentError3 } =
          await supabase
            .from("service_content")
            .select("*")
            .eq("service_id", serviceId)
            .eq("content_no", 3);
        if (subContentError3) throw subContentError3;
        setSubContent3(subContentData3 || []);
      } catch (error) {
        console.error("Error fetching service details:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceName]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <div className="loader"></div>{" "}
        </div>
      ) : (
        <>
          <Hero
            title={service.title}
            image={service.header}
            description={service.description}
          />
          <div className="w-full container flex flex-col md:flex-row justify-center items-start gap-2 mx-auto p-10">
            <div className="md:w-3/4 flex flex-col justify-center items-center gap-4">
              <HeadingLine data={service.content_title} />
              <p className="w-full text-start">{service.content_description}</p>

              <HeadingLine data={subcontent1[0].subcontent_title ?? ""} />
              <div className="w-full flex flex-col justify-start items-start gap-4">
                {subcontent1.length > 0 && (
                  <>
                    <div className="w-full flex flex-wrap justify-start items-start">
                      <ul className="text-md">
                        {subcontent1.map((item) => (
                          <>
                            <div
                              className={`${item.detail_title == null ||
                                item.detail_title == ""
                                ? ""
                                : "my-4"
                                }`}
                            >
                              <li className="text-2xl text-secondary">
                                {item.detail_title}
                              </li>
                              <li>{item.detail_description}</li>
                            </div>
                            <li>
                              <span className="text-secondary font-semibold mr-2">
                                {item.title}:
                              </span>
                              {item.description}
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <HeadingLine data={subcontent2[0].title ?? ""} />
              <ul className="w-full text-md">
                {subcontent2.length > 0 && (
                  subcontent2.map((item, index) => (
                    <>
                      <li>
                        <span className="text-secondary font-semibold mr-2">
                          {item.title}
                        </span>
                        {item.description}
                      </li>
                    </>
                  )))}
              </ul>
              <HeadingLine data={subcontent3[0].title ?? ""} />
              <ul className="w-full text-md">
                {subcontent3.length > 0 && (
                  subcontent3.map((item, index) => (
                    <>
                      <li>
                        <span className="text-secondary font-semibold mr-2">
                          {item.title}:
                        </span>
                        {item.description}
                      </li>
                    </>
                  )))}
              </ul>
            </div>
            <div className="w-full md:w-1/4 flex flex-col justify-start items-start">
              <div className="w-full flex flex-col justify-center items-center gap-4 p-5 shadow-lg rounded-lg border-[1px] border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>
          <Heading data={service.title + " FAQ's"} />
          <div className="w-full flex flex-col justify-between items-center gap-4 mb-10 px-10">
            {faqs.map((item, index) => (
              <ExpansionTile
                key={index}
                data={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}

export default ServiceDetails;
