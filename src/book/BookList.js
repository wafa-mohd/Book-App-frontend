import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../common/NavBar";
import BookListItem from "./BookListItem";
import SubCategoryList from "./SubCategoryList";

export default function BookList() {
  const [book, setbook] = useState([]);
  const [category, setcategory] = useState({});
  
  let { categoryId, subCategoryId } = useParams()
  useEffect(() => {
    console.log('wwwwwwww');
    axios.get(process.env.REACT_APP_API+"book/list?category="+categoryId + (subCategoryId ? "&subCategory="+subCategoryId: ""))
    .then((res)=>{
      console.log("books",res);
      setbook(res.data.book)
    })
    axios.get(process.env.REACT_APP_API+"category/byId/"+categoryId)
    .then((res)=>{
      console.log("books",res);
      setcategory(res.data.category)
    })
  }, [categoryId, subCategoryId]);
  
  console.log(categoryId, subCategoryId);

  return (
    <>
      <NavBar />
      <div id="fictionsub">
        <div className="container-fluid">
          <div className="row fic">
            <div className="col-md-3">
              <h4>{category.name} </h4>
              <SubCategoryList categoryId={categoryId} />
            </div>
            <div className="col-md-7" >
              <h4 style={{marginBottom:"40px"}}>Top Selling Books</h4>
              <div className="row ">
                {book.map( bookItem => {
                  return <BookListItem details={bookItem} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
