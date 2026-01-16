'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SplashScreen from '../../components/SplashScreen';

export default function SplashScreenPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show splash screen for 3.5 seconds (matching the animation duration)
    const timer = setTimeout(() => {
      setFadeOut(true);
      // After fade out animation (0.5 second), redirect to home
      setTimeout(() => {
        // Set the session storage to indicate splash screen was seen
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('hasSeenSplash', 'true');
        }
        router.push('/home');
      }, 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return <SplashScreen fadeOut={fadeOut} />;
}