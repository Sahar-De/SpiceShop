import React from "react";

const SendInfo = () => {
    return (
        <section className="p-8 bg-gray-50 rounded-lg my-8 bg-[url(/images/pattern.jpg)] bg-cover ">

            <div className="mb-6">
                <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-800">

                    Shipping Information
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image Section */}
                <div className="relative w-48 md:w-56">
                    <img
                        src="/images/delivery.svg"
                        alt="Motorcycle delivery rider"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>

                {/* Features Section */}
                <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 p-2">
                        <p className="text-gray-700">ارسال به موقع و تضمین شده</p>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 border-r-4 border-green-500 rounded">
                        <p className="font-medium text-gray-800">ارسال رایگان برای خریدهای بالای ۲۰۰ هزار تومان</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SendInfo; 