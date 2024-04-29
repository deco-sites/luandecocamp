interface PortfolioProps {
  image: string;
  title: string;
  url: string;
  date: string;
}

interface Props {
  portfolio: PortfolioProps;
}

export function PortfolioItem({ portfolio }: Props) {
  return (
    <div class="flex flex-col">
      <img
        src={portfolio.image}
        loading="lazy"
        class="hover:scale-110 transition-all duration-300"
      />

      <div class="flex flex-row justify-between pt-5">
        <div class="flex flex-col gap-2.5">
          <h4 class="text-grey-80 font-medium text-xl">{portfolio.title}</h4>
          <p class="text-grey-50 text-lg">{portfolio.date}</p>
        </div>

        <a href={portfolio.url} class="text-grey-95 font-medium text-lg">
          VIEW PROJECT &gt;
        </a>
      </div>
    </div>
  );
}
