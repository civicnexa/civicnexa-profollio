import type { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "CivicNexa",
  description: "A Software Solution Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider> 
      </body>
    </html>
  );
}
