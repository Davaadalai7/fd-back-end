import { Order } from "../../models/order-model";

export const createOrderController = async (req, res) => {
  try {
    const { totalPrice, foodOrderItems } = req.body;

    const userId = req.user._id;

    const newOrder = new Order({
      user: userId,
      totalPrice,
      foodOrderItems,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: savedOrder,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};
