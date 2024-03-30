import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

export default function Weather({ temperature }: Props) {
  return (
    <div class="flex justify-center items-center">
      <p>Atualmente está fazendo {temperature?.celsius} graus</p>
    </div>
  );
}
