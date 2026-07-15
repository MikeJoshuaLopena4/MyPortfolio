import Link from 'next/link';
import embedded, { slugify } from '../../../../projects/embedded';

const slug = 'wearable-health-monitor';
const project = embedded.find(p => slugify(p.title) === slug);

export default function Page() {
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <main className="min-h-screen p-8 container mx-auto">
      <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg p-6">
        <div className="mb-4">
          <Link href="/projects" className="text-sm text-blue-300 underline">← Back</Link>
        </div>
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <div className="mb-4 text-sm text-slate-300">Module: {project.module} • Category: {project.category}</div>
        <p className="mb-6 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-black/50 border rounded text-xs text-slate-200">{t}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
