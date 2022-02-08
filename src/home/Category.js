import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Category() {
 const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
      axios.get(process.env.REACT_APP_API + "sub-category/list/website", )
      .then((res) => {
        console.log("rrrrrr ", res);
        setSubCategory(res.data.subcategory);
      });
    }, []);
    
    console.log('subCategory', subCategory);

    return <section id="category">
    <div className="container my-5">
      <div className="cate-line">
        <h2>Top Categories</h2>
      </div>
      <div className="row" id="collections">
        {subCategory.map( sub => {
          return <div className="col-4 mt-3" style={{height: '300px'}}>
            <div className="card-img">
              <img src={process.env.REACT_APP_IMAGE_PATH + sub.image} className="card-img-top" alt="..." />
              <div className="card-title">
                <h5>{sub.name}</h5>
              </div>
            </div>
          </div>
        })}
      </div>
      
    </div>
  </section>
  
}
