"use client";

import { LandingHeader } from "@/components/LandingHeader";
import { LandingHero } from "@/components/LandingHero";
import { LandingApps } from "@/components/LandingApps";
import { LandingCTA } from "@/components/LandingCTA";
import { LandingFooter } from "@/components/LandingFooter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <LandingHero />
      <LandingApps />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
