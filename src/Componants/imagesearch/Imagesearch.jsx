import React, { useEffect, useState } from 'react'

const Imagesearch = () => {
    const [img, setimg] = useState("");
    const [mydata, setMydata] = useState([]);
    const [loading, setLoading] = useState(false);
    const Access_Key = "LNhORs03CzhnuKuoYa_kb9Fzab4dhnbYSJ6cifBpQ1k";
    const myapi = async () => {
      setLoading(true);
  
      try{
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=office=${img}&client_id=${Access_Key}`
      );
      const data = await response.json();
      const result = data.results;
      console.log(result);
      setMydata(result);
      setLoading(false);
      }catch{ console.error("error 404");
      }
    };
    const btn = () => {
      myapi();
      setimg("");
    };
    useEffect(() => {
      myapi();
    }, []);
  
    return (
      <div>
        <input
          type="text"
          className="m-10 py-2 px-4 text-black text-xl border-2 border-black rounded "
          placeholder="search imeges..."
          value={img}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        />
        <button
          onClick={btn}
          className="py-2 px-4 bg-black outline-none text-white rounded"
        >
          Search
        </button>
        {loading ? (
          <h1 className="text-3xl text-black text-center font-bold">
            loading...
          </h1>
        ) : (
          <div className="img_contaier flex justify-between flex-wrap">
            {mydata.map((elem) => {
              return (
                <div className="flex justify-center gap gap-4 mb-3 items-center p-5">
                  <img src={elem.urls.small} alt={elem.alt_description} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
}

export default Imagesearch
