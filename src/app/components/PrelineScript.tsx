'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    const runPreline = () => {
      if (typeof window !== 'undefined' && window.HSStaticMethods) {

        window.HSStaticMethods.autoInit(); 
      }
    };
    
    setTimeout(runPreline, 300); 
  }, [path]);

  return null;
}