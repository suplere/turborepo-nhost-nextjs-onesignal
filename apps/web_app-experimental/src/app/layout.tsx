import "./globals.css";
import "ui/styles.css";
import { Inter } from "@next/font/google";
import { Providers } from "./Providers";

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log("Root layout");
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>{children}</Providers>
        <div id="toast" className="" />
      </body>
    </html>
  );
}
