import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);