export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line px-6 md:px-10 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mute">
        <span>© {new Date().getFullYear()} Aaron — Studio créatif</span>
        <span>Graphisme · Montage · Vidéographie · Community Management</span>
      </div>
    </footer>
  );
}
