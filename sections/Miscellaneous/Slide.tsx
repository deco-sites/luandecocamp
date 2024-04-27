export interface SlideProps {
  label?: string;
  repeat?: number;
}

export interface Props {
  content?: SlideProps[];
}

export default function Slide({
  content,
}: Props) {
  const slideContent = content?.map(({ label, repeat = 1 }) => {
    return (
      <div class="flex items-center gap-x-10 mx-4 py-4 bg-transparent">
        {Array(repeat).fill(0).map(() => (
          <>
            <span class="text-purple-90 text-lg whitespace-nowrap uppercase">
              {label}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
            >
              <path
                fill="#AFA1F7"
                fill-rule="evenodd"
                d="M37.788 20c.766 0 1.507-.103 2.212-.295a8.403 8.403 0 0 0-1.736-.18H28.37a8.332 8.332 0 0 1-4.447-1.278 8.331 8.331 0 0 1 2.331-4.502l6.323-6.323a8.385 8.385 0 0 0 1.355-1.773c-.48.313-.934.68-1.355 1.1l-6.995 6.996a8.332 8.332 0 0 1-4.048 2.24A8.332 8.332 0 0 1 20 11.154V2.212c0-.766-.103-1.507-.295-2.212-.118.56-.18 1.14-.18 1.736v9.893a8.332 8.332 0 0 1-1.278 4.447 8.332 8.332 0 0 1-4.502-2.331L7.422 7.422a8.38 8.38 0 0 0-1.773-1.355c.313.48.68.934 1.1 1.355l6.996 6.995a8.332 8.332 0 0 1 2.24 4.048A8.333 8.333 0 0 1 11.154 20H2.212c-.766 0-1.507.103-2.212.295.56.118 1.14.18 1.736.18h9.893a8.33 8.33 0 0 1 4.447 1.278 8.333 8.333 0 0 1-2.331 4.502l-6.323 6.323a8.38 8.38 0 0 0-1.355 1.773c.48-.313.934-.68 1.355-1.1l6.995-6.996a8.333 8.333 0 0 1 4.048-2.24A8.334 8.334 0 0 1 20 28.846v8.941c0 .766.103 1.507.295 2.212.118-.56.18-1.141.18-1.736V28.37a8.33 8.33 0 0 1 1.278-4.447 8.332 8.332 0 0 1 4.502 2.331l6.323 6.323a8.383 8.383 0 0 0 1.773 1.355 8.403 8.403 0 0 0-1.1-1.355l-6.996-6.995a8.331 8.331 0 0 1-2.24-4.048A8.331 8.331 0 0 1 28.846 20h8.941Z"
                clip-rule="evenodd"
              />
            </svg>
          </>
        ))}
      </div>
    );
  });
  return (
    <div class="bg-transparent relative w-full overflow-hidden h-12">
      <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-12 border border-dark-12">
        {slideContent}
      </div>
    </div>
  );
}
