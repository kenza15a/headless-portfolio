"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-12" id="about">
      <h2 className="text-3xl font-bold mb-10 text-blue-600 text-center">
        Qui suis-je ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center col-span-3 md:col-span-1"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Photo de profil"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Texte */}
        <div className="col-span-1 md:col-span-2 items-center">
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Développeuse web passionnée par les technologies front-end, je fais
            preuve de persévérance face aux nouveaux défis. Avec plus de 6 ans
            d’expérience dans le développement web, j’ai travaillé avec HTML,
            CSS, JavaScript et WordPress, aussi bien en entreprise qu’en
            freelance.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Mon parcours s’est enrichi d’une formation intensive en React.js et
            Next.js, me permettant de créer des interfaces modernes et
            performantes. Toujours curieuse, j’explore en continu les dernières
            innovations pour offrir des solutions web efficaces, centrées
            utilisateur, et techniquement solides.
          </p>
        </div>
      </div>
    </section>
  );
}
