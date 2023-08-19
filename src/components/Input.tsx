import { ComponentProps } from "react";

type InputSearchProps = {

}&ComponentProps<'input'>
function Input({onChange}:InputSearchProps){
    return(<input onChange={onChange} className="form-control me-2" id="search" type="search" placeholder="Search..." aria-label="Search"/>)
}
export default Input;