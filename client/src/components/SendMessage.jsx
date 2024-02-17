import React, { useState } from 'react'

export default function SendMessage() {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  console.log(content)
  const handleChange = (event) => {
    setContent(event.target.value);
  };


  async function handelSubmit(e) {
    e.preventDefault();
    if (!content) return setError("You can not send an empty message")

    try {
      const res = await fetch('/api/user/message', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: content }),
      });


      if (res.ok) {
        setError('message sent');
        setContent('');
      } else {
        setError('something went wrong !');
        setContent('');
      }
    } catch (error) {
      setError(error)
    }
  }

  return (
    <form onSubmit={handelSubmit} className='h-screen flex flex-col items-center justify-center gap-4'>

      <p className="text-4xl sm:text-7xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Tell Me Something ?
      </p>
      <textarea value={content} id='content' type='text' className="sm:w-[30px] text-center text-white bg-black" style={{ width: '58%', height: '60px', borderRadius: "3%", padding: "5px" }} onChange={handleChange} placeholder="Type your message here and your preferred way of communication " required />
      <button type='submit' className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-blue-500 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-5">
        Send Message
      </button>
      {
        error && (
          <p className='text-red-500'>
            {error}
          </p>
        )
      }
    </form>
  )
}
