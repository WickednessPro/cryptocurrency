import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <nav id="footer">
                <div className="container mx-auto pt-8 pb-4">
                    <div className="pt-4 md:flex md:items-center md:justify-center " style={{borderTop:'1px solid white'}}>
                        <ul>
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><Link className="text underline text-small" to="/tos">Terms Of Service</Link></li>
                            {/* <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><Link className="text underline text-small" to="/cookie">Cookie policy</Link></li> */}
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><Link className="text underline text-small" to="/privacy">Privacy</Link></li>
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><Link className="text underline text-small" to="/contact">Contact Us</Link></li>
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2">&copy; <Link to="/" style={{color: 'blue'}}>ElonCoin</Link>, 2021</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Footer;