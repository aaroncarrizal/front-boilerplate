export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 border-t border-border">
      <div className="container flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Boilerplate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}