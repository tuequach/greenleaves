import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function AddProductFn() {
  const [enName, setEnName] = useState("");
  const [cnName, setCnName] = useState("");
  const [unitId, setUnitId] = useState("");
  const [availability, setAvailability] = useState(true);

  const handleChange = e => {
    switch (e.target.name) {
    case "enName":
      setEnName(e.target.value);
      break;

    case "cnName":
      setCnName(e.target.value);
      break;

    case "unitId":
      setUnitId(e.target.value);
      break;

    case "availability":
      setAvailability(e.target.value);
      break;

    default:
    }
  };

  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    console.log(enName, cnName, unitId, availability);
    axios
      .post("/api/products/add", {
        name_en: enName,
        name_cn: cnName,
        unit_id: unitId,
        availability: availability
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Product Name"
          name="enName"
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-name"
          label="Product Name Chinese"
          name="cnName"
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-name"
          label="Unit Id"
          name="unitId"
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <br />
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
    </div>
  );
}
