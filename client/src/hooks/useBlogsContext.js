import { BlogsContext } from "../context/blogsContext";
import { useContext } from "react";

export const useBlogsContext = () =>{
    const context = useContext(BlogsContext)

    if (!context){
        throw Error('useBlogsContext must be used inside an BlogsContext :|')
    }

    return context
}

