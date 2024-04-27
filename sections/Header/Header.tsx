import { MenuItem } from "deco-sites/luandecocamp/components/header/MenuItem.tsx";
import { Button } from "deco-sites/luandecocamp/components/header/Button.tsx";

export interface MenuProps {
  label: string;
  url: string;
  active?: boolean;
}

interface Props {
  /**
   * @title Nome que irá aparecer no header
   */
  name: string;
  menu: MenuProps[];
  /**
   * @title Título do botão que irá aparecer no header
   */
  button?: string;
}

export default function Header({ name, menu, button }: Props) {
  return (
    <header class="bg-dark-3">
      <div class="max-container-auto flex flex-row justify-between border-b border-dark-12 h-[119px]">
        <span class="w-[125px] border-r border-dark-12" />

        <a href="/" class="flex">
          <h1 class="font-semibold text-grey-90 text-3xl self-center">
            {name}
          </h1>
        </a>

        <div />

        <nav class="flex items-end">
          <ul class="flex items-center justify-center h-[87px] border border-b-0 border-dark-12 rounded-l-xl rounded-r-xl">
            {menu?.map((item) => <MenuItem key={item.url} {...item} />)}
          </ul>
        </nav>

        <div />

        {button && <Button>{button}</Button>}

        <span class="w-[125px] border-l border-dark-12" />
      </div>
    </header>
  );
}
