"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ResponsiveImageProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  lightSrc,
  darkSrc,
  alt,
  className,
}) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState(resolvedTheme);

  useEffect(() => {
    setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <Image
      src={theme === "dark" ? darkSrc : lightSrc}
      alt={alt}
      width={500}
      height={200}
      className={className}
    />
  );
};

export default ResponsiveImage;
