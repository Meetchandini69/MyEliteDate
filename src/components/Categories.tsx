import { User } from "lucide-react";

const categories = [
  {
    name: "College Girls",
    description: "Fresh-faced, energetic, and charming companions in their early 20s. Popular among young professionals.",
    count: "25+ Profiles",
    img: "/images/college-girls.webp",
  },
  {
    name: "Housewife Escorts",
    description: "Mature, sophisticated, and sensual. Experienced companions who know exactly what you need.",
    count: "18+ Profiles",
    img: "/images/housewife.webp",
  },
  {
    name: "Airhostess / Model",
    description: "Glamorous, elite companions with impeccable grooming and conversational sophistication.",
    count: "12+ Profiles",
    img: "/images/airhostess-model.webp",
  },
  {
    name: "Russian / Foreigner",
    description: "International companions visiting or residing in Chennai for a truly exotic experience.",
    count: "8+ Profiles",
    img: "/images/russian-foreigner.webp",
  },
  {
    name: "Celebrity Look-alikes",
    description: "Stunning companions who bear striking resemblances to your favorite celebrities.",
    count: "10+ Profiles",
    img: "/images/celebrity-lookalikes.webp",
  },
  {
    name: "Corporate Escorts",
    description: "Professional, well-educated companions ideal for business events, dinners, and networking.",
    count: "15+ Profiles",
    img: "/images/corporate-escorts.webp",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-pink-100">
            <User size={14} />
            Escort Categories
          </div>
          <h2
            id="categories-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5"
          >
            Browse Our{" "}
            <span className="text-gradient">Escort Categories</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Chennai call girls agency offers a diverse range of companion categories to match
            every taste, preference, and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map(({ name, description, count, img }) => (
            <article
              key={name}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:shadow-pink-200/40 border border-gray-100 hover:border-pink-200 transition-all duration-400 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={img}
                  alt={`${name} escorts in Chennai`}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {count}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 font-bold text-lg mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
                <a
                  href="tel:+917603989670"
                  className="w-full flex items-center justify-center gap-2 gradient-pink text-white font-semibold py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                >
                  Book This Category
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
