import logo from './assets/logo.png';

export default function ComingSoon() {
    return (
        <div className="bg-gray-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center h-screen text-gray-700">
                    <div className="max-w-lg">
                        <div className="text-center">
                            <img className="h-12 mx-auto" src={logo} alt="logo" />
                            <h1 className="my-3 text-3xl font-semibold text-gray-700">Coming Soon</h1>
                            <p className="text-gray-500">Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}