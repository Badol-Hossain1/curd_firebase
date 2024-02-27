import { useState } from "react";

import fireDb, { app, db } from "../firebase.config";
import { ref, set } from "firebase/database";
import View from "./View";

const AddEdit = () => {
  console.log(db);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [notifiy, setNotifiy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const useRef = ref(db, "users/" + id);
    set(useRef, {
      name: name,
      email: email,
      contact: contact,
    });
    setNotifiy("data added");
    setContact("");
    setEmail("");
    setName("");
    setTimeout(() => {
      setNotifiy("");
    }, 2000);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-[50px]">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          {notifiy}
          <div className="-mx-3 mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                contact
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="contact"
                type="number"
                placeholder="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <input
                className="appearance-none block w-full text-white bg-blue-600  border border-gray-200 cursor-pointer rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
                id="contact"
                type="submit"
                value="submit"
              />
            </div>
          </div>
        </form>
      </div>
      <View />
    </div>
  );
};

export default AddEdit;
