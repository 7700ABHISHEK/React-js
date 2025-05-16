import React, { useEffect, useState } from 'react'

const DogApi = () => {
    const [dogApi, setDogApi] = useState("");
    const [img, setImg] = useState(0);

    // Using Normal

    // useEffect(() => {
    //     const URL = "https://dog.ceo/api/breeds/image/random";

    //     fetch(URL)
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setDogApi(data.message);
    //         });
    // }, [img]);

    // ----------------------------------------------------------------------- 

    // Using Async / Await 

    useEffect(() => {
        const fetchDogApi = async () => {
            const URL = "https://dog.ceo/api/breeds/image/random";
            try {
                let res = await fetch(URL);
                let data = await res.json();

                setDogApi(data.message);
            } catch (error) {
                console.error("Error fetching Dog Api", error);
            }
        }

        fetchDogApi();

    }, [img])

    return (
        <div className='m-4'>

            {
                dogApi == ""
                    ? <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    : <img src={dogApi} alt="kutra" width="400px" height="400px" />
            }

            <div>
                <button className='btn btn-warning my-5' onClick={() => {
                    setImg(img + 1)
                }}>Get Dog Image</button>
            </div>

        </div>
    )
}

export default DogApi