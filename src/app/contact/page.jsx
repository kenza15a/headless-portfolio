// app/contact/page.tsx
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm.jsx";

export default async function ContactPage() {
  /*  const res = await fetch(
    `${process.env.WP_API}/wp/v2/pages?slug=contact&_embed`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  if (!data?.length) return notFound(); */

 /*  const page = data[0]; */

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">ON DISCUTE?</h1>

      <ContactForm />
    </main>
  );
}
