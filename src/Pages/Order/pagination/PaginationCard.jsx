// import { Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
const PaginationCard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
        {/* <Typography>{page}</Typography> */}
      <Stack spacing={2}>
        <Pagination
        onChange={(e,value)=> setPage(value) }
         defaultPage={page} count={10} color="primary" />
      </Stack>
    </div>
  );
};

export default PaginationCard;
