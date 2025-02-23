import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface ConsumptionMethodOptionProps {
  slug: string;
  imgUrl: string;
  imgAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

export default function ConsumptionMethodOption(
  props: ConsumptionMethodOptionProps,
) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={props.imgUrl}
            alt={props.imgAlt}
            fill
            className="object-contain"
          />
        </div>
        <Button variant={"secondary"} className="rounded-full" asChild>
          <Link href={`/${props.slug}/menu?consumptionMethod=${props.option}`}>
            {props.buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
