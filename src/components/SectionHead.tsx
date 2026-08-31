export function SectionHead({
  num,
  title,
  id,
}: {
  num: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="section-head">
      <span className="num">{num}</span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
