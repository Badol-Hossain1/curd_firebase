import { ref, update } from "firebase/database";
import { useState } from "react";
import { db } from "../firebase.config";

function Update({ user, onClose, onUpdate }) {
  const [editFname, setEditFName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [contact, setContact] = useState(user.contact);

  const handleUpdate = async () => {
    const useRef = ref(db, `users/${user.id}`);
    try {
      await update(useRef, {
        name: editFname,
        email: email,
        contact: contact // Add the contact field as well if needed
      });
      onUpdate(user.id, editFname, email);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        <input
          type="text"
          value={editFname}
          onChange={(e) => setEditFName(e.target.value)}
          className="border-1 border-black"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-1 border-black"
        />
        <br />
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border border-black"
        />
      </div>

      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    Update your info
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        value={editFname}
                        onChange={(e) => setEditFName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="contact"
                      >
                        Contact
                      </label>
                      <input
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="contact"
                        type="text"
                        placeholder="Contact"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex justify-between px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
