import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-semibold tracking-tight text-lg">bettercallmanav</span>
        <Link
          href="https://github.com/bettercallmanav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          GitHub →
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="inline-block mb-6 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-500 tracking-wide uppercase">
          Work in progress
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Building in public.
          <br />
          <span className="text-gray-400">Learning out loud.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
          A personal corner of the internet where I document what I&apos;m learning,
          share how I build things, and ship projects using AI — all in the open.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://github.com/bettercallmanav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Follow the journey
          </Link>
          <Link
            href="#pillars"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            What&apos;s coming
          </Link>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-gray-50 border-y border-gray-100 py-3 px-6 text-center text-sm text-gray-400">
        This site is actively being built. Check back often for new content.
      </div>

      {/* Three Pillars */}
      <section id="pillars" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-12">
          What this is about
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-sm transition-shadow">
            <div className="text-2xl mb-4">📖</div>
            <h3 className="text-lg font-semibold mb-2">Learn</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Structured notes, tutorials, and resources I&apos;m actively working through —
              from fundamentals to cutting-edge tools.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-sm transition-shadow">
            <div className="text-2xl mb-4">🛠️</div>
            <h3 className="text-lg font-semibold mb-2">Document</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Dev logs, project breakdowns, and build-in-public updates.
              The messy, honest process of making things.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-sm transition-shadow">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Ship with AI</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Real projects built using AI tools, documented end-to-end.
              What works, what doesn&apos;t, and what I&apos;d do differently.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <span>Manav Bhatia — bettercallmanav</span>
        <span>Built with Next.js &amp; Cloudflare</span>
      </footer>
    </main>
  );
}
