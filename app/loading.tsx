export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="fixed top-0 left-0 right-0 h-24 bg-white/50 backdrop-blur-md z-50 flex items-center justify-between px-6">
        <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
        <div className="hidden md:flex gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-20 bg-gray-300 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="relative h-screen w-full bg-gray-200 flex items-center justify-center">
        <div className="space-y-6 text-center max-w-4xl w-full px-4">
          <div className="h-4 w-48 bg-gray-300 mx-auto rounded-sm"></div>
          <div className="h-20 w-3/4 bg-gray-300 mx-auto rounded-md"></div>
          <div className="h-6 w-1/2 bg-gray-300 mx-auto rounded-sm"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-96 w-full bg-gray-200 rounded-sm"></div>
          <div className="space-y-4">
            <div className="h-4 w-32 bg-gray-200 rounded-sm"></div>
            <div className="h-12 w-3/4 bg-gray-200 rounded-sm"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-3 w-full bg-gray-200 rounded-sm"></div>
              <div className="h-3 w-2/3 bg-gray-200 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}