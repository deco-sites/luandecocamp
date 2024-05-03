import { Button } from "deco-sites/luandecocamp/components/header/Button.tsx";
import { Box } from "deco-sites/luandecocamp/components/Box.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  description: string;
  highlights: string[];
  image: ImageWidget;
}

export default function Services({ description, highlights, image }: Props) {
  return (
    <section class="bg-dark-3">
      <div class="max-container-auto lg:px-[162px] px-4 pt-10 lg:pt-20">
        <div class="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-dark-12">
          <div class="flex flex-col gap-1">
            <h3 class="text-grey-50 font-semibold text-xl">SERVICES</h3>
            <h4 class="text-white font-semibold text-4xl lg:text-6xl self-end">
              MY PHOTOGRAPHY SERVICES
            </h4>
          </div>

          <Button styles="!self-end pt-4">View All Services -&gt;</Button>
        </div>

        <div class="flex flex-col lg:flex-row gap-12 items-center justify-between pt-10 lg:pt-20">
          <div class="lg:w-1/2 gap-12">
            <h3 class="text-grey-50 font-semibold text-5xl">Events</h3>
            <p class="text-grey-50 text-lg pt-5">
              {description}
            </p>

            <div class="pt-6 lg:pt-12 flex flex-col">
              <h3 class="text-grey-80 font-semibold text-lg pt-6 pb-4">
                Services Highlights
              </h3>

              <div class="flex flex-col gap-2.5 items-center">
                {highlights.map((highlight) => (
                  <Box styles="flex flex-row gap-3 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="none"
                      class="hidden lg:block"
                    >
                      <path
                        fill="#AFA1F7"
                        fill-rule="evenodd"
                        d="M37.788 20c.766 0 1.507-.103 2.212-.295a8.403 8.403 0 0 0-1.736-.18H28.37a8.332 8.332 0 0 1-4.447-1.278 8.331 8.331 0 0 1 2.331-4.502l6.323-6.323a8.385 8.385 0 0 0 1.355-1.773c-.48.313-.934.68-1.355 1.1l-6.995 6.996a8.332 8.332 0 0 1-4.048 2.24A8.332 8.332 0 0 1 20 11.154V2.212c0-.766-.103-1.507-.295-2.212-.118.56-.18 1.14-.18 1.736v9.893a8.332 8.332 0 0 1-1.278 4.447 8.332 8.332 0 0 1-4.502-2.331L7.422 7.422a8.38 8.38 0 0 0-1.773-1.355c.313.48.68.934 1.1 1.355l6.996 6.995a8.332 8.332 0 0 1 2.24 4.048A8.333 8.333 0 0 1 11.154 20H2.212c-.766 0-1.507.103-2.212.295.56.118 1.14.18 1.736.18h9.893a8.33 8.33 0 0 1 4.447 1.278 8.333 8.333 0 0 1-2.331 4.502l-6.323 6.323a8.38 8.38 0 0 0-1.355 1.773c.48-.313.934-.68 1.355-1.1l6.995-6.996a8.333 8.333 0 0 1 4.048-2.24A8.334 8.334 0 0 1 20 28.846v8.941c0 .766.103 1.507.295 2.212.118-.56.18-1.141.18-1.736V28.37a8.33 8.33 0 0 1 1.278-4.447 8.332 8.332 0 0 1 4.502 2.331l6.323 6.323a8.383 8.383 0 0 0 1.773 1.355 8.403 8.403 0 0 0-1.1-1.355l-6.996-6.995a8.331 8.331 0 0 1-2.24-4.048A8.331 8.331 0 0 1 28.846 20h8.941Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p class="text-grey-70 lg:text-lg">
                      {highlight}
                    </p>
                  </Box>
                ))}
              </div>
            </div>
          </div>

          <div class="lg:w-1/2">
            <img
              src={image}
              loading="lazy"
              class="hover:scale-110 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
