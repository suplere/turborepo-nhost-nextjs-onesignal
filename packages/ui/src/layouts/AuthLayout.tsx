import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { DetailedHTMLProps, HTMLProps, useEffect } from "react";

export interface AuthLayoutProps
  extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  logo?: string;
  mainText: string;
  secondaryText?: string;
  secondaryLink?: string;
}

function AuthLayout({
  children,
  title,
  logo,
  mainText,
  secondaryText,
  secondaryLink,
}: AuthLayoutProps) {
  useEffect(() => {
    document.body.classList.add("h-full");
    document.body.classList.add("bg-gray-50");
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {logo && (
              <Image
                className="mx-auto h-20 w-auto"
                src={logo}
                alt="Your Company"
                width={80}
                height={80}
              />
            )}

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {mainText}
            </h2>
            {secondaryText &&
              (secondaryLink ? (
                <p className="mt-2 text-center text-sm text-gray-600">
                  Or{" "}
                  <Link
                    href={secondaryLink}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {secondaryText}
                  </Link>
                </p>
              ) : (
                <p className="mt-2 text-center text-sm text-gray-600">
                  Or{" "}
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    {secondaryText}
                  </span>
                </p>
              ))}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
