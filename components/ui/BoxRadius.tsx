interface Props {
  children: React.ReactNode;
}

export function BoxRadius({ children }: Props) {
  return (
    <div class="bg-dark-3 rounded-full p-2.5">
      <div class="flex flex-row gap-4">
        {children}
      </div>
    </div>
  );
}
