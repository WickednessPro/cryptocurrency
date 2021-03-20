import React from 'react';
import Header from'./Header'
import Chart from './Chart';
import Footer from './Footer'

function StatsPage() {
    return (
        <div className="App">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Header />
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                          <div className="py-12 bg-white">
                          <h1 align="left"><strong>Current Statistics:</strong></h1>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                              <Chart />
                            </div>
                          </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StatsPage;