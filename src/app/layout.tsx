import type { Metadata } from "next";
import "./globals.css";

//const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
//});


export const metadata: Metadata = {
  title: "Portfolio River Alejandro Bonilla Florez",
  description: "mi portafolio para mostrar mis proyectos y habilidades en el desarrollo de software",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}