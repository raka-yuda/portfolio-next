import { useEffect, useState } from "react";
// import classes from "./home.module.scss";
import Head from "next/head";
import { Portfolio } from "../types/portfolio";
import { Contact } from "../types/contact";
import { Techstack } from "../types/techstack";
import { ContactTile, PortfolioTile, TechTile } from "../components";

type Props = {
  portfolios: Portfolio[];
  contacts: Contact[];
  techstacks: Techstack[];
};

const Index = ({ portfolios, contacts, techstacks }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [fadeProp, setFadeProp] = useState({
    fade: "fadeIn",
  });
  useEffect(() => {
    let timer = setInterval(() => {
      if (fadeProp.fade === "fadeIn") {
        setFadeProp({ fade: "fadeOut" });
        setIsLoading(false);
      } else {
        setFadeProp({ fade: "fadeIn" });
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  return (
    <div>
      <Head>
        <title>Portfolio | Raka</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading && (
        <div
          className={`${
            // classes[fadeProp.fade]
            fadeProp.fade
          } w-screen h-screen flex justify-center items-center `}
        >
          <div className="loader"></div>

        </div>
      )}
      {!isLoading && (
        <div className="container md:max-w-screen-lg h-full mx-auto p-8">
          <div className="border px-8 py-48">
            <div className="md:w-3/5">
              <p className="text-3xl">Finally you found me</p>
              <p className="text-3xl">
                Hi, I’m Raka Yuda, and this is my portfolio website
              </p>
            </div>
          </div>
          <div className="sticky top-0 border border-t-0 p-4 z-20 bg-white">
            <p className="h1">Latest Portfolio</p>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 border border-t-0 px-6 py-12">
            {portfolios &&
              portfolios.map((portfolio, index) => {
                return (
                  <PortfolioTile
                    key={`portfolio-${index}`}
                    href={`/portfolio/${index}`}
                    imageUrl={portfolio.image_url}
                    title={portfolio.title}
                  />
                );
              })}
          </div>
          <div className="sticky top-0 border border-t-0 p-4 z-20 bg-white">
            <p className="h1">Experience Tech Stack</p>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-4 border border-t-0 px-6 py-12">
            {techstacks &&
              techstacks.map((techstack, index) => {
                return (
                  <TechTile
                    key={`ts-${index}`}
                    className={``}
                    href={``}
                    imageUrl={techstack.image_src}
                    title={techstack.title}
                  />
                );
              })}
          </div>
          <div className="sticky top-0 border border-t-0 p-4 z-20 bg-white">
            <p className="h1">Contact Me</p>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 border border-t-0 px-6 py-12">
            {contacts &&
              contacts.map((contact, index) => {
                return (
                  <ContactTile
                    key={`contact-${index}`}
                    className={``}
                    href={contact.link}
                    imageUrl={contact.image_src}
                    title={contact.title}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  let baseUrl = process.env.BASE_URL;

  const portfoliosRes = await fetch(`${baseUrl}/api/portfolios`);
  const contactsRes = await fetch(`${baseUrl}/api/contacts`);
  const techstackRes = await fetch(`${baseUrl}/api/techstacks`);

  const portfoliosData = await portfoliosRes.json();
  const contactsData = await contactsRes.json();
  const techstackData = await techstackRes.json();

  // Returned as props to page
  return {
    props: {
      portfolios: portfoliosData.portfolios,
      contacts: contactsData.contacts,
      techstacks: techstackData.techstacks,
    },
  };
}

export default Index;
