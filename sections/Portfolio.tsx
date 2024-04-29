import { Button } from "deco-sites/luandecocamp/components/header/Button.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { PortfolioItem } from "deco-sites/luandecocamp/components/PortfolioItem.tsx";

export interface PortfolioProps {
  portfolio?: {
    image: ImageWidget;
    title: string;
    url: string;
    date: string;
  }[];
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  return (
    <section class="bg-dark-3">
      <div class="max-container-auto px-[162px] pt-20">
        <div class="flex flex-row justify-between items-center pb-12 border-b border-dark-12">
          <div class="flex flex-col gap-1">
            <h3 class="text-grey-50 font-semibold text-xl">PORTFOLIO</h3>
            <h4 class="text-white font-semibold text-6xl self-end">
              MY PHOTOGRAPHY WORK
            </h4>
          </div>

          <Button styles="!self-end">View All Works -&gt;</Button>
        </div>

        <div class="flex flex-row gap-5 pt-10">
          {portfolio?.map((item, index) => (
            <PortfolioItem key={index} portfolio={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
