interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return (
    <button class="bg-dark-12 font-medium text-lg text-white px-6 py-4 rounded-xl h-max self-center hover:bg-dark-20 transition-all duration-200">
      {children}
    </button>
  );
}
