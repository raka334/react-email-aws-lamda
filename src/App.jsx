import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [html ,setHtml] = useState('');
  const [subject , setSubject]=useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse('');
    setError('');

    try {
      const result = await axios.post('https://jrth90ky15.execute-api.ap-south-1.amazonaws.com/prod/', {
        email , html , subject 
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResponse(result.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <label>
          Html: 
          <input type="text"
          value={html}
          onChange={(e)=> setHtml(e.target.value)}
          required  />
        </label>

        <label>
          Subject
          <input type="text"
          value={subject}
          onChange={(e)=> setSubject(e.target.value)}
          required  />
        </label>

        

        <button type="submit">Submit</button>
        
      </form> */}
      {response && <p>Response: {response}</p>}
      {error && <p>Error: {error}</p>}



      <div className=' flex items-center justify-center pb-16'>
     <div>
          <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
  <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    This is Intrest form.
  </h4>
  <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
  We are comming soon to brigten your day
  </p>
  <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96" onSubmit={handleSubmit}>
    <div className="flex flex-col gap-6 mb-1">
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900" >
        Enter your Name
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Enter your name *" value={subject} onChange={(e)=>setSubject(e.target.value)} required
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
       </div>

       {/* This is for email */}
       <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900" >
        Enter your Email
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Enter your email* " value={email} onChange={(e)=>setEmail(e.target.value)} required
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
       </div>


      {/* This is for Message  */}
      
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900" >
        Enter your Query
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Enter your Query *" value={html} onChange={(e)=>setHtml(e.target.value)} required
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
       </div>


    </div>
    
    <button
      className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit" >
        Submit
    </button>

  </form>
  {response && <p>Response: {response}</p>}
  {error && <p>Error: {error}</p>}
</div>
    </div>
   </div>
    </div>
    

  );
};

export default App;
