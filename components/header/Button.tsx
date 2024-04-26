export function Button({ title }: { title: string }) {
  return (
    <button class="bg-dark-12 font-medium text-lg text-white px-6 py-4 rounded-xl h-max self-center hover:bg-dark-20 transition-all duration-200">
      {title}
    </button>
  );
}
