interface Question {
  question: string;
  /** @format html */
  answer: string;
}

interface Props {
  question: Question[];
}

function Question({ question, answer }: Question) {
  return (
    <details class="collapse collapse-arrow join-item border-t border-dark-12 p-3 lg:p-7">
      <summary class="collapse-title text-grey-70 font-semibold text-xl">
        {question}
      </summary>
      <div
        class="collapse-content text-grey-50 text-lg"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

export default function FAQ({ question }: Props) {
  return (
    <section class="bg-dark-3">
      <div class="max-container-auto lg:px-[162px] px-4 lg:pt-20 pt-10">
        <div class="flex flex-col lg:flex-row justify-between items-center pb-12 border-b border-dark-12">
          <div class="flex flex-col gap-1">
            <h3 class="text-grey-50 font-semibold text-xl">FAQ'S</h3>
            <h4 class="text-white font-semibold text-4xl lg:text-6xl self-end">
              FREQUENTLY ASKED QUESTIONS
            </h4>
          </div>
        </div>

        <div class="join join-vertical w-full">
          {question.map((item) => <Question {...item} />)}
        </div>
      </div>
    </section>
  );
}
