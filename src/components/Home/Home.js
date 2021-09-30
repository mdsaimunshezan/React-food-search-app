import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'


const Home = () => {
    const history = useHistory();
    const handleClcik = ()=>{
        history.push("/conteck");
    }
    return (
        <div className="w-50 mx-auto shadow-lg p-3 mt-5">
            <h1>this is home section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui quaerat saepe sequi iusto aliquam esse minus consequuntur optio, voluptate libero ipsa ipsum dolorem deleniti neque nemo vero, veniam quae cum officiis quis aperiam. Magnam nesciunt molestias dolor quibusdam cum labore vel, sint vero, rem voluptatem non in cumque consectetur.</p>
            <Button variant="success" onClick={handleClcik}>Read More</Button>
        </div>
    )
}

export default Home
