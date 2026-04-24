import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import AboutSection from "./components/sections/AboutSection";
import DifferentiatorsSection from "./components/sections/DifferentiatorsSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import HeroSection from "./components/sections/HeroSection";
import ProductShowcaseSection from "./components/sections/ProductShowcaseSection";
import ServicesSection from "./components/sections/ServicesSection";
import TechStackSection from "./components/sections/TechStackSection";
import { siteContent } from "./data/siteContent";

export default function App() {
  const {
    navigation,
    hero,
    about,
    services,
    products,
    techStack,
    differentiators,
    finalCta,
    footer,
  } = siteContent;

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader brand={navigation.brand} links={navigation.links} cta={navigation.cta} />
      <main className="pt-16">
        <HeroSection content={hero} />
        <AboutSection content={about} />
        <ServicesSection content={services} />
        {products.map((product) => (
          <ProductShowcaseSection key={product.id} product={product} />
        ))}
        <TechStackSection content={techStack} />
        <DifferentiatorsSection content={differentiators} />
        <FinalCtaSection content={finalCta} />
      </main>
      <SiteFooter content={footer} />
    </div>
  );
}
