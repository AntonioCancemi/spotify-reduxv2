import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLiked, unSetLiked } from "../redux/action/userAction";
import { Button } from "react-bootstrap";

const SingleTrack = (props) => {
  const dispatch = useDispatch();
  const track = props.track;
  const [loading, setLoading] = useState(true);
  let like = "gray";
  const likedSongs = useSelector((state) => state.user.likedSongs);

  const setInStore = () => {
    for (let i = 0; i < likedSongs.length; i++) {
      if (track.id === likedSongs[i]) {
        dispatch(unSetLiked(i));
        return;
      } else {
        dispatch(setLiked(track.id));
        like = like ? "gray" : "green";
      }
    }
  };
  const checkLike = (x) => {
    for (let i = 0; i < likedSongs.length; i++) {
      if (x.id === likedSongs[i]) {
        like = "green";

        return;
      }
    }
  };
  useEffect(() => {
    checkLike(track);
    setTimeout(setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="py-3 trackHover d-flex justify-content-between">
          <p className="card-title trackHover px-3 text-light">{track.title}</p>
          <p className="duration text-light ">
            {Math.floor(
              parseInt(track.duration) / 60 // setting the duration minutes
            )}
            :
            {parseInt(track.duration) % 60 < 10
              ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
              : parseInt(track.duration) % 60}
            <Button onClick={setInStore} variant="trasparent" className="ms-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={like}
                class="bi bi-heart-fill secondary"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </Button>
            {/* {bolLiked ? (
            ) : (
              <Button
                variant="trasparent"
                // onClick={dispatch(setLiked(track.id))}
                className="ms-4 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  class="bi bi-heart-fill success"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </Button>
            )} */}
          </p>
        </div>
      )}
    </>
  );
};
export default SingleTrack;
