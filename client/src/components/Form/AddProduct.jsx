import React, { useState , useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";


const AddProduct = () => {
  const [enName, setEnName] = useState({ hits: [] });
  const [cnName, setCnName] = useState({ hits: [] });
  const [unit_id, setUnitId] = useState({ hits: [] });

  useEffect (() => {

    const fetchData = async () => {
      const result = await axios (
        "localhost:3000/addproduct/search?query=redux",
      );
      setEnName(result.data);
      setCnName(result.data);
      setUnitId(result.data);
  
    };
    fetchData();
  }, []);

  return (
    <form noValidate autoComplete="off">
      <TextField
        value ={enName}
        onChange= {e => setEnName(e.target.value)}
        label="Product Name"
        type="text"
        name="enName"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        value = {cnName}
        onChange= {e => setCnName(e.target.value)}
        label="Product Name (Chinese)"
        type ="text"
        name="cnName"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-name"
        value = {unit_id}
        onChange= {e => setUnitId(e.target.value)}
        label = "Unit Id"
        type ="text"
        name="unit_id"
        margin="normal"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        value="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default AddProduct;
