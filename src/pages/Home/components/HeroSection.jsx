import homebg from "../../../assets/images/homebg.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      {/* content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <h1 className="text-4xl font-bold text-white">
         
        </h1>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 -z-0"></div>
    </section>
  );
}