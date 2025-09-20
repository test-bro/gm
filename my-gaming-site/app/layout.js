export const metadata = {
  title: "My Gaming Site",
  description: "Play fun games online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="logo">🎮 My Gaming Site</div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">Games</a>
            <a href="#">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
