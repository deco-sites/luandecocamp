import { SLIDE_CONTENT } from "deco-sites/luandecocamp/sections/Hero.tsx";
import Slide from "deco-sites/luandecocamp/sections/Miscellaneous/Slide.tsx";

interface Props {
  menu: {
    label: string;
    submenu: {
      label: string;
      href: string;
    }[];
  }[];
}

export default function Footer({ menu }: Props) {
  return (
    <footer class="bg-dark-3 pt-20">
      <p class="text-dark-15 font-bold text-9xl text-center pb-8">LUAN LEMOS</p>
      <Slide content={SLIDE_CONTENT} />

      <div class="max-container-auto px-[162px]">
        <div class="border-l border-r border-b border-dark-12 flex flex-row">
          <div class="flex-1 flex flex-col gap-8 p-12">
            <p class="uppercase text-grey-50 font-semibold text-xl">
              A more meaningful home for photography
            </p>

            <div class="flex flex-col gap-2.5">
              <div class="flex flex-row gap-2.5">
                <p class="font-semibold text-white text-5xl">LET'S</p>
                <button class="bg-purple-55 rounded-full px-[50px] py-4 hover:scale-110 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="21"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M6.313.188h14.062a.938.938 0 0 1 .938.937v14.063a.937.937 0 1 1-1.875 0v-11.8l-17.15 17.15a.938.938 0 0 1-1.326-1.326l17.15-17.15h-11.8a.937.937 0 1 1 0-1.874Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p class="font-semibold text-white text-5xl">WORK TOGETHER</p>
            </div>
          </div>

          <div class="border-l border-dark-12 flex flex-col items-center gap-8 p-12">
            <ul class="flex flex-row justify-between gap-14">
              {menu.map((item) => (
                <li class="flex flex-col gap-5">
                  <span class="text-grey-50 font-semibold text-lg">
                    {item.label}
                  </span>
                  <ul class="flex flex-col gap-1.5">
                    {item.submenu.map((subitem) => (
                      <li class="text-grey-95 font-medium text-lg pb-2.5 border-b border-dark-12 w-max">
                        <a href={subitem.href}>{subitem.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="flex justify-between py-10">
          <div class="flex flex-row gap-2.5">
            <a href="/" class="text-grey-50 text-lg">Terms & Conditions</a>
            <hr class="border border-dark-12 h-full" />
            <a href="/" class="text-grey-50 text-lg">Privacy Policy</a>
          </div>

          <p class="text-grey-50 text-lg">
            © 2024 Luan Lemos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
