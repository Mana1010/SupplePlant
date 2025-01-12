import React from "react";
import leafLogo from "../../public/assets/web-logo.png";
import Image from "next/image";
function Logo({
  circleSize,
  leafSize,
  className,
}: {
  circleSize: number;
  leafSize: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
      className={`rounded-full flex items-center justify-center p-1 bg-baseColor ${className}`}
    >
      <Image
        src={leafLogo}
        alt="leaf-logo"
        width={leafSize}
        height={leafSize}
        priority
      />
    </div>
  );
}

export default Logo;
