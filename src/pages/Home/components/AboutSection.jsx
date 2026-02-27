import aboutpic from "../../../assets/images/aboutpic.png";
import Button from "../../../components/common/Button";

export default function AboutSection() {
    return (
        <div className="bg-[rgba(248,248,248,1)]">
            <div className="container mx-auto px-12 py-12  grid grid-cols-1 lg:grid-cols-2 gap-[-10px] place-items-center my-20">
                <img src={aboutpic} alt="clothespic" className="w-[300px] h-[300px]" />
                <div className="h-80 w-[300px]" dir="rtl">
                    <h2 className="my-6 lg:mb-6 font-bold text-xl ">من نحن</h2>
                    <p className="max-w-md mb-6 [word-spacing:3px]">
                        سيورتفاي يقدم لكم تجربة تسوق رياضية متكاملة تجمع بين الأداء الاحترافي، الجودة العالية، والتصميم العصري — لنكون شريكك الحقيقي في كل تمرين، كل سباق، وكل تحدٍ جديد تخوضه.
                    </p>
                    <p className=" mb-6 [word-spacing:3px]"> منتجاتنا ليست مجرد ملابس أو معدات… بل أدوات أداء مصممة بعناية لتمنحك الثقة، الثبات، والراحة المطلقة أثناء الحركة.</p>
                    <Button buttonName="تعرف علينا أكثر  " />
                </div>
            </div>
        </div>
    )
}
