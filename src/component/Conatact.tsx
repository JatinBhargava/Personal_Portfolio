import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () =>{

  const sendEmail = (e : any) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'temp', e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (<form className='form_class' onSubmit={sendEmail}>
        <h4 className='font-bold text-2xl font-serif subpixel-antialiased text-slate-600' >Contact Us</h4>
        <input type="text" placeholder='Name' name='from_name'/>
        <input type="email" placeholder='Email' name='user_email'/>
        <input type="text" placeholder='Subject' name='user_subject'/>
        <textarea placeholder='Message' name='message'></textarea>
        <button className='rounded-full border-2 border-slate-400'>Submit</button>
    </form>)
}

export default Contact