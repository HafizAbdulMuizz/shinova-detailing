export default function WhyChooseUs() {
  const features = [
    {
      title: "Certified Experts",
      desc: "Experienced detailing specialists for premium results."
    },
    {
      title: "Premium Products",
      desc: "High-quality products that protect and enhance your vehicle."
    },
    {
      title: "Fast Service",
      desc: "Efficient workflow with attention to every detail."
    },
    {
      title: "Customer Satisfaction",
      desc: "Trusted by car owners who value quality and care."
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-yellow-500">Shinova</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Luxury detailing backed by expertise and quality.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-500 transition"
            >
              <h3 className="text-xl font-semibold text-yellow-500">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}