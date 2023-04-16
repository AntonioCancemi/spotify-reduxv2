import SingleTrack from "./SingleTrack";

const TrackList = (props) => {
  console.log(props.songList);
  return (
    <>
      {props.songList.map((track) => (
        <SingleTrack track={track} />
      ))}
    </>
  );
};
export default TrackList;
