import { db } from "@/lib/prisma";

export default async function getRestaurantBySlug(slug: string) {
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: {
      menuCategories: {
        include: { products: true },
      },
    },
  });

  return restaurant;
}
