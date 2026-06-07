"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminPage() {

  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("adminLoggedIn");

    if (!isLoggedIn) {

      router.push("/admin");
      return;

    }

    fetch("/api/booking")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings);
      });

  }, [router]);


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
  const updateStatus = async (
    id,
    status
  ) => {

    await fetch("/api/booking", {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    setBookings(
      bookings.map((booking) =>
        booking._id === id
          ? {
            ...booking,
            status,
          }
          : booking
      )
    );

  };
  const revenue = bookings.reduce(
    (total, booking) => {

      if (
        booking.packageName ===
        "Essential Wash"
      )
        return total + 2500;

      if (
        booking.packageName ===
        "Premium Detail"
      )
        return total + 5000;

      if (
        booking.packageName ===
        "Elite Ceramic"
      )
        return total + 10000;

      return total;

    },
    0
  );
  const pendingCount = bookings.filter(
    (booking) =>
      (booking.status || "Pending") ===
      "Pending"
  ).length;

  const confirmedCount = bookings.filter(
    (booking) =>
      booking.status === "Confirmed"
  ).length;

  const completedCount = bookings.filter(
    (booking) =>
      booking.status === "Completed"
  ).length;
  const handleLogout = () => {

    localStorage.removeItem(
      "adminLoggedIn"
    );

    router.push("/admin");

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-yellow-500">
          Shinova Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>

      </div>
      <div className="grid md:grid-cols-5 gap-6 mb-8">

        <div className="bg-gray-900 p-6 rounded-xl">

          <h3 className="text-gray-400">
            Total Bookings
          </h3>

          <p className="text-4xl font-bold text-yellow-500">
            {bookings.length}
          </p>

        </div>

        <div className="bg-gray-900 p-6 rounded-xl">

          <h3 className="text-gray-400">
            Revenue
          </h3>

          <p className="text-4xl font-bold text-green-500">
            Rs. {revenue.toLocaleString()}
          </p>

        </div>

        <div className="bg-gray-900 p-6 rounded-xl">

          <h3 className="text-gray-400">
            Pending
          </h3>

          <p className="text-4xl font-bold text-red-500">
            {pendingCount}
          </p>

        </div>

        <div className="bg-gray-900 p-6 rounded-xl">

          <h3 className="text-gray-400">
            Confirmed
          </h3>

          <p className="text-4xl font-bold text-yellow-400">
            {confirmedCount}
          </p>

        </div>

        <div className="bg-gray-900 p-6 rounded-xl">

          <h3 className="text-gray-400">
            Completed
          </h3>

          <p className="text-4xl font-bold text-green-500">
            {completedCount}
          </p>

        </div>

      </div>

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full mb-8 p-4 rounded-xl bg-gray-900 border border-gray-700"
      />
      <div className="overflow-x-auto">

        <table className="w-full border border-gray-700">

          <thead>

            <tr className="bg-yellow-500 text-black">

              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Vehicle</th>
              <th className="p-3">Package</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>

            </tr>

          </thead>

          <tbody>

            {bookings
              .filter((booking) =>
                booking.name
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
              )
              .map((booking) => (

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

                    <span
                      className={
                        booking.status ===
                          "Completed"
                          ? "text-green-500"
                          : booking.status ===
                            "Confirmed"
                            ? "text-yellow-500"
                            : "text-red-500"
                      }
                    >
                      {booking.status || "Pending"} ✓
                    </span>

                  </td>

                  <td className="p-3 flex gap-2 justify-center">

                    <button
                      disabled={
                        booking.status ===
                        "Confirmed" ||
                        booking.status ===
                        "Completed"
                      }
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Confirmed"
                        )
                      }
                      className={`px-3 py-2 rounded-lg ${booking.status ===
                          "Confirmed" ||
                          booking.status ===
                          "Completed"
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-yellow-600"
                        }`}
                    >
                      Confirm
                    </button>

                    <button
                      disabled={
                        booking.status ===
                        "Completed"
                      }
                      onClick={() =>
                        updateStatus(
                          booking._id,
                          "Completed"
                        )
                      }
                      className={`px-3 py-2 rounded-lg ${booking.status ===
                          "Completed"
                          ? "bg-gray-600 cursor-not-allowed"
                          : "bg-green-600"
                        }`}
                    >
                      Complete
                    </button>

                    <button
                      onClick={() =>
                        deleteBooking(
                          booking._id
                        )
                      }
                      className="bg-red-600 px-3 py-2 rounded-lg"
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