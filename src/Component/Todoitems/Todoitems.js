import React from "react";
const Showitems = (props) =>{
    const {proShowo , prpDeleteItem } = props;
    let theLength = proShowo.length;
    let counter = 1;
    let result = theLength ? (
    proShowo.map((ele)=>{
        return ( 
                <div key={ele.id} className="bg-[#404040]  flex justify-between items-center
                 p-3 border-b-2 border-[#262626] transition duration-700">
                    <div className="text-orange-400">
                    <h2 className=" text-2xl">Task{ counter++} {ele.name}</h2>
                   
                    <span className="block text-sm text-white">{ele.describution}</span>
                    </div>
                    <div>
                    <div>
                    <i className="fa-solid fa-check mr-5 bg-[#00b33c] p-2 text-white"></i>
                    <i onClick={() => prpDeleteItem(ele.id)} className="fa-solid fa-trash
                     bg-red-500 p-2 text-white cursor-pointer"></i>
                    </div>
                    </div>
                </div>
             )
                 })
                 ) : (
                     <p className="text-red-500">No Item Message</p>
                    
                 )

    return(
        <div className="mt-5 mx-auto w-5/6 p-5  ">
            {result}
        </div>
    )
}
export default Showitems;