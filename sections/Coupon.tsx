export interface Props {
  code: string;
  description: string;
}

export default function Coupon({ code, description }: Props) {
  return (
    <div class="flex flex-col items-center justify-center">
      <h2 class="font-sans">{code}</h2>
      <p>{description}</p>
    </div>
  )
}