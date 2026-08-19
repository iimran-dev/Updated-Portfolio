export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col items-center justify-center p-4">
      <h2 className="text-4xl font-bold font-display">404 - Page Not Found</h2>
      <p className="text-zinc-400 mt-2 font-body">The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-white text-black font-semibold rounded-lg">
        Return Home
      </a>
    </div>
  );
}
