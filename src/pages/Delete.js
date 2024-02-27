import { ref, remove } from "firebase/database";
import { db } from "../firebase.config";


const Delete = ({ userid, onDelete }) => {
  const handelDelete = () => {
    try {
      const userRef = ref(db, `users/${userid}`);
      remove(userRef);
      onDelete(userid);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button onClick={handelDelete}>Delete Data</button>
    </div>
  );
};

export default Delete;
