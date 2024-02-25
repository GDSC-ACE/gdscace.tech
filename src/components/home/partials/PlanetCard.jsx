import { twMerge } from "tailwind-merge";

const PrizeCard = ({ imgSrc, prizeAmount, altText, className }) => {
  return (
    <figure
      className={twMerge(
        `absolute transform space-x-4 transition-transform duration-300 ease-in-out hover:scale-110`,
        className,
      )}
    >
      <img className="h-48 w-48 object-contain" src={imgSrc} alt={altText} />
      <div className="absolute left-[40%] top-[40%] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform text-4xl font-bold text-white">
        {altText}
      </div>
      <p className="flex -rotate-45 items-center justify-center">
        <img
          className="h-16 w-16 object-cover"
          src={"/assets/prizes/rocks.png"}
          alt="rock"
        />
        <small className="m-0 text-2xl text-yellow-300">
          &#8377; {prizeAmount}
        </small>
      </p>
    </figure>
  );
};

export default PrizeCard;
