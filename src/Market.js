import Header from './Header'
import Skeleton from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

function Market() {
    toast.error('Error (500): Failed to connect to the market place', {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return(
        <div className="App">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Header />
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="py-12 bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{marginTop: '-50px'}}>
                                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Welcome, Demo User
                                </p><br />
                                    {/* <h1 style={{fontSize: '28px'}} align="left"><strong>Welcome, Demo!</strong></h1><br /> */}
                                    <span style={{color: 'red'}}>Market Unavailable</span>
                                    <br /><br />

                                    <Skeleton count={5} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default Market;