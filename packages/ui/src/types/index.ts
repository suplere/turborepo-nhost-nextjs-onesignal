import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

export interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}
