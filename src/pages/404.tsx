import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Raka</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container md:max-w-screen-lg h-svh mx-auto p-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <p>
            {"404 | Sorry we can't find what you want"}
          </p>
          <Link href={"/"} className="underline">Go Back</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;