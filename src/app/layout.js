import "./globals.css";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Providers from "./Providers";
export const metadata = {
  title: "IMDB Clone",
  description: "IMDB Clone suing NextJs and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
