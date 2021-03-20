import './../assets/error.css';
// import './../App.css';

export default function Error() {
    return (
        <div className="text-center" align="center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
            {/* Insert Back Button */}
        </div>
    )
}