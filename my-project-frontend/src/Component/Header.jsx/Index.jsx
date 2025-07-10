import logo from "../../Assets/logo.png";
import Button from '@mui/material/Button';


const Header =()=>{
    return(
        <>
          <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Due to the <b>covid 19</b>  epidemic, orders may be processed with a slight delay</p>
            </div>
            </div>

            <div className="header">
            <div className="container">
            <div className="row">
            <div className="logoWrapper d-flex align-item-center col-sm-2">
                   <img src={logo} alt="" />
                   
            </div>
            <div className="col-sm-10 d-flex align-item-center part2">
            <button className="countryDrop">

            </button>

            </div>
            </div>
            </div>
            </div>

            </div>
        </>
    )
}
 export default Header;