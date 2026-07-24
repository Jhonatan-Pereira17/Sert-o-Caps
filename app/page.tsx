import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import Testimonials from "@/components/Testimonial";
import { client } from "@/lib/sanity/client";
import {
  siteSettingsQuery,
  heroQuery,
  aboutQuery,
  categoriesQuery,
  productsQuery,
  processStepsQuery,
  differentialsQuery,
  galleryQuery,
  videosQuery,
  testimonialsQuery,
} from "@/lib/sanity/queries";

export default async function Home() {
  const settings = await client.fetch(siteSettingsQuery);
  const hero = await client.fetch(heroQuery);
  const about = await client.fetch(aboutQuery);
  const categories = await client.fetch(categoriesQuery);
  const products = await client.fetch(productsQuery);
  const steps = await client.fetch(processStepsQuery);
  const differentials = await client.fetch(differentialsQuery);
  const gallery = await client.fetch(galleryQuery);
  const videos = await client.fetch(videosQuery);
  const testimonial = await client.fetch(testimonialsQuery);
  return (
    <>
      <Navbar settings={settings} />
      <main>
        <Hero hero={hero} />
        <About about={about} settings={settings} />
        <Catalog categories={categories} products={products} />
        <Process steps={steps} />
        <Differentials items={differentials} />
        <Gallery imagens={gallery} />
        <Videos videos={videos} />
        <Testimonials items={testimonial} />
        <section id="depoimentos" className="py-28 text-center bg-areia-50">Depoimentos</section>
        <section id="faq" className="py-28 text-center">FAQ</section>
        <section id="contato" className="py-28 text-center bg-areia-50">Contato</section>
      </main>
    </>
  );
}