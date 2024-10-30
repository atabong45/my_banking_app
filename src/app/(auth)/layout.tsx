
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          auth sidebar
          {children}
      </main>
    );
  }
  