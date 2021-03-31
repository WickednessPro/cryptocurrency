import { Link } from 'react-router-dom';
import ec from './assets/coin.png';
import 'cookie-notice/dist/cookie.notice.min.js'

export default function Header() {
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function navToggle() {
    var menu = document.getElementById('mobilemenu');

    menu.classList.toggle('hidden');
  }

  // Cookie NoticeJS
  // cookieNoticeJS();
    return (   
        <div className="header">  
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">  
                      <img className="h-8 w-auto sm:h-10 logo" src={ec} alt="Logo" />
                    </Link>
                    <Link to="/"><span style={{marginLeft: '10px'}} className="hidden md:block font-medium">ElonCoin</span></Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button onClick={navToggle} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <Link to="/stats" className="font-medium text-indigo-600 hover:text-indigo-500">Stats
                  </Link>
                  <Link to="/market" className="font-medium text-indigo-600 hover:text-indigo-500">Marketplace</Link>
                  {getCookie('login') ? (
                  <>
                    <Link to="/profile" className="font-medium text-indigo-600 hover:text-indigo-500">Profile</Link>
                    <Link to="/logout" className="font-medium text-indigo-600 hover:text-indigo-500">Logout</Link>
                  </>
                  ) : (
                  <>
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link>
                  </>
                  )}
                </div>
              </nav>
            </div>
                
            <div id="mobilemenu" className="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src={ec} alt="Logo" />
                  </div>
                  <div className="-mr-2">
                    <button onClick={navToggle} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <svg className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/stats" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Stats
                    {/* <span className="bg-red-600 p-1 rounded text-white text-xs ml-2">LIVE</span> */}
                  </Link>
                  <Link to="/market" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</Link>
                  {getCookie('login') ? (
                  <>
                    <Link to="/profile" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">Profile</Link>
                    <Link to="/logout" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">Logout</Link>
                  </>
                  ) : (
                  <>
                    <Link to="/login" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">Log in</Link>
                  </>
                  )}
                </div>
              </div>
            </div>
            
        </div>
    )
}