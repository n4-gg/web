export default function Page() {
  return (
    <main className="flex flex-grow items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl font-semibold">Partners</h1>
        <p className="text-xl">
          Contact{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
            href="https://discordapp.com/users/309722666258923530"
          >
            Vyast
          </a>{" "}
          or open a ticket in our discord if you are interested in discussing a
          partnership!
        </p>
      </div>
    </main>
  );
}
