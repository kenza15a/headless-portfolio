"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 px-6 md:px-16 bg-gray-900 text-white font-sans"
      id="about"
    >
      <motion.div
        style={{ y, opacity }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 relative rounded-l-lg overflow-hidden shadow-xl ">
            <Image
              src="/images/profile.jpg"
              alt="Photo de profil alternative"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <div>
          <h2 className="text-6xl font-bold mb-6">À PROPOS</h2>
          <p className="text-lg leading-relaxed mb-4">
            Développeuse web passionnée par les technologies front-end, je fais
            preuve de persévérance face aux nouveaux défis. Avec plus de 6 ans
            d'expérience dans le développement web, j'ai travaillé avec HTML,
            CSS, JavaScript et WordPress, en entreprise et en freelance.
          </p>
          <p className="text-lg leading-relaxed">
            Mon parcours s'est enrichi d'une formation intensive en React.js et
            Next.js, me permettant de créer des interfaces modernes et
            performantes. Toujours curieuse, j'explore en continu les dernières
            innovations pour offrir des solutions web efficaces, centrées
            utilisateur, et techniquement solides.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
