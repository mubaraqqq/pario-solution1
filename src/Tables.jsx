import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Tables = ({ statesData }) => {
  // eslint-disable-next-line array-callback-return
  statesData = statesData.slice().sort((a, b) => {
    if (a.state < b.state) return -1;
    if (a.state > b.state) return 1;
  });

  return (
    <TableContainer component={Paper} sx={{ bgcolor: "gray" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>States</TableCell>
            <TableCell>Confirmed Cases</TableCell>
            <TableCell>Cases on Admission</TableCell>
            <TableCell>Deaths</TableCell>
            <TableCell>Discharged</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statesData.map((state) => (
            <TableRow
              key={state.state}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {state.state}
              </TableCell>
              <TableCell>{state.confirmedCases}</TableCell>
              <TableCell>{state.casesOnAdmission}</TableCell>
              <TableCell>{state.death}</TableCell>
              <TableCell>{state.discharged}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
