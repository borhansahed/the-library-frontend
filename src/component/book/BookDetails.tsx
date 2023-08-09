import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetOneBookQuery,
} from "../../redux/api/book.api";
import Button from "../Button";
import Review from "./Review";
import AddReview from "./AddReview";
import Swal from "sweetalert2";
import user from "../../auth/user";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const verifiedUser = user();

  const handleDelete = () => {
    if (verifiedUser.name !== data?.data?.author) {
      return toast.error("Your are not Author of this book");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1D4ED8",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Book has been deleted.", "success");
        deleteBook(id);
        navigate("/allBook");
      }
    });
  };

  return (
    <>
      <article className="mt-24 mb-28 flex  px-28 justify-around">
        <div>
          <img className="w-96" src={data?.data?.image} alt="" />
          <AddReview />
          <Review id={id!} />
        </div>
        <div className="">
          <div>
            <h1 className="text-lg text-slate-700 font-medium">
              <span className="font-bold text-lg text-blue-700">Title:</span>{" "}
              {data?.data?.title}
            </h1>
            <p className="text-lg text-slate-700 font-medium">
              {" "}
              <span className="font-bold text-lg text-blue-700">
                Author:
              </span>{" "}
              {data?.data?.author}
            </p>
            <p className="text-lg text-slate-700 font-medium">
              <span className="font-bold text-lg text-blue-700">Genre:</span>
              {data?.data?.genre}
            </p>
            <p className="text-lg text-slate-700 font-medium">
              {" "}
              <span className="font-bold text-lg text-blue-700">
                Publication Year:
              </span>{" "}
              {data?.data?.year}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  if (verifiedUser.name === data?.data.author) {
                    toast.success("Your are  Author of this book");
                    navigate(`/allBook/${id}/editBook`);
                  } else {
                    toast.error("Your are not Author of this book");
                  }
                }}
              >
                <Button buttonText={"Edit Book"} />
              </button>

              <button
                onClick={handleDelete}
                className="border hover:bg-white hover:border-blue-700 hover:text-blue-700 bg-red-700 border-white text-sm font-bold text-white py-2 px-5 rounded-full "
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BookDetails;
