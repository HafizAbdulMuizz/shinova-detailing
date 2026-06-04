import Image from "next/image";

export default function Gallery() {
  const images = [
    "/lux1.jpg",
    "/lux2.jpg",
    "/lux3.jpg",
    "/lux4.jpg",
    "/lux5.jpg",
    "/lux6.jpg",
  ];

  return (
    <section id="gallery" className="bg-gray-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold">
          Our <span className="text-yellow-500">Gallery</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Premium results that speak for themselves.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src={img}
                alt="Car"
                width={500}
                height={500}
                className="w-full h-[280px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}