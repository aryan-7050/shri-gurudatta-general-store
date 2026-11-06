import { useState } from 'react';
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Store,
  X,
} from 'lucide-react';

// Store images from src/images
import photo1 from './images/IMG_5337.JPG.jpeg';
import photo2 from './images/IMG_5338.JPG.jpeg';
import photo3 from './images/IMG_5339.JPG.jpeg';
import photo4 from './images/IMG_5340.JPG.jpeg';
import photo5 from './images/IMG_5341.JPG.jpeg';
import photo6 from './images/IMG_5342.JPG.jpeg';

const STORE = {
  nameMarathi: 'जय श्री दत्तगुरु किराणा स्टोअर्स',
  name: 'Jai Shri Dattaguru Kirana Stores',
  owner: 'Sharad Patil',
  phone: '9421177517',
  whatsappNumber: '919421177517',
  address: 'AT post sadoli khalasa, are road sadoli khalasa',
  hours: 'Open daily, 8:00 AM to 10:00 PM',
};

const PHOTOS = [
  {
    id: 1,
    src: photo1,
    alt: 'Jai Shri Dattaguru Kirana Stores storefront',
  },
  {
    id: 2,
    src: photo2,
    alt: 'Inside the store with snacks hanging on the wall',
  },
  {
    id: 3,
    src: photo3,
    alt: 'Shelves stocked with grocery items',
  },
  {
    id: 4,
    src: photo4,
    alt: 'Store products and daily essentials',
  },
  {
    id: 5,
    src: photo5,
    alt: 'More products available at the store',
  },
  {
    id: 6,
    src: photo6,
    alt: 'Additional view of Jai Shri Dattaguru Kirana Stores',
  },
];

const CATEGORIES = [
  'Daily groceries',
  'Snacks and chips',
  'Spices and masala',
  'Rice, dal and flour',
  'Biscuits and namkeen',
  'Pooja items',
];

// WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.347-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function App() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const whatsappHref = `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I found your store online and would like to know more.'
  )}`;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased">

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white">
              <Store className="h-5 w-5" />
            </span>

            <span className="text-sm font-semibold leading-tight text-stone-900 sm:text-base">
              {STORE.name}
            </span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp us</span>
            <span className="sm:hidden">Chat</span>
          </a>

        </div>
      </header>

      <main id="top">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-stone-900">

          <img
            src={photo1}
            alt="Jai Shri Dattaguru Kirana Stores"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />

          <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:pb-24">

            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-200">
              <Clock className="h-3.5 w-3.5" />
              {STORE.hours}
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your trusted neighbourhood general store
            </h1>

            <p className="mt-2 text-lg text-amber-100 sm:text-xl">
              {STORE.nameMarathi}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-200">
              Everyday groceries, snacks, spices and pooja items, all under one roof. Visit us or send
              a WhatsApp message and we will get back to you quickly.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message on WhatsApp
              </a>

              <a
                href={`tel:+${STORE.whatsappNumber}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call now
              </a>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                About the store
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
                Stocked for every household, every day
              </h2>

              <p className="mt-4 leading-relaxed text-stone-600">
                From daily staples to evening snacks, our shelves carry the everyday items your family
                needs. Run by {STORE.owner}, the store is known for friendly service
                and a wide range of brands.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CATEGORIES.map((category) => (
                  <li
                    key={category}
                    className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {category}
                  </li>
                ))}
              </ul>

            </div>

            {/* About Images */}
            <div className="grid grid-cols-2 gap-4">

              {PHOTOS.slice(1, 3).map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActivePhoto(PHOTOS.findIndex((p) => p.id === photo.id))}
                  className={`group relative overflow-hidden rounded-2xl bg-stone-200 shadow-sm ${
                    photo.id === 3 ? 'mt-10' : ''
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-6xl px-5">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                  Gallery
                </p>

                <h2 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
                  Take a look inside
                </h2>
              </div>

              <p className="max-w-md text-stone-600">
                Tap any photo to view it larger. Every shelf is stocked with brands you already know.
              </p>

            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

              {PHOTOS.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  className={`group relative overflow-hidden rounded-2xl bg-stone-200 ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                      index === 0 ? 'min-h-[320px] md:min-h-[420px]' : 'aspect-square'
                    }`}
                  />

                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-stone-900/70 to-transparent p-4 text-sm font-medium text-white transition duration-300 group-hover:translate-y-0">
                    View photo
                  </span>

                </button>
              ))}

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">

          <div className="overflow-hidden rounded-3xl bg-emerald-800 shadow-xl">

            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
                  Contact us
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Visit the store or reach out directly
                </h2>

                <p className="mt-4 leading-relaxed text-emerald-100">
                  Need something specific? Message us on WhatsApp or give us a call and we will confirm
                  availability before you come.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-300 active:scale-95"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={`tel:+${STORE.whatsappNumber}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-95"
                  >
                    <Phone className="h-5 w-5" />
                    Call {STORE.owner}
                  </a>

                </div>
              </div>

              <ul className="space-y-4">

                {/* Address */}
                <li className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 text-emerald-950">
                    <MapPin className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-amber-200">
                      Address
                    </p>
                    <p className="mt-1 text-white">
                      {STORE.address}
                    </p>
                  </div>

                </li>

                {/* Phone */}
                <li className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 text-emerald-950">
                    <Phone className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-amber-200">
                      Phone
                    </p>

                    <a
                      href={`tel:+${STORE.whatsappNumber}`}
                      className="mt-1 block text-white hover:underline"
                    >
                      +91 {STORE.phone.slice(0, 5)} {STORE.phone.slice(5)}
                    </a>

                    <p className="mt-1 text-sm text-emerald-100">
                      {STORE.owner}
                    </p>
                  </div>

                </li>

                {/* Opening Hours */}
                <li className="flex gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 text-emerald-950">
                    <Clock className="h-5 w-5" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-amber-200">
                      Opening hours
                    </p>
                    <p className="mt-1 text-white">
                      {STORE.hours}
                    </p>
                  </div>

                </li>

              </ul>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-sm text-stone-500 sm:flex-row sm:text-left">

          <p className="font-semibold text-stone-800">
            {STORE.name}
          </p>

          <p>
            Owner {STORE.owner} · +91 {STORE.phone.slice(0, 5)} {STORE.phone.slice(5)}
          </p>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition hover:scale-110 hover:bg-emerald-400 active:scale-95"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Image Preview Modal */}
      {activePhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-4"
          onClick={() => setActivePhoto(null)}
        >

          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={PHOTOS[activePhoto].src}
            alt={PHOTOS[activePhoto].alt}
            className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </div>
  );
}

export default App;
