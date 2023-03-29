import React from 'react'

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "แฟชั่น(ผู้หญิง)",
      catepath: "http://localhost:3000/mainType/fashionW"
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "ไอที",
      catepath: "http://localhost:3000/mainType/IT_and_computer"
    },
    {
      cateImg: "./images/category/png-transparent-computer-icons-online-shopping-supermarket-grocery-store-others-miscellaneous-cdr-supermarket.png",
      cateName: "แฟชั่น(ผู้ชาย)",
      catepath: "http://localhost:3000/mainType/beauty"
    },
    {
      cateImg: "./images/category/icon h.png",
      cateName: "สุขภาพ",
      catepath: "http://localhost:3000/mainType/healthy"
    },
    {
      cateImg: "./images/category/icon e.png",
      cateName: "เครื่องใช้ไฟฟ้า",
      catepath: "http://localhost:3000/mainType/electronic"
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "ความงาม",
      catepath: "http://localhost:3000/mainType/beauty"
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "ผลิตภัณฑ์ สำหรับสัตว์",
      catepath: "http://localhost:3000/mainType/pet"
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "บ้านและสวน",
      catepath: "http://localhost:3000/mainType/HnG"
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "แม่และเด็ก ผู้สูงอายุ",
      catepath: "http://localhost:3000/mainType/mom_and_kids"
    },
    {
      cateImg: "./images/category/istockphoto-1148854779-612x612.jpg",
      cateName: "สินค้า SME",
      catepath: "http://localhost:3000/mainType/SME_product"
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "หนังสือ นิตยสาร และเครื่องเขียน",
      catepath: "http://localhost:3000/mainType/book_and_office"
    },
  ]

  const handleBoxClick = (catepath) => {
    const searchUrl = `${catepath}`
    window.location.href = searchUrl
  }
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} onClick={() => handleBoxClick(value.catepath)}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
