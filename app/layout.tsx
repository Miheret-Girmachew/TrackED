// app/layout.tsx
// import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
      
        <main className="flex-grow">{children}</main>
       =
      </body>
    </html>
  );
}
