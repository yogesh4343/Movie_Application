import React from 'react'

const CommentCard = () => {
    return (
          <>
        <div className="container w-full md:w-[32rem]  rounded-xl shadow-2xl p-5 ">

        <span className="comma text-2xl md:text-3xl text-[#5b27c0] font-[900]">“</span>
           <div className="para text-xl">
           <span className="cont font-[Quicksand]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt voluptatum architecto omnis dolorem. Eaque cupiditate architecto odio, suscipit repellendus ipsam voluptatem quam vero nemo ullam adipisci, impedit inventore dicta, corrupti ipsa modi ratione sequi.!</span>
           </div>

           <div className="secondCont flex justify-end flex-col text-end text-lg mt-3 font-[Arya] text-[#202020]">
                <div className="rohit"> Yogesh</div>
                <div className="ui">UI Designer</div>

                </div>          

        </div>
        </>
    )
}

export default CommentCard

