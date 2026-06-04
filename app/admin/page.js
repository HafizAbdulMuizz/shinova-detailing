"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    fetch("/api/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings);
      });

  }, []);
 

  const deleteBooking = async (id) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    await fetch("/api/booking", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    setBookings(
      bookings.filter(
        (booking) => booking._id !== id
      )
    );

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        Shinova Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-gray-400">
            Total Bookings
          </h3>

          <p className="text-4xl font-bold text-yellow-500">
            {bookings.length}
          </p>
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border border-gray-700">

          <thead>

            <tr className="bg-yellow-500 text-black">

              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Vehicle</th>
              <th className="p-3">Package</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking._id}
                className="border-b border-gray-700 text-center"
              >

                <td className="p-3">
                  {booking.name}
                </td>

                <td className="p-3">
                  {booking.phone}
                </td>

                <td className="p-3">
                  {booking.vehicleType}
                </td>

                <td className="p-3">
                  {booking.packageName}
                </td>

                <td className="p-3">
                  {booking.date}
                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteBooking(booking._id)
                    }
                    className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}