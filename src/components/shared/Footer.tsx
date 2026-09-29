import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import NewsletterForm from "@/components/shared/NewsletterForm";
import { footerLinkColumns, legalLinks } from "@/data/home";
import Link from "next/link";

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white font-body text-ink">
      <Container className="pt-16 lg:pt-[69px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:justify-between xl:grid-cols-[minmax(0,500px)_minmax(0,579px)]">
          <div>
            <Logo variant="dark" />
            <p className="mt-6 text-sm leading-5">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <div className="mt-12">
              <NewsletterForm />
            </div>
            <p className="mt-8 max-w-[440px] text-[13px] leading-5">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:pt-[50px] xl:grid-cols-[207px_207px_1fr] xl:gap-x-0"
          >
            {footerLinkColumns.map((column, i) => (
              <ul
                key={i}
                className="flex flex-col gap-[22px] text-sm leading-4"
              >
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#e5e5e5] py-7 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:mt-[89px] lg:pb-11">
          <p>© {COPYRIGHT_YEAR} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
