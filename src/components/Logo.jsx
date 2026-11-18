export default function Logo({ light = false }) {
  return (
    <span className={`flex items-center gap-2.5 ${light ? 'text-ivory' : 'text-ink'}`}>
      <span
        aria-hidden="true"
        className={`grid h-8 w-8 place-items-center rounded-full font-serif text-[1.05rem] italic ${
          light ? 'bg-ivory text-ink' : 'bg-ink text-ivory'
        }`}
      >
        B<span className="-ml-px mt-2 h-1 w-1 rounded-full bg-violet" />
      </span>
      <span className="text-[0.8rem] font-semibold tracking-[0.22em]">BETTY EMPIRE</span>
    </span>
  );
}
