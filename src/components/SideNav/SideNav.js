import './SideNav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';
import { IoLanguageSharp } from 'react-icons/io5';
import { FaTable } from 'react-icons/fa';


const SideNav = () => {

  return(
    <div className="SideNav">
      <h1>CleanSpace</h1>
      <a href="/"><div className="flex"><AiOutlineHome className="navIcon"/> Home</div></a>
      <a href="#"><div className="flex"><RiDashboardLine className="navIcon"/> Dashboard</div></a>
      <a href="/localisation"><div className="flex"><IoLanguageSharp className="navIcon"/> Localisation</div></a>
      <a href="/debugLog"><div className="flex"><FaTable className="navIcon"/> Debug Logs</div></a>
      <a href="/report"><div className="flex"><HiOutlineDocumentReport className="navIcon"/> Report</div></a>
      <a href="#"></a>
      
    </div>
  );
}

export default SideNav;