export default function Home() {
  return (
    <main>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center gap-8 justify-center">
        <h1 className="text-6xl font-bold text-center">Create Web3 App</h1>
        <button className="bg-gray-300 hover:bg-gray-400 rounded-lg p-3 duration-150">
          Connect Wallet
        </button>
        <div className="bg-gray-300 w-1/3  rounded-xl border-black border-2 h-[60vh]"></div>
      </div>
    </main>
  );
}
