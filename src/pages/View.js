import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";
import Delete from "./Delete";

const View = () => {
  const [user, setUser] = useState([]);
  const [notifiy, setNotifiy] = useState("");

  console.log(user);
  useEffect(() => {
    const getData = async () => {
      const useRef = ref(db, "users");
      try {
        const data = await get(useRef);
        const alldata = data.val();
        const userArray = Object.keys(alldata).map((key) => ({
          id: key,
          ...alldata[key],
        }));
        setUser(userArray);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // handleDelete

  const handleDelete = (deleteUserId) => {
    setUser((PrevUser) => PrevUser.filter((user) => user.id !== deleteUserId));
    setNotifiy("delete success");
  };

  return (
    <div>
      <div class="relative w-[70%] mx-auto overflow-x-auto">
        {notifiy}
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Number
              </th>
              <th scope="col" class="px-6 py-3">
                edit
              </th>
              <th scope="col" class="px-6 py-3">
                delete
              </th>
            </tr>
          </thead>
          {user.map((user) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4">{user.contact}</td>
                <td class="px-6 py-4">edit</td>
                <td class="px-6 py-4">
                  <Delete userid={user.id} onDelete={handleDelete} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default View;
