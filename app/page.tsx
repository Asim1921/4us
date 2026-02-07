"use client";

import Image from "next/image";
import { GridBackground } from "@/components/GridBackground";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <GridBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 px-4 py-8 sm:py-12 md:py-16 w-full max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center w-full px-4">
          <Image
            src="/logo.jpeg"
            alt="4Us App Logo"
            width={300}
            height={300}
            className="w-auto h-auto max-w-[200px] max-h-[200px] sm:max-w-[250px] sm:max-h-[250px] md:max-w-[300px] md:max-h-[300px] object-contain"
            priority
          />
        </div>

        {/* Rewards Profile Section */}
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full">
          <div className="text-center max-w-lg px-4 sm:px-6 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 px-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent leading-tight">
              Activate Your 4Us Rewards Profile
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
              Complete this quick form to activate your account and start earning for your impact in the community. 
              <span className="text-cyan-400 font-semibold"> Takes less than 2 minutes.</span>
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBa9PWPCbkDmD79bHIPwvbonIc2Nf3utxyPxv1kADFT2dJWQ/viewform?usp=share_link&ouid=102687078385583885082"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm transition-all active:scale-95 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 text-white font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <svg
              width="20"
              height="20"
              className="sm:w-[22px] sm:h-[22px] flex-shrink-0 text-cyan-400 group-hover:text-cyan-300 transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                fill="currentColor"
              />
            </svg>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center">
              Activate Rewards Profile
            </span>
          </a>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4">
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/pk/app/4us-app/id6740416497"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm transition-all active:scale-95 hover:scale-105 hover:border-white/60 hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px] justify-center"
          >
            {/* Apple Logo SVG */}
            <svg
              width="20"
              height="20"
              className="sm:w-6 sm:h-6 flex-shrink-0 text-white transition-colors group-hover:text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.08-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                fill="currentColor"
              />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] sm:text-[10px] leading-tight text-gray-300 group-hover:text-white transition-colors">Download on the</span>
              <span className="text-sm sm:text-base font-semibold leading-tight text-white group-hover:text-cyan-400 transition-colors">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.forus.forus_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm transition-all active:scale-95 hover:scale-105 hover:border-white/60 hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px] justify-center"
          >
            {/* Google Play Logo SVG */}
            <svg
              width="20"
              height="20"
              className="sm:w-6 sm:h-6 flex-shrink-0 text-white transition-colors group-hover:text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm-4.95-4.95l-2.27-2.27L6.05 2.66l10.76 6.11-2.27 2.27z"
                fill="currentColor"
              />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-[9px] sm:text-[10px] leading-tight text-gray-300 group-hover:text-white transition-colors">GET IT ON</span>
              <span className="text-sm sm:text-base font-semibold leading-tight text-white group-hover:text-orange-400 transition-colors">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

