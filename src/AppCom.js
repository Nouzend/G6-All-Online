import Comments from "./comments/Comments";
import "./index.css";

const AppCom = () => {
  return (
    <div>
      <h1></h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default AppCom;
