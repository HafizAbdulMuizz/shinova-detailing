"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
export default function Booking({ selectedPackage }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    packageName: "Essential Wash",
    date: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {

    setFormData((prev) => ({
      ...prev,
      packageName: selectedPackage,
    }));

  }, [selectedPackage]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {

e.preventDefault();

setLoading(true);

try {

```
const res = await fetch(
  "/api/booking",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

if (!res.ok) {

  toast.error("Booking Failed!");

  return;
}

toast.success(
  "Booking Submitted Successfully!"
);

setFormData({
  name: "",
  phone: "",
  vehicleType: "",
  packageName: "Essential Wash",
  date: "",
  notes: "",
});
```

} catch {

```
toast.error(
  "Something went wrong!"
);
```

} finally {

```
setLoading(false);
```

}

};

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold">
          Book Your <span className="text-yellow-500">Appointment</span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />
          <input
            type="text"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            placeholder="Vehicle Type"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <select
            name="packageName"
            value={formData.packageName}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          >
            <option>Essential Wash</option>
            <option>Premium Detail</option>
            <option>Elite Ceramic</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <textarea
            rows="4"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional Notes"
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-black font-bold py-4 rounded-xl transition ${loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-400"
              }`}
          >
            {loading
              ? "Submitting..."
              : "Book Appointment"}
          </button>

        </form>

      </div>
    </section>
  );
}