import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', number: '', service: '', description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
    setStatus(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS is not configured. Set the required VITE_EMAILJS_* environment variables.');
      setStatus({ type: 'error', message: 'The contact form is not configured. Please try again later.' });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        { ...form, reply_to: form.email },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus({ type: 'success', message: 'Submitted successfully!' });
      setForm({ name: '', email: '', number: '', service: '', description: '' });
    } catch (err) {
      console.error('EmailJS contact form submission failed:', err);
      setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');
        .contact-heading { font-family: 'Playfair Display', serif; }
        .contact-field { transition: border-color .2s ease, background-color .2s ease, box-shadow .2s ease; }
        .contact-field:focus { outline: none; border-color: rgba(251,191,36,.75); background: rgba(255,255,255,.09); box-shadow: 0 0 0 4px rgba(251,191,36,.08); }
        select.contact-field option { background: #0f172a; color: white; }
      `}</style>

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-rose-500/[0.06] blur-3xl" />

      <section className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:pr-4">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            Start a project
          </p>
          <h1 className="contact-heading text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl">
            Let&apos;s make<br />
            <span className="text-amber-400">great work.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-white/55">
            Have an idea, a brand to build, or a project that needs a fresh perspective?
            Tell me what you have in mind.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:baispratham81@gmail.com" className="group flex items-center gap-4 text-sm text-white/65 transition-colors hover:text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-400 transition-colors group-hover:border-amber-400/40">
                <Mail size={18} />
              </span>
              baispratham81@gmail.com
            </a>
            <a href="tel:+919665317886" className="group flex items-center gap-4 text-sm text-white/65 transition-colors hover:text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-400 transition-colors group-hover:border-amber-400/40">
                <Phone size={18} />
              </span>
              +91 96653 17886
            </a>
            <div className="flex items-center gap-4 text-sm text-white/65">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-400">
                <MapPin size={18} />
              </span>
              Gondia, Maharashtra
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8"
        >
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Project inquiry</p>
              <h2 className="contact-heading mt-2 text-2xl font-bold text-white sm:text-3xl">Tell me about it</h2>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400">
              <ArrowUpRight size={20} />
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              Name
              <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your name" required
                className="contact-field w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm normal-case tracking-normal text-white placeholder:text-white/25" />
            </label>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              Email
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="you@example.com" required
                className="contact-field w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm normal-case tracking-normal text-white placeholder:text-white/25" />
            </label>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              Phone
              <input name="number" value={form.number} onChange={handleChange} type="tel" placeholder="+91 00000 00000" required
                className="contact-field w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm normal-case tracking-normal text-white placeholder:text-white/25" />
            </label>

            <label className="space-y-2 text-xs font-semibold uppercase tracking-wider text-white/50">
              Interested in
              <select name="service" value={form.service} onChange={handleChange} required
                className="contact-field w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm normal-case tracking-normal text-white">
                <option value="" disabled>Choose a service</option>
                <option value="Brand Identity & Design">Brand Identity & Design</option>
                <option value="Digital & Social Media Design">Digital & Social Media Design</option>
                <option value="Print & Marketing Design">Print & Marketing Design</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block space-y-2 text-xs font-semibold uppercase tracking-wider text-white/50">
            Project details
            <textarea name="description" value={form.description} onChange={handleChange}
              placeholder="A few words about your goals, timeline, and requirements..."
              rows="5" required
              className="contact-field w-full resize-none rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm normal-case leading-6 tracking-normal text-white placeholder:text-white/25"></textarea>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-amber-400/10 transition-all hover:-translate-y-0.5 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSubmitting ? 'Sending...' : 'Send inquiry'}
            {!isSubmitting && <ArrowUpRight size={17} />}
          </button>

          {status && (
            <div
              role="status"
              className={`mt-4 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                status.type === 'error'
                  ? 'border-red-400/20 bg-red-400/10 text-red-200'
                  : 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
              }`}
            >
              {status.type === 'success' && <CheckCircle2 size={17} />}
              {status.message}
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default ContactForm;
