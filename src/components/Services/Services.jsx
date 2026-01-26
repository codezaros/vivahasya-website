import React from "react";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Decor",
      description: "Our team will design the decors with your expectation",
      image: "",
    },
    {
      id: 2,
      title: "Events",
      description:
        "The whole events will be managed from end to end by our team",
      image: "",
    },
    {
      id: 3,
      title: "Budgeting",
      description:
        "Just say the budget we will create a sample for your event as per your choice",
      image: "",
    },
    {
      id: 4,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 5,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 6,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 7,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 8,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 9,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
    {
      id: 10,
      title: "End-to-End",
      description:
        "Our team will be there to complete the event from the start to end with every corners covered",
      image: "",
    },
  ];

  return (
    <section className="services-container">
      <h1 className="main-title">Our Services</h1>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-wrapper">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              ) : (
                <div className="service-image" />
              )}
            </div>

            <div className="service-text">
              <h3 className="card-title">
                <span className="quote-mark">“</span>
                {service.title}
              </h3>
              <p className="card-desc">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="service-btn">
        <div className="btn-wrapper">
          <div className="css-swirl-arrow"></div>
          <button className="btn">Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;

