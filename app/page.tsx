import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="h-screen flex items-center justify-center bg-couro-950">
          <h1 className="font-display text-5xl text-osso">Hero</h1>
        </section>
        <section id="empresa" className="py-28 text-center">Sobre a empresa</section>
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