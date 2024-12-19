
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Mi tienda con Nextjs",
  description: "Root Layout",
  keywords: 'tienda nextjs'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
