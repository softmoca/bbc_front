"use client";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Providers } from "../redux/provider";
import ToastProvider from "../components/toast.provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store/store";
import Footbar from "../components/footbar";

const OpenSans = Open_Sans({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="{OpenSans.className}">
      <body className="w-1/3">
        <ToastProvider>
          {" "}
          <Providers>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Providers>
        </ToastProvider>
        <Footbar />
      </body>
    </html>
  );
}
