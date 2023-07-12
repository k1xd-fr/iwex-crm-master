import Profiles from "@/components/Profiles";
import { maxHeight } from "@mui/system";

const Profile: React.FC = () => {
  return (
    <div
      style={{
        background: "#ffcc00 ",
        padding: "2% 0",
        height: "100%",
      }}
    >
      <Profiles></Profiles>
    </div>
  );
};

export default Profile;
