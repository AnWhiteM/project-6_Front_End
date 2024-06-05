import CreateBoardBtn from "../CreateBoardBtn/CreateBoardBtn";

export default function CreateTask() {
  return (
    <>
      <h2>My boards</h2>
      <CreateBoardBtn />
      {allBoards.length !== 0 && <ButtonList />}
    </>
  );
}
