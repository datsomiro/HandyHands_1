import React, { useState, useEffect, createContext  } from 'react';


export default function Profile(props) {

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

            const response = await fetch('/api/profile', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json', 
                    'Content-type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // prove to backend that this is authorized
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
        content = (
            <div key={data.id} className="Profile" style={{ width: '70%' }}>

                <img>{data.profile_photo_path}</img>
                <h1>Hi {data.firstname} {data.lastname}!</h1>
                <div className="post_description">
                    {
                         data.posts.map(post => (
                            <span className="profile_span" key={post.user_id}>
                                <div className="allPost_block">
                                    <div className="allPost-Created_at">{post.created_at}
                                    </div>
                    <div className="allPost-Service_categories">{post.service_categories}</div>
                                    <div className="allPost-Description">{post.description}</div>
                                    <div className="allPost-Location">{post.location}</div>
                                    <div className="allPost-Cost">{post.cost}</div>
                                    <div className="allPost-time">{post.time}</div>
                                </div>
                                <div className="allPostPic">
                                    <img className="allPostPic_img" src={post.uploaded_photo_path} />
                                </div>                                    
                            </span>
                             
                         )
                         )
                    }
                </div>
            </div>
        )        
    }
    return (
        <section className="AllPosts">
            <h2>The newest posts are:</h2>
            { content}
        </section>
    );
}