import GradualSpacing from "@/components/magicui/gradual-spacing";

export function GradualSpacingDemo() {
  return (
    <div className="flex flex-col items-start h-screen pt-12 md:pt-24 px-4 md:px-8">
      <div className="w-full flex justify-start mb-4 -ml-8">
        <GradualSpacing
          className="font-serif text-2xl font-semibold tracking-[-0.1em] text-blue-900 dark:text-blue-900 md:text-3xl md:leading-[4rem]"
          text="A Better Path For More Opportunity"
        />
      </div>

      <div className="w-full flex justify-start mb-2 -ml-8">
        <GradualSpacing
          className="font-serif text-1xl font-semibold tracking-[-0.1em] text-black-500 dark:text-black-600 md:text-3xl md:leading-[4rem]"
          text="Discover your path, seize your potential,"
        />
      </div>
      <div className="w-full flex justify-start mb-2 -ml-8">
        <GradualSpacing
          className="font-serif text-1xl font-semibold tracking-[-0.1em] text-black-500 dark:text-black-600 md:text-3xl md:leading-[4rem]"
          text="and turn your professional aspirations"
        />
      </div>
      <div className="w-full flex justify-start mb-0 -ml-8">
        <GradualSpacing
          className="font-serif text-1xl font-semibold tracking-[-0.1em] text-black-500 dark:text-black-600 md:text-3xl md:leading-[4rem]"
          text="into reality with us."
        />
      </div>
    </div>
  );
}
