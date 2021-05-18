const Detail = ({item = {}, isJobDetailSelected = false}) => {

    if(!isJobDetailSelected) return <></>;

    return ( 
        <div className="text-sm">
            <div className="flex flex-row py-1">
                    <div className="flex-1 font-semibold"> 
                        Department:
                    </div>
                    <div className="flex-1 text-gray-500">
                        {item['department'].join(", ")}
                    </div>
                    <div className="flex-1">
                    </div>
            </div>
            <div className="flex flex-row py-1">
                    <div className="flex-1 font-semibold"> 
                        Hour / shifts:
                    </div>
                    <div className="flex-1 text-gray-500">
                        {item['hours'].join(" - ")} / {item['work_schedule']}
                    </div>
                    <div className=""> 
                        <a href="#" className="mr-6 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-400 font-medium border-2 border-blue-400">
                            Save Job
                        </a>                    
                    </div>
            </div>
            <div className="flex flex-row py-1">
                <div className="flex-1 font-semibold"> 
                    Summary:
                </div>
                <div className="flex-1 text-gray-500">
                        {item['description']}
                </div>
                <div className="flex-1 text-gray-500">
                </div>
            </div>
        </div>
    );
}
 
export default Detail;