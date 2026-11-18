import Shot from './Shot.jsx';

export default function PhoneFrame({ src, alt }) {
  return (
    <div className="rounded-[26px] bg-ink p-[5px] shadow-[0_30px_60px_-25px_rgba(28,20,38,0.55)]">
      <div className="overflow-hidden rounded-[21px] bg-paper">
        <Shot src={src} alt={alt} ratio="390 / 844" />
      </div>
    </div>
  );
}
