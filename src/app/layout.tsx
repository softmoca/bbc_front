import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Providers } from "../redux/provider";
import ToastProvider from "./components/toast.provider";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{OpenSans.className}">
      <body>
        <ToastProvider>
          {" "}
          <Providers>{children}</Providers>
        </ToastProvider>
      </body>
    </html>
  );
}
