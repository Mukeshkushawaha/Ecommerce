import {
  Box,
  Button,
  Container,
  FormHelperText,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

// var X = { Foo : 1};
// a.var Output = (function()
// {
// delete X.foo;
// b.return X.foo;
// }
// ();
// console.log(output);

const LoginPage = () => {
  // 1.Question
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(20);
  const OnclickHandler = async () => {
    // var y = 1;
    // if (function f() {}) {
    //   y += typeof f;
    // }
    // console.log("typeof", y);
    // ----------------------------------------3------------------------
    // var X = { Foo : 1};
    // a.var Output = (function()
    // {
    // delete X.foo;
    // b.return X.foo;
    // }
    // ();
    // console.log(output);
    // ------------------------------------------4-----------------------------
    // try {
    //   const response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   console.log("response", response.data[0]);
    //   // setData(res.data.result);
    // } catch (error) {
    //   console.log(error);
    // }
    // ------------------------------6-------------------------
    // function Counterone() {
    //   var counter = 0;
    //   return {
    //     add: function (Increase) {
    //       counter += Increase;
    //     },
    //     retrived: function () {
    //       return "inc" + counter;
    //     },
    //   };
    // }
    // var c = Counterone();
    // c.add(5);
    // c.add(9);
  };

  const array1 = [2, 4, 1, 6, 4, 3];
  const array2 = [1, 3, 1, 9, 5, 9];

  // function secondLargest(array1) {
  //   let arr = [...new Set(array1)].sort((a, b) => a - b);
  //   return arr[arr.length - 2];
  // }

  console.log("secondLargest", array1.length - 2);
  // console.log("secondLargest", secondLargest(array2));

  return (
    <Container>
      <Box textAlign="center">
        <Typography variant="h1">Testing</Typography>
        <Box>
          <Typography>API data </Typography>

          <Box pt={5} pb={5}>
            <Button variant="contained" onClick={OnclickHandler}>
              Ok
            </Button>
          </Box>
          {/* <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography>Increase value{count}</Typography>
              <Button onClick={() => setCount(count + 1)}>+</Button>
            </Box>
            <Box>
              <Typography>Decrease value {count1}</Typography>
              <Button onClick={() => setCount1(count1 - 1)}>-</Button>
            </Box>
          </Box> */}

          <Box textAlign="center">
            <Typography variant="h1">GroceryApp </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginPage;

// import React from "react";

// const Product = (props) => {
//   const plus = (ind) => {
//     props.onVote("+", ind);
//     // console.log({ ind });
//   };
//   const minus = (ind) => {
//     props.onVote("-", ind);
//     // console.log({ ind });
//   };
//   return (
//     <li>
//       <span>{props.product.name}</span> -{" "}
//       <span>votes: {props.product.votes}</span>
//       <button onClick={() => plus(props.index)}>+</button>{" "}
//       <button onClick={() => minus(props.index)}>-</button>
//     </li>
//   );
// };

// const GroceryApp = () => {
//   let [products, setProducts] = React.useState([
//     { name: "Oranges", votes: 0 },
//     { name: "Bananas", votes: 0 },
//   ]);
//   const onVote = (dir, index) => {
//     const Products = [...products];
//     if (dir === "+") {
//       Products[index].votes = Products[index].votes + 1;
//       setProducts(Products);
//     } else {
//       Products[index].votes = Products[index].votes - 1;
//       setProducts(Products);
//     }
//   };

//   return (
//     <ul>
//       {products.map((product, index) => (
//         <Product key={index} onVote={onVote} index={index} product={product} />
//       ))}
//     </ul>
//   );
// };
// export default GroceryApp;
