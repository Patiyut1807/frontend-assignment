'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-red-500">
      <h1 className="text-2xl font-bold mb-2">❌ มีข้อผิดพลาด</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
      >
        ลองโหลดใหม่
      </button>
    </div>
  );
}
