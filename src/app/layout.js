import "./globals.css";

export const metadata = {
  title: "Twitter",
  description: "Twitter Clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body >{children}</body>
    </html>
  );
}
