import { Link } from "react-router-dom";
import { services } from "./data";

const ServicesSection = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-neutral-600">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              What we build
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
            Software, cloud, and automation, powered by DigiConnect.
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
            A snapshot of the technical services behind the ecosystem. See
            the full breakdown on the DigiConnect site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl border border-neutral-200 bg-neutral-200 overflow-hidden">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-7 md:p-8">
              <h3 className="text-base md:text-lg font-semibold tracking-tight text-neutral-900 mb-2">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/digiconnect"
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:border-neutral-400 transition-colors duration-300"
        >
          Explore DigiConnect
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
