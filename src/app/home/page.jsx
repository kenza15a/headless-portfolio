"use client";
import AboutSection from "@/components/About";
import Hero from "@/components/Hero";
import MiniPortfolioSection from "@/components/MiniPortfolio";
import TechnologiesSection from "@/components/Technologies";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import MiniBlogSection from "@/components/MiniBlogSection";

const HomePage = () => {
  return (
    <main>
      <>
        <Hero />
        <AboutSection />
        <TechnologiesSection />
        <MiniPortfolioSection />
        <MiniBlogSection />
      </>
    </main>
  );
};

export default HomePage;
