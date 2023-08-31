import { Stack } from "@mui/material";
import Link from "next/link";

function NavButtons() {
  return (
    <Stack direction="row" spacing={5}>
      <Link href="/view-stores">View Stores</Link>
      <Link href="/add-stores">Add Stores</Link>
      <Link href="/manage-stores">Manage Stores</Link>
    </Stack>
  );
}

export default NavButtons;
