import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import { client } from "@/lib/sanity/client";
import { siteSettingsQuery, heroQuery, aboutQuery } from "@/lib/sanity/queries";

export default async function Home() {
  const settings = await client.fetch(siteSettingsQuery);
  const hero = await client.fetch(heroQuery);
  const about = await client.fetch(aboutQuery);

  return (
    <>
      <Navbar settings={settings} />
      <main>
        <Hero hero={hero} />
        <About about={about} settings={settings} />
        <section id="catalogo" className="py-28 text-center bg-areia-50">Catálogo</section>
        <section id="processo" className="py-28 text-center">Processo</section>
        <section id="galeria" className="py-28 text-center bg-areia-50">Galeria</section>
        <section id="videos" className="py-28 text-center">Vídeos</section>
        <section id="depoimentos" className="py-28 text-center bg-areia-50">Depoimentos</section>
        <section id="faq" className="py-28 text-center">FAQ</section>
        <section id="contato" className="py-28 text-center bg-areia-50">Contato</section>
      </main>
    </>
  );
}