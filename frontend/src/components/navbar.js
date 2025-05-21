import {Link} from "react-router-dom";

function navbar(){
    return(

        <div className="flex nav bg-slate-600 py-4 justify-between px-10">
            <h1 className="text-3xl text-white font-sans font-semibold" ><Link to='/'>E-Commerce</Link></h1>
              <Link to="/create" className=" bg-white text-slate-600 rounded-full pt-1 py-1 hover:bg-red-500 hover:text-white"><button className="mx-2  font-sans">Create Product</button></Link>
            
        </div>
    );
}

export default navbar;