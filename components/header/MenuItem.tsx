import { MenuProps } from "deco-sites/luandecocamp/sections/Header/Header.tsx";

export function MenuItem({ label, url, active }: MenuProps) {
  return (
    <li
      class={`h-full flex ${
        active ? "bg-dark-8" : "bg-transparent hover:bg-dark-8"
      } first:rounded-l-xl last:rounded-r-xl border-l border-dark-12 first:border-l-0 transition-all duration-200`}
    >
      <a href={url} class="font-medium text-lg text-gray-100/70 py-8 px-10">
        {label}
      </a>
    </li>
  );
}
