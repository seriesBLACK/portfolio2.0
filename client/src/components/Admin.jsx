import React, { useEffect, useState } from 'react';
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

export default function Admin() {
  const [messages, setMessages] = useState(null);


  async function getMessages() {
    dayjs.extend(relativeTime)
    try {
      const res = await fetch('/api/user/getMessage');
      const data = await res.json();

      if (res.ok) setMessages(data);

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMessages()
  }, [])
  return (
    <>

      {messages && messages.map((msg) => (
        <div key={msg.createdAt} className='flex items-center gap-3 mb-5 justify-center'>

          <p className='text-red-500 font-bold '>{msg.content}</p>
          <p>{

            dayjs(msg.createdAt).fromNow()
          }</p>
        </div>

      ))}
    </>
  )
}
