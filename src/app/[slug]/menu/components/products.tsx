import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export interface RestaurantProductsProps {
    products: Product[]
}
export default function RestaurantProducts({products}: RestaurantProductsProps) {
    return (
        <div className="space-y-3 px-5">
        {
            products.map(product => (
                <Link 
                key={product.id} 
                href={"/"}
                className="flex items-center justify-between gap-6 py-2 border-b">
                    <div className="relative min-h-[66px] min-w-[96px] ">
                        <Image
                            className=" rounded-lg object-contain"
                            src={product.imageUrl}
                            alt={product.name}
                            fill
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium">{product.name}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                        <p className="pt-3 text-sm font-semibold">
                            {new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(product.price)}
                        </p>
                    </div>
                </Link>
            ))
        }
        </div>
    );
}