
// Este archivo proporciona tipos para componentes compatibles con Next.js
import React from 'react';

// Simula los tipos de Link de Next.js
declare namespace NextCompat {
  interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    className?: string;
    children: React.ReactNode;
  }
  
  // Simula el componente de imagen de Next.js
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    sizes?: string;
    quality?: number;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    className?: string;
    style?: React.CSSProperties;
  }
}

export = NextCompat;
