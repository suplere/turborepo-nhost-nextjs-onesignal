import Link from "next/link";
import React, { DetailedHTMLProps, HTMLProps } from "react";
export interface AuthWrapperProps
  extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  logo?: string;
  mainText: string;
  secondaryText?: string;
  secondaryLink?: string;
}
function Wrapper({
  children,
  title,
  logo,
  mainText,
  secondaryText,
  secondaryLink,
}: AuthWrapperProps) {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          {logo && (
            <img
              className="mx-auto h-20 w-auto"
              src={logo}
              alt="Your Company"
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
  );
}

export default Wrapper;
