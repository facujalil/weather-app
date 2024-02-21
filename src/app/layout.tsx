import { ReactNode } from "react";
import { Raleway } from "next/font/google";

interface Props {
  children: ReactNode;
}

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway-font",
  display: "swap",
});

export const metadata = {
  title: "Weather App",
  description: "Weather App build with Next.js",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={raleway.variable}>
      <head>
        <script
          async
          src="https://kit.fontawesome.com/c8859f7b0c.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
