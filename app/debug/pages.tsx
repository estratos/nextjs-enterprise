export default function DebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Debug Page</h1>
      <p>If you can see this, routing is working!</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Available Routes:</h2>
        <ul className="list-disc ml-6">
          <li><a href="/" className="text-blue-600 hover:underline">Home (/)</a></li>
          <li><a href="/services" className="text-blue-600 hover:underline">Services (/services)</a></li>
          <li><a href="/servicios" className="text-blue-600 hover:underline">Servicios (/servicios)</a></li>
        </ul>
      </div>
    </div>
  );
}