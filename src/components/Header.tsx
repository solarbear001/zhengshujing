import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/80 backdrop-blur-sm">
      <Link to="/" className="font-mono text-xs tracking-[0.3em] text-foreground uppercase">
        SHUJING ZHENG
      </Link>
      <nav className="flex items-center gap-8">
        {["About", "Work", "Blog"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
