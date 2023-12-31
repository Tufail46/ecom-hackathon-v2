import { cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const GET = async (
  request: NextRequest,
  { params: { userId } }: { params: { userId: string } }
) => {
  if (!userId) {
    return NextResponse.json(
      {
        Message: "Invalid User ID",
      },
      { status: 500 }
    );
  }
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, userId));

    const cartItems = res.map((item) => ({
      _id: item.product_id,
      title: item.product_name,
      price: item.price,
      totalPrice: item.price * item.quantity,
      subtitle: item.subcat,
      images: item.image,
      useId: item.user_id,
      quantity: item.quantity,
    }));
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    return NextResponse.json({ cartItems, totalQuantity, totalAmount });
  } catch (error) {
    return NextResponse.json({
      Message: error,
    });
  }
};
