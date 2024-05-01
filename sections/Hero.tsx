import Slide from "deco-sites/luandecocamp/sections/Miscellaneous/Slide.tsx";

export const SLIDE_CONTENT = [
  { label: "Event Photography", repeat: 1 },
  { label: "Comercial Photography", repeat: 1 },
  { label: "Product Photography", repeat: 1 },
  { label: "Wedding Photography", repeat: 1 },
  { label: "Landscape Photography", repeat: 1 },
  { label: "Branding Photography", repeat: 1 },
  { label: "Portrait Photography", repeat: 1 },
];

export default function Hero() {
  return (
    <div class="bg-dark-3">
      <div class="max-container-auto flex flex-col">
        <div class="flex flex-row justify-center gap-8">
          <h2 class="max-w-[400px] self-center">
            <p class="text-grey-40 font-medium text-xl">
              STUNNING PHOTOGRAPHY BY <br />
              <span class="text-white font-semibold text-7xl">
                LUAN LEMOS
              </span>
            </p>
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="346"
            height="328"
            fill="none"
          >
            <path
              fill="#0E0E10"
              stroke="#1C1C21"
              d="M173 164.5c95.102 0 172.23 76.962 172.499 172h-19.76c-.269-84.126-68.55-152.24-152.739-152.24-84.19 0-152.47 68.114-152.74 152.24H.5c.27-95.038 77.398-172 172.5-172ZM.5-8.5h19.76C20.53 75.626 88.81 143.74 173 143.74c84.189 0 152.47-68.114 152.739-152.24h19.76c-.269 95.04-77.397 172-172.499 172C77.898 163.5.77 86.54.5-8.5ZM173 121.98c-72.171 0-130.71-58.372-130.98-130.48h19.761c.27 61.195 49.961 110.72 111.219 110.72 61.258 0 110.95-49.525 111.219-110.72h19.76C303.71 63.608 245.172 121.98 173 121.98Zm0-41.52c-49.241 0-89.19-39.783-89.459-88.96h19.761c.269 38.264 31.371 69.2 69.698 69.2s69.429-30.936 69.698-69.2h19.761C262.19 40.677 222.241 80.46 173 80.46Zm0 125.56c72.172 0 130.71 58.371 130.979 130.48h-19.76C283.95 275.305 234.258 225.78 173 225.78c-61.258 0-110.95 49.525-111.219 110.72h-19.76c.27-72.109 58.808-130.48 130.979-130.48Zm0 41.52c49.241 0 89.19 39.782 89.459 88.96h-19.761c-.269-38.263-31.371-69.2-69.698-69.2s-69.429 30.937-69.698 69.2h-19.76c.269-49.178 40.217-88.96 89.458-88.96Z"
            />
          </svg>

          <div class="flex flex-col gap-2.5 self-center">
            <div class="flex flex-row gap-3">
              <p class="font-semibold text-white text-6xl">LET'S</p>
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

            <p class="text-white font-semibold text-6xl">WORK TOGETHER</p>
          </div>
        </div>

        <Slide content={SLIDE_CONTENT} />
      </div>
    </div>
  );
}
