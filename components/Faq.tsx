type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-y border-taupe/40">
      {items.map((item, idx) => (
        <details
          key={item.question}
          className={`group ${
            idx !== items.length - 1 ? "border-b border-taupe/40" : ""
          }`}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-xl leading-snug text-charcoal md:text-2xl">
              {item.question}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="mt-1.5 h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 group-open:rotate-45 md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </summary>
          <p className="pb-6 pr-10 font-sans text-base leading-relaxed text-warmGray md:text-lg">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
