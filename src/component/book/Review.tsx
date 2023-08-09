import { useGetReviewQuery } from "../../redux/api/book.api";

const Review = ({ id }: { id: string }) => {
  const { data } = useGetReviewQuery(id);
  return (
    <>
      <ul className="mt-4 text-slate-500 font-medium">
        {data?.data?.review.map((item: string) => {
          return <li key={(Math.random() * 100) / 23}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Review;
