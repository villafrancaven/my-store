import { Button, Typography, useMediaQuery } from "@mui/material";
import BackgroundLayout from "./layout/BackgroundLayout";
import BackgroundInfo from "./layout/BackgroundInfo";
import { useRouter } from "next/navigation";

function HomeModule() {
  const router = useRouter();
  const sm = useMediaQuery("(max-width:720px)");

  const handleJoinNow = () => {
    router.push("/add-stores");
  };

  return (
    <BackgroundLayout>
      <BackgroundInfo>
        <Typography variant={sm ? "h5" : "h4"}>
          We are here for you in every step
        </Typography>
        <Typography sx={{ m: "10px", fontSize: "12px" }}>
          Build your dream store and join us, at the comfort of your home.
        </Typography>
        <Button
          size={sm ? "small" : "large"}
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
