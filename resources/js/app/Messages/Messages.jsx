import React, { useState, useEffect, createContext } from 'react';

export default function Messages() {
    const [values, setValues] = useState({
        to_users_id : '',
        message_content: '',      
    });
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const allowed_names = [ 'to_users_id', 
                                'message_content', 
                               ],
            name = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        

        const response = await fetch('/messages', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').
                    getAttribute('content')
            }
        })
        
        const response_data = await response.json()
        if (response_data.errors) {
            setErrors(response_data.errors);
        }
        console.log(response_data);
    }
     useEffect(() => {
         fetchUser();
     }, [])
    const fetchUser = async () => {
        try {
           const response = await fetch(
               '/api/messages'
           );
           const data = await response.json();
           console.log(data);
           setMessages(data)
       } catch (error) { }
    }
    return (
       
        <section className="allmessages">
            
            <div key={values.id} className="messages" style={{ width: '50%' }}>

                <div className="message">
                    <form action="/messages" className="messages_form" method="post" onSubmit={handleSubmit}>
                    <div className="userOne">
                        <label htmlFor="message_content">Message</label>
                        <input type="text" name="message_content" value={values.message_content} onChange={handleChange} />
                    </div>
                    <div className="userTwo">
                        <label htmlFor="to_user_id">destination user ID</label>
                        
                        <input type="text" name="to_users_id" value={values.to_users_id} onChange={handleChange} />
                    </div>
                    <div className="send">
                        <button>Send message</button>
                    </div>
                    </form>
                </div>
            </div>


            <div>
                {
                    messages.map((message) => (
                        <div>
                            <div>
                                {message.message_content}
                            </div>
                            <div>
                                {message.from_users_id}
                            </div>
                            <div>
                                {message.created_at}
                            </div>
                        </div>
                    ))
                }    
            </div> 
        </section>
    );
}
       {/* //<div className="message">
       //    <form action="/messages" className="messages_form" method="post" onSubmit={handleSubmit}>
    
       //        <div className="userOne">
       //            <label htmlFor="userOne_firstname">{values.from_user_id}</label>
       //            <label htmlFor="updated_at">updated at:{values.updated_at}</label>
       //            <input type="text" name="firstname" value={values.message_content} onChange={handleChange} />
       //        </div>
    
       //        <div className="userTwo">
       //            <label htmlFor="lastname">{values.to_user_id}</label>
       //            <label htmlFor="updated_at">updated at:{values.updated_at}</label>
       //            <input type="text" name="firstname" value={values.message_content} onChange={handleChange} />
       //        </div>
       //        <div className="send">
       //            <button>Send message</button>
       //        </div>
       //        
       //    </form>
       //</div> */}
    
