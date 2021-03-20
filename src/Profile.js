import { Link } from 'react-router-dom';
import Header from './Header';
import Table from './Table';
import Footer from './Footer';

function Profile() {
    return (
        <div className="App">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Header />
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="py-12 bg-white">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <h1 style={{fontSize: '28px'}} align="left"><strong>Welcome, Demo!</strong></h1>
                                    <h3 style={{fontSize: '14px'}} align="left">Current Balance: <span style={{color: 'green'}}>$3.21</span><br /><br />
                                    <Link to="/market" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        Buy ElonCoin
                                    </Link>
                                    <Link to="/market" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        Sell ElonCoin
                                    </Link></h3><br /><br />
                                    <h1 align="left"><strong>Transactions:</strong></h1><br />
                                    <Table />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;