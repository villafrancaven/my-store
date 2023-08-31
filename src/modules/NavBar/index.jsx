import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { NavBarContainer } from "./layout/NavBarLayout";
import NavOptions from "./NavOptions";
import Link from "next/link";

function NavBar() {
  return (
    <NavBarContainer>
      <Stack direction="row" spacing="4px" component={Link} href="/">
        <Image
          src="/store.svg"
          alt="store icon"
          width={18}
          height={18}
          style={{ marginTop: "2px" }}
        />
        <Stack direction="row">
          <Typography sx={{ fontSize: 17 }}>My</Typography>
          <Typography component="span" sx={{ fontSize: 17, fontWeight: 700 }}>
            Store
          </Typography>
        </Stack>
      </Stack>

      <NavOptions />
    </NavBarContainer>
  );
}

export default NavBar;
