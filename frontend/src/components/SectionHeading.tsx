interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
}

export default function SectionHeading({
  number,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold tracking-[0.22em] text-sky-400">
          {number}
        </span>
        <span className="h-px w-10 bg-sky-400/70" />
        <span className="text-base font-bold uppercase tracking-[0.24em] text-sky-400 md:text-lg">
          {label}
        </span>
      </div>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
