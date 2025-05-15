import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Quick Chat</h1>
      <p className="text-lg">A simple chat application using Next.js and OpenAI API</p>
      <div className="flex gap-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}
