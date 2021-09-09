import './SideNav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';

const SideNav = () => {

  return(
    <div className="SideNav">
      <h1>CleanSpace</h1>
      <a href="/"> <AiOutlineHome /> Home</a>
      <a href="#"> <RiDashboardLine /> Dashboard</a>
      <a href="/report"> <HiOutlineDocumentReport /> Report</a>
    </div>
  );
}

export default SideNav;