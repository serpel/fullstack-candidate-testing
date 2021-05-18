interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => (

    <div className="flex flex-col w-full pl-0 lg:p-0 md:space-y-2">
            <div className="overflow-auto h-screen pb-24 pr-0 pl-1 sm:flex-row">
                <div className="flex flex-col flex-wrap">
                    <div className="w-full px-1 xl:pl-4 xl:pr-4 lg:pl-0 md:pl-0">
                        <div className="mb-4 mx-0">
                            <div className="shadow-lg rounded bg-white dark:bg-gray-600 w-full">      
                                <div>{message}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
);
 
export default ErrorMessage;