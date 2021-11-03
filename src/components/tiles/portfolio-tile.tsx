import Link from "next/link";

type Props = {
  href: string;
  title: string;
  imageUrl: string;
  className: string | null;
};

const PortfolioTile = ({ href, title, imageUrl, className }: Props) => {
  return (
    <div
      className={`flex flex-row justify-center items-start z-0 ${className}`}
    >
      <Link href={href}>
        <div
          className="cursor-pointer relative h-36 w-full md:h-52 md:w-80 mr-4 mt-4 "
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
            className="relative flex justify-center items-center h-36 w-full md:h-52 md:w-80 inset-x-4 -inset-y-4 z-20 hover:bg-black bg-cover bg-center border"
            style={{
              backgroundImage: `url("${imageUrl}")`,
            }}
          >
            <div className="opacity-0 hover:opacity-100  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-60">
              <p className="text-white">{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioTile;
