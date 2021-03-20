import Header from './Header';
import Footer from './Footer';

function Contact() {

    function submitForm(e) {
        e.preventDefault();
        var fsc = document.getElementById('fsc');
        fsc.classList.toggle('hide');
    }

    return (
        <div className="App">
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="sz-10 pb-8 bg-white sm:pb-16 md:pb-20  xl:pb-32">
                        <Header />
                        <main className=" md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div>
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="md:col-span-1">
                                        <div className="px-4 sm:px-0">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Us</h3>
                                            <div style={{color: 'red'}} align="left">
                                                <h1>For Urgent Use</h1>
                                                <p>Email: <a href="mailto:urgent@eloncoin.com" style={{color: 'blue'}}>urgent@eloncoin.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                        <form onSubmit={submitForm}>
                                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                    <div className="grid grid-cols-3 gap-6">
                                                        <div className="col-span-3 sm:col-span-2">
                                                            <span className="hide" id="fsc" style={{color: 'green'}}>Form Submitted Successfully</span>
                                                            <label align="left" htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                                                First Name
                                                            </label>
                                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                                <input required type="text" name="fn" id="fn" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label align="left" htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                            Inquiry
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea required id="inquiry" name="inquiry" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Inquiry ..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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

export default Contact;