import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({

  name: String,

  phone: String,

  vehicleType: String,

  packageName: String,

  date: String,

  notes: String,

  status: {
    type: String,
    default: "Pending",
  },

},
{
  timestamps: true,
});
export default mongoose.models.Booking ||
mongoose.model("Booking", BookingSchema);