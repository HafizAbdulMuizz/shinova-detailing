export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Khan",
      review:
        "Amazing service! My car looked brand new after detailing.",
    },
    {
      name: "Ali Raza",
      review:
        "Professional staff and premium quality work. Highly recommended.",
    },
    {
      name: "Usman Tariq",
      review:
        "Best car detailing experience I've ever had.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Customer Reviews
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl border border-yellow-500"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-3">
              {review.name}
            </h3>

            <p className="text-gray-300">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}