export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
          Premium Auto Spa
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
          Premium Car
          <span className="text-yellow-500"> Detailing </span>
          Experience
        </h1>

        <p className="mt-8 text-lg text-gray-400 max-w-2xl">
          Experience luxury car care with Shinova Detailing.
          Professional washing, polishing, ceramic coating
          and complete vehicle restoration services.
        </p>

     <div className="flex flex-wrap gap-4 mt-10">

  <a
    href="#contact"
    className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
  >
    Book Service
  </a>

  <a
    href="#pricing"
    className="border border-yellow-500 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
  >
    View Packages
  </a>

</div>

      </div>

    </section>
  );
}