/** "Learning Progress" card from the Lessons tab design. */
export default function ProgressCard({ value }: { value: number }) {
  return (
    <div className="max-w-[480px] rounded-2xl border border-line bg-white px-5 py-4">
      <p id="learning-progress" className="text-[13px] text-ink">
        Learning Progress
      </p>
      <p className="mt-1 font-heading text-[40px] font-semibold leading-none text-ink">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-labelledby="learning-progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 overflow-hidden rounded-full bg-surface"
      >
        <div
          className="h-full rounded-full bg-lime"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
