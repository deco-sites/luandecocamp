interface Props {
  children: React.ReactNode;
  styles?: string;
}

export function Box({ children, styles }: Props) {
  return (
    <div class={`w-full rounded-[20px] border border-dark-12 ${styles}`}>
      {children}
    </div>
  );
}
