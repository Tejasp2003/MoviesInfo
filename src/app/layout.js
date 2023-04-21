import "./globals.css";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Providers from "./Providers";
import SearchBox from "@/Components/SearchBox";
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
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
