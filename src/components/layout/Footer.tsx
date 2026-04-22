import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">© {year} Yeider Catari</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nvbezz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yeider-catari-35b908363/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
