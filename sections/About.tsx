import { Button } from "deco-sites/luandecocamp/components/header/Button.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Box } from "deco-sites/luandecocamp/components/Box.tsx";
import { useEffect } from "preact/hooks";

interface Props {
  introduction: string;
  contact: {
    email: string;
    phone: string;
  };
  photo: ImageWidget;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  cv: string;
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 class="flex flex-row gap-2.5 font-medium text-grey-80 text-3xl pb-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="39"
        height="40"
        fill="none"
      >
        <path
          fill="#AFA1F7"
          d="m19.5 0 2.758 17.172L39 20l-16.742 2.828L19.5 40l-2.758-17.172L0 20l16.742-2.828L19.5 0Z"
        />
      </svg>
      {children}
    </h3>
  );
}

function Text({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <p id={id} class="text-lg text-grey-70">
      {children}
    </p>
  );
}

export default function About(
  { introduction, contact, photo, socials, cv }: Props,
) {
  return (
    <section class="bg-dark-3">
      <div class="max-container-auto px-[162px] pt-20">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col gap-1">
            <h2 class="font-semibold text-xl text-grey-50">ABOUT</h2>
            <h3 id="title" class="font-semibold text-white text-6xl">
              I AM LUAN
            </h3>
          </div>

          <Button>Know More -&gt;</Button>
        </div>

        <hr class="w-full bg-dark-6 mt-12" />

        <div class="flex flex-row gap-8 py-20">
          <div class="w-1/2">
            <img
              src={photo}
              loading="lazy"
              class="hover:scale-110 transition-all duration-200"
            />
          </div>

          <div class="w-1/2">
            <Box styles="rounded-b-none p-5">
              <Title>Introduction</Title>
              <Text id="introduction">{introduction}</Text>
            </Box>
            <Box styles="rounded-t-none p-5">
              <Title>Contact Information</Title>

              <div class="flex flex-row justify-between">
                <div class="w-1/2 flex flex-col gap-2.5">
                  <p class="font-medium text-lg text-grey-90">Email</p>
                  <p class="text-xl text-grey-70">
                    <a href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </p>
                </div>

                <div class="w-1/2 flex flex-col gap-2.5">
                  <p class="font-medium text-lg text-grey-90">Phone Number</p>
                  <p class="text-xl text-grey-70">
                    <a href={`tel:${contact.phone}`}>
                      {contact.phone}
                    </a>
                  </p>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
