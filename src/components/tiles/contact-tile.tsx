import Link from "next/link";

type Props = {
  href: string;
  title: string;
  imageUrl: string;
  className: string | null;
};

const ContactTile = ({ href, title, imageUrl, className }: Props) => {
  return (
    <div
      className={`flex flex-row justify-center items-center z-0 ${className}`}
    >
      <Link href={href} passHref>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div
            className="cursor-pointer relative h-36 w-48 mr-4 mt-4"
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
              className="relative flex justify-center items-center h-36 w-48 inset-x-4 -inset-y-4 z-20 bg-cover bg-center bg-white filter grayscale border"
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `48px`,
              }}
            >
              <div className="opacity-0 hover:opacity-100  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-60">
                <p className="text-white">{title}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ContactTile;
