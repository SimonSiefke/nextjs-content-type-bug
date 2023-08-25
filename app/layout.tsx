import Link from "next/link.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <Link href="/a">A</Link>
          </li>
          <li>
            <Link href="/b">B</Link>
          </li>
          <li>
            <Link href="/c">C</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
