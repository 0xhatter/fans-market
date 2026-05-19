import "./globals.css";

export const metadata = {
  title: "Fans Market — Journey 1",
  description: "fans.market — Netflix-styled sports prediction market prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
