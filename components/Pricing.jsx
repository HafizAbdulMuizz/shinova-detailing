export default function Pricing({
  setSelectedPackage,
})  {
  
  const packages = [
    {
      title: "Essential Wash",
      price: "2500 PKR",
      features: [
        "Exterior Wash",
        "Tire Cleaning",
        "Window Cleaning",
        "Quick Dry"
      ]
    },
    {
      title: "Premium Detail",
      price: "5000 PKR",
      features: [
        "Interior Cleaning",
        "Exterior Wash",
        "Wax Protection",
        "Dashboard Polish"
      ]
    },
    {
      title: "Elite Ceramic",
      price: "10000 PKR",
      features: [
        "Ceramic Coating",
        "Full Detailing",
        "Paint Protection",
        "Premium Finish"
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold">
          Pricing <span className="text-yellow-500">Packages</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Choose the package that suits your vehicle.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border transition duration-300 hover:scale-105 ${
                index === 1
                  ? "border-yellow-500 bg-gray-900"
                  : "border-gray-800 bg-gray-950"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {pkg.title}
              </h3>

              <div className="text-5xl font-bold text-yellow-500 mt-6">
                {pkg.price}
              </div>

              <ul className="mt-8 space-y-3 text-gray-400">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
  onClick={() => {

    setSelectedPackage(pkg.title);

    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }}
  className="w-full mt-8 bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400"
>
  Book Now
</button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}