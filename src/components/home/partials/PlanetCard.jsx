import { twMerge } from "tailwind-merge";

const PrizeCard = ({ imgSrc, prizeAmount, altText, className }) => {
  return (
    <figure
      className={twMerge(
        `absolute transform space-x-4 transition-transform duration-300 ease-in-out hover:scale-110`,
        className,
      )}
    >
      <img
        className="h-32 w-24 object-contain md:h-40 md:w-32 lg:h-64 lg:w-48"
        src={imgSrc}
        alt={altText}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 transform text-4xl font-bold text-white">
        {altText}
      </div>
      <p className="flex -rotate-45 items-center justify-center ">
        <img
          className="h-12 w-12 object-cover md:h-16 md:w-16"
          src={"/assets/prizes/rocks.png"}
          alt="rock"
        />
        <small className="m-0 text-lg text-yellow-300 lg:text-2xl">
          &#8377; {prizeAmount}
        </small>
      </p>
    </figure>
  );
};

export default PrizeCard;
