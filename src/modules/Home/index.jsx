import { Button, Typography } from "@mui/material";
import BackgroundLayout from "./layout/BackgroundLayout";
import BackgroundInfo from "./layout/BackgroundInfo";
import { useRouter } from "next/navigation";

function HomeModule() {
  const router = useRouter();

  const handleJoinNow = () => {
    router.push("/add-stores");
  };

  return (
    <BackgroundLayout>
      <BackgroundInfo>
        <Typography variant="h5">We are here for you</Typography>
        <Typography sx={{ m: "10px", fontSize: "12px" }}>
          Build your dream store and join us, at the comfort of your home.
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ mt: "20px" }}
          onClick={handleJoinNow}
        >
          <Typography component="span" sx={{ fontSize: "12px" }}>
            Join now
          </Typography>
        </Button>
      </BackgroundInfo>
    </BackgroundLayout>
  );
}

export default HomeModule;
