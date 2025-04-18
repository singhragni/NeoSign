import { useRouteError } from "react-router-dom";


const Error = () =>{
    const err =  useRouteError()
    console.log(err)
    return <>{err.data}</>
}

export default Error;