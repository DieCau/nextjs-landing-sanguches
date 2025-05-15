import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sanguche Argento",
  description: "Sanguches de Milanesa, Lomitos y Hamburguesas",
   icons: {
    icon: "/favicon.png", // o .png si es el caso
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
