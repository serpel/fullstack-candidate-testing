const FilterModal = ({filters = [], isShowMoreSelected = false, onFilterClose}) => {

    if(!isShowMoreSelected) return <></>;

    return ( 
        <div className="fixed z-10 inset-0" aria-labelledby="modal-title" role="dialog">
          <div className="flex flex-col justify-center pt-4 px-4 pb-20 flow-root w-full text-center sm:p-0 flex flex-col">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " aria-hidden="true"></div>
        
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-2/3">
                <div className="bg-white pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <p className="text-lg leading-6 font-medium text-gray-800 border-b pl-2 pb-4" id="modal-title">
                        Deparment
                      </p>  
                      <div onClick={onFilterClose} class="modal-close absolute top-0 right-0 cursor-pointer mt-4 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div> 
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="flex flex-wrap">
                          {filters.map(filter => <div className="my-2 mx-auto w-1/3">{filter.key} <span className="text-gray-400">{filter.doc_count}</span></div>)}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    );
}
 
export default FilterModal;