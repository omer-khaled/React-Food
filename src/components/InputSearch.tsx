import { ChangeEvent, ReactElement, useCallback, useState } from "react";
import ListSearch from "./ListSearch";
import Input from "./Input";
function InputSearch():ReactElement{
    const [value,setValue] = useState<string|null>(null);
    // cach this function becous every evaluating of component this function not rebuild every time
    const onChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    },[]);
    return(
        <>     
           <form className="d-flex mt-2 w-100" role="search">
                <div className="d-flex flex-row flex-nowrap align-items-center justify-content-between w-100">
                    <label htmlFor="search" className="text-dark w-fitcontent me-2">Explore new meals</label> 
                    <div className="flex-grow-1">
                        <Input onChange={onChange} />
                    </div>
                </div>
            </form>
            <ListSearch value={value} />
        </>
    );
}
export default InputSearch;