import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Portfolio as PortfolioType } from "../../types/portfolio";

type Props = {
  portfolio: PortfolioType;
};
const Portfolio = ({ portfolio }: Props) => {
  return (
    <div className="container md:max-w-screen-lg mx-auto p-8">
      <div className="border p-4">
        <p className="h1">Portofolio</p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row border border-t-0 p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex-col p-4">
            <p className="text-2xl mb-6">{portfolio.title}</p>
            <p className="text-base whitespace-normal mb-6">
              {portfolio.description}
            </p>
            <div className={`flex flex-row`}>
              <div className={`flex flex-row`}>
                <p className="text-base whitespace-normal">Source :</p>
              </div>
              <div className={`flex flex-col md:ml-3`}>
                {portfolio.source.map((source) => {
                  return (
                    <div
                      key={"src-" + source.link}
                      className={`flex flex-row `}
                    >
                      <Link href={source.link} passHref>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-base whitespace-normal underline text-gray-500"
                        >
                          {source.type}
                        </a>
                      </Link>
                    </div>
                  );
                })}
                {/* <p className="text-base whitespace-normal">
                  {portfolio.source.map((source) => {
                    return source;
                  })}
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col mt-4">
            <div
              className={`flex flex-row justify-center items-start z-0 ${``}`}
            >
              {/* <Link href={``}> */}
              <div
                className="relative h-36 w-52 md:h-52 md:w-80 mr-4 mt-4 "
                style={{
                  backgroundColor: "#fff",
                  backgroundImage:
                    "radial-gradient(#000 10%, transparent 11%), radial-gradient(#000 10%, transparent 11%)",
                  backgroundSize: "5px 5px",
                  backgroundPosition: "0 0, 30px 30px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div
                  className="relative flex justify-center items-center h-36 w-52 md:h-52 md:w-80 inset-x-4 -inset-y-4 z-20 bg-cover bg-center bg-white"
                  style={{
                    backgroundImage: `url("${portfolio.image_url}")`,
                    backgroundRepeat: `no-repeat`,
                    // backgroundSize: `48px`,
                  }}
                >
                  {/* <div className="opacity-0 hover:opacity-100  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-60">
                    <p className="text-white">{`s`}</p>
                  </div> */}
                </div>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row md:items-center p-4">
          <div className={`flex flex-row items-start z-0`}>
            <p className="text-base mr-4 mt-4 md:mt-0">Tags :</p>
          </div>
          <div
            className={`flex-1 md:flex flex-col md:flex-row justify-center items-start z-0`}
          >
            {portfolio.tags.map((tag) => {
              return (
                <div
                  key={"tag-" + tag}
                  className={`flex flex-row items-start z-0 mx-2`}
                >
                  <div className="relative mr-4 mt-4 bg-gray-400">
                    <div className="relative flex justify-center items-center  inset-x-2 -inset-y-2 z-20 bg-cover bg-center bg-white border">
                      <div className="w-full h-full flex justify-center items-center  hover:bg-opacity-60 px-2 py-1">
                        <p className="text-black">{tag}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ params: string }> = async () => {
  const res = await fetch("http://localhost:3000/api/portfolios");
  const data = await res.json();

  const paths = data.portfolios.map((portfolio: any, index: number) => ({
    params: { id: index.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  {
    const res = await fetch(
      "http://localhost:3000/api/portfolios/" + params!.id
    ); // import your api function here
    const data = await res.json();

    return {
      props: {
        portfolio: data.portfolio,
      },
      // revalidate: 86400,
    };
  }
};

export default Portfolio;
