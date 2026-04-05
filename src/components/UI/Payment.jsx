

function Payment() {
    return (
        <div className="p-6">

            <h3 className="text-lg tracking-tight font-bold text-zinc-900 mb-4">
                Scheduled Payments
            </h3>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200">

                    {/* head */}
                    <thead className="bg-zinc-50 ">
                        
                        <tr>

                            <th scope="col" className=" px-4 p-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                                Payee
                            </th>

                            <th scope="col" className=" px-4 p-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                                Amount
                            </th>

                            <th scope="col" className=" px-4 p-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                                Date
                            </th>

                            <th scope="col" className=" px-4 p-3 text-left text-xs font-medium text-zinc-600 uppercase tracking-wider">
                                Status
                            </th>

                        </tr>
                    </thead>


                    <tbody className="divide-y divide-zinc-200">
{/* row 1 */}
                        <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">

                                <div className="flex items-center space-x-2">

                                    <div className="size-7 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">

                                        <img src="/user-6.png" alt="profile" />
                                    </div>
                                    <span>Loan Payment</span>

                                </div>
                            </td>

                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                -$350.00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                Today, 15:00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-green-600 flex items-center">
                                <div className="bg-green-100 py-1 px-2 rounded-full">
                                    <span className="inline-block w-2 h-2 mr-1 rounded-full bg-green-500">

                                       
                                    </span>
                                     Approved
                                </div>
                            </td>

                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">

                                <div className="flex items-center space-x-2">

                                    <div className="size-7 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">

                                        <img src="/user-2.png" alt="profile" />
                                    </div>
                                    <span>Home Credit </span>

                                </div>
                            </td>

                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                -$1250.00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                Tommrow, 18:00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-orange-600 flex items-center">
                                <div className="bg-orange-100 py-1 px-2 rounded-full">
                                    <span className="inline-block w-2 h-2 mr-1 rounded-full bg-orange-500">

                                      
                                    </span>
                                      Pending
                                </div>
                            </td>

                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">

                                <div className="flex items-center space-x-2">

                                    <div className="size-7 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">

                                        <img src="/user-5.png" alt="profile" />
                                    </div>
                                    <span>Student Loan </span>

                                </div>
                            </td>

                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                -$1500.00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                Fri, 10:30
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-red-600 flex items-center">
                                <div className="bg-red-100 py-1 px-2 rounded-full">
                                    <span className="inline-block w-2 h-2 mr-1 rounded-full bg-red-500">

                                        
                                    </span>
                                    Declined
                                </div>
                            </td>

                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-900">

                                <div className="flex items-center space-x-2">

                                    <div className="size-7 bg-zinc-200 rounded-full center-item text-zinc-500 overflow-clip">

                                        <img src="/user-2.png" alt="profile" />
                                    </div>
                                    <span> Fees Payment</span>

                                </div>
                            </td>

                            <td className="p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                -$500.00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-zinc-600">
                                Sat, 12:00
                            </td>

                            <td className=" p-4 whitespace-nowrap text-sm font-medium text-blue-600 flex items-center">
                                <div className="bg-blue-100 py-1 px-2 rounded-full">
                                    <span className="inline-block w-2 h-2 mr-1 rounded-full bg-blue-500">

                                      
                                    </span>
                                      Approved
                                </div>
                            </td>

                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Payment