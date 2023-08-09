import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { usePostReviewMutation } from "../../redux/api/book.api";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const AddReview = () => {
  const [review, setReview] = useState<string>("");
  const { id } = useParams();

  const [postReview] = usePostReviewMutation();
  const handleReview = () => {
    postReview({ review, id });
    toast.success("review added");
    setReview("");
  };

  return (
    <>
      <div className="flex border mt-12 focus-within:border-blue-600 border-slate-400 p-1 px-2 w-96 rounded-lg items-center">
        <input
          className="focus:outline-none pl-2"
          type="text"
          size={42}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="add your review"
        />
        <p onClick={handleReview} className="text-blue-700">
          <FiSend />
        </p>
      </div>
    </>
  );
};

export default AddReview;
