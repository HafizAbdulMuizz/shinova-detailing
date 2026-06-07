import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(request) {

  try {

    await connectDB();

    const body = await request.json();

    const booking = await Booking.create(body);

    return NextResponse.json({
      success: true,
      booking,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}

export async function GET() {

  try {

    await connectDB();

    const bookings = await Booking.find();

    return NextResponse.json({
      success: true,
      bookings,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}
export async function DELETE(request) {

  try {

    await connectDB();

    const { id } = await request.json();

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Booking Deleted",
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}
export async function PUT(request) {

  try {

    await connectDB();

    const { id, status } =
      await request.json();

    const updatedBooking =
      await Booking.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

    return NextResponse.json({
      success: true,
      booking: updatedBooking,
    });

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: error.message,
    });

  }

}