import { CONTACT } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="וואטסאפ"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.5 2.5.8 3.8.8 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.3c-1.2 0-2.4-.3-3.5-.8l-.5-.3-4.9.9 1-4.7-.3-.5c-.9-1.5-1.4-3.2-1.4-4.9 0-5.3 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7-4.5 10.3-9.8 10.3zm5.3-7.5c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  )
}
