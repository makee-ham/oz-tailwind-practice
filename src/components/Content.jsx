export default function Content({ content }) {
  return (
    <div className="content-container flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] round-[10px] mb-[3px]"
      />
      <span className="text-xs font-[#d7fa00] border border-[#d7fa00] py-1 px-[5px] rounded-[3px]">
        모집중
      </span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs font-[rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
