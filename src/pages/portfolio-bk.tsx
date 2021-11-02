import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { Params } from "next/dist/server/router";
import { Portfolio } from "../types/portfolio";

type StaticProps = {
  id: number;
};
const Portfolio = () => {
  return (
    <div className="container md:max-w-screen-lg mx-auto px-8">
      <div className="border p-4">
        <p className="h1">Portofolio</p>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row border p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex-col p-4">
            <p className="text-2xl mb-6">Portofolio</p>
            <p className="text-base whitespace-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
          </div>
          <div className="flex-1 flex-col">
            <div className="flex flex-row justify-center items-center my-4">
              <div className="relative h-40 w-60 mr-4 mt-8 bg-gray-400">
                <div className="absolute flex justify-center items-center h-40 w-60 bg-white border inset-x-4 -inset-y-4">
                  image
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row p-4">
          <p className="text-base ">Tags</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const res = await fetch("http://localhost:3000/api/portfolios");
  const portfolios = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = portfolios.map((portfolio: Portfolio, index: number) => ({
    params: { id: index },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  {
    const res = await fetch("http://localhost:3000/api/portfolios"); // import your api function here
    const data = await res.json();
    return {
      props: {
        portfolios: data.portfolios,
      },
      revalidate: 86400,
    };
  }
};

export default Portfolio;
