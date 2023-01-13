import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({
  children,
  querySelector,
}: {
  children: ReactNode;
  querySelector: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        children,
        document.querySelector(querySelector) as HTMLDivElement
      )
    : null;
};
