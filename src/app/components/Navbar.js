import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const Navbar = () => {
  return (
    <nav className="w-24 h-screen bg-gray-800 flex justify-center py-8">
      <ul className="flex flex-col gap-10"> 
        <HomeOutlinedIcon fontSize="large" />
        <SchoolOutlinedIcon fontSize="large" />
        <AssessmentOutlinedIcon fontSize="large" />
        <NotificationsNoneOutlinedIcon fontSize="large" />
        <PeopleOutlinedIcon fontSize="large"/>
      </ul>
    </nav>
  );
};

export default Navbar;
