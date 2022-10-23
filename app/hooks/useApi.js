import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response.data);

    // if (!response.ok) {
    //   // setError(true);
    //   return response
    // }

    // setError(false);
    return response;
  };

  return { data, error, loading, request };
};

// my example text to recall
// const useApi = (apifunc) => {
//   let a = {b:2, c:5}
//   let z = {x:2, y:2}
//   let i = {j:2, q:4}

//   const register = (...args) => {
//     a.b = 6
//     a.c = 8
//     z.x = 9
//     z.y = 2
//     i.j = "hey"
//     i.q = "whatsup"

//     const response = apifunc(...args)
//     return response
//   }
//   return {a, z, i, register}
// }

// const check = (obj) => {
// //   const object = {...obj}
//   obj.val1 = obj.val1 * 10
//   obj.val2 = obj.val2 * 12
//   return obj
// }

// let state = {
//   val1: 10,
//   val2: 12
// }

// // useApi(check).register(state) //to call register prop in useApi

// const {register, a, z, i} = useApi(check) destructuring useApi func
// const reg = register(state)
// console.log(a, z, i)
// console.log(reg)
// console.log(reg.val1)
