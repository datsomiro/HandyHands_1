import React, { useState, useEffect } from 'react';

export default function AllPosts(props) {

    const [{ loading, loaded, data }, setDataState] = useState({
        loading: false,
        loaded: false,
        data: null
    })

    const loadData = async () => {
        {
            setDataState({
                loading: true,
                loaded: false,
                data: null
            });

            const response = await fetch('/api/allposts', {
                method: 'get',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json', 
                    'Content-type': 'application/json', 
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });
            const data = await response.json();

            setDataState({
                loading: false,
                loaded: true,
                data: data
            });
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    console.log(data);

    let content = '';

    if (loading) {
        content = (            
                <h1>Hello  Can you wait while Loading</h1>                         
        )
    } else if (loaded) {
        content = data.map((post) => (          
            <div key={post.id} className="AllPosts-Post" style={{width:'60%'}}>   

                
                <div className="allPost_block">
                    <div className="allPost-User_id">User ID :{post.user_id}</div>
                    <div className="allPost-Created_at">{post.created_at}</div>
                    <div className="allPost-Service_categories">{post.service_categories}</div>
                    <div className="allPost-Description">{post.description}</div>
                    <div className="allPost-Location">{post.location}</div>
                    <div className="allPost-Cost">{post.cost}</div>      
                    <div className="allPost-time">{post.time}</div> 
              </div>
                <div className="allPostPic">
                    <img  className="allPostPic_img" src={post.uploaded_photo_path}/>
                </div>               
            </div>     
            ) 
        )
    }
    return (
        <section className="AllPosts">
            <h2>The newest posts are:</h2>
            {content}
        </section>
    );
}