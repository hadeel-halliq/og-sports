export default function StatisticCard({ img, number, discraption}) {
  return (
    <div className="flex flex-col gap-4 items-center" dir="rtl">
        <img src={img} className="w-10"/>
        <p className="font-bold text-2xl">{number}</p>
        <p className="text-[rgba(109,109,109,1)]">{discraption}</p>
    </div>
  )
}
