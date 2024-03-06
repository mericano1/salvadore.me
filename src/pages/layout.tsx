import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
			  <link rel='icon' href='/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
		  </Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
