const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-white/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[var(--text-muted)]">
          © {new Date().getFullYear()} @joshlorielsoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
