import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;
  const handleInput = (e) => {

const {name,value} = e.target
setState({...state,[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name || !email || !contact){
        toast.error('please provide value')
    }
  };
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
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
              placeholder="name"
              onChange={handleInput}
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
              placeholder="email"
              onChange={handleInput}
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
              onChange={handleInput}
            />
             <input
              className="appearance-none block w-full text-white bg-blue-600  border border-gray-200 cursor-pointer rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500"
              id="contact"
              type="submit"
      
              value='submit'
   
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEdit;
