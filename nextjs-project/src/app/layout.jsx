import Navbar from "@/src/components/Navbar";
import { Poppins } from "next/font/google";
import './globals.css'

export const metadata = {
  title: "Mi tienda con Nextjs",
  description: "Root Layout",
  keywords: 'tienda nextjs'
};

const poppins = Poppins({
  weight:["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
