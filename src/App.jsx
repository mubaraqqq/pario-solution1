import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "./store/data";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Tables from "./Tables";

function App() {
  const [loading, setLoading] = useState(false);
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  let statesData = data.states;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let response = await fetch("https://covidnigeria.herokuapp.com/api");
        if (response.status === 200) {
          let apiData = await response.json();
          dispatch(updateData(apiData.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <Stack direction="row" py="1em" justifyContent="center">
          <Typography component="h1" variant="h3">
            Covid Statistics
          </Typography>
        </Stack>
      </header>
      {loading ? (
        <Box
          height="90vh"
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ fontSize: 70 }} />
        </Box>
      ) : (
        <>
          <aside>
            <Typography variant="body1">
              Total Samples Tested: {data.totalSamplesTested}
            </Typography>
            <Typography variant="body1">
              Total Confirmed Cases: {data.totalConfirmedCases}
            </Typography>
            <Typography variant="body1">
              Total Active Cases: {data.totalActiveCases}
            </Typography>
            <Typography variant="body1">
              Discharged: {data.discharged}
            </Typography>
            <Typography variant="body1">Deaths: {data.death}</Typography>
          </aside>
          <main>{statesData && <Tables statesData={statesData} />}</main>
        </>
      )}
    </div>
  );
}

export default App;
