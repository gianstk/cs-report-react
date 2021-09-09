import './SideNav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';

const SideNav = () => {

  return(
    <div className="SideNav">
      <h1>CleanSpace</h1>
      <a href="/"><div className="flex"><AiOutlineHome className="navIcon"/> Home</div></a>
      <a href="#"><div className="flex"><RiDashboardLine className="navIcon"/> Dashboard</div></a>
      <a href="/report"><div className="flex"><HiOutlineDocumentReport className="navIcon"/> Report</div></a>
    </div>
  );
}

export default SideNav;