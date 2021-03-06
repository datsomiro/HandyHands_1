import React, { useState, useEffect, createContext } from 'react';
import moment from 'moment';

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
       
        <section >
            
            <div className="allmessages">
                <div key={values.id} className="messages">
                    <h4>Enter in contact with another  user ?</h4>
                    
                        <form action="/messages" className="messages_form" method="post" onSubmit={handleSubmit}>                  
                            <input type="text" name="to_users_id" value={values.to_users_id} onChange={handleChange} placeholder="write user ID here" />                                         
                            <div className="textarea">
                            <textarea name="message_content" rows="5" cols="40" value={values. message_content} onChange={handleChange} placeholder="writeyour  message here"/>
                            </div>                                              
                            <button>Send message</button>                       
                        </form>
                </div>
                <div className="reception">
                    {
                        messages.map((message) => (
                            <div className="oneMessage">
                                <div className="created_at">
                                    {moment(message.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                                <div className="users_id">
                                    {message.from_users_id}
                                </div>

                                <div className="message_content">
                                    {message.message_content}
                                </div>

                            </div>
                        ))
                    }    
                </div> 
            </div>
        </section>
    );
}

    
