import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  starDimension: string;
  starSpacing: string;
  starRatedColor: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  starDimension,
  starSpacing,
  starRatedColor,
}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starIcon =
      i <= rating ? (
        <FaStar
          key={i}
          style={{
            width: starDimension,
            height: starDimension,
            marginRight: starSpacing,
          }}
          color={starRatedColor}
        />
      ) : (
        <FaStar
          key={i}
          style={{
            width: starDimension,
            height: starDimension,
            marginRight: starSpacing,
          }}
          color="#C0C0C0"
        />
      );
    stars.push(starIcon);
  }

  return <>{stars}</>;
};

export default StarRating;
