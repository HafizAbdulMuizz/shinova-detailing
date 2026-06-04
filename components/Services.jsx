export default function Services() {
  const services = [
    {
      title: "Exterior Wash",
      desc: "Professional hand wash with premium products."
    },
    {
      title: "Interior Detailing",
      desc: "Deep cleaning of seats, dashboard and carpets."
    },
    {
      title: "Wax & Polish",
      desc: "Restore shine and protect your paint."
    },
    {
      title: "Ceramic Coating",
      desc: "Long-lasting protection and gloss."
    },
    {
      title: "Tire & Rim Care",
      desc: "Detailed cleaning for wheels and tires."
    },
    {
      title: "Engine Bay Cleaning",
      desc: "Safe and professional engine cleaning."
    }
  ];

  return (
    <section  id="services" className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Premium <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Luxury detailing solutions for every vehicle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-yellow-500 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-500">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}