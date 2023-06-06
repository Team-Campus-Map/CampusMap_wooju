import React,{Component} from 'react'
import Information from './Myinformation'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from'reactstrap';

class MySystem extends Component{
  constructor (props){
    super(props);
    this.state ={
      dropdownOpen: false,
    }
  }
  toggle = (e) => {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }
 
  handleInformationClick = () => {
    <Information/>
  }
  render(){
    return(
    <>
      <ButtonDropdown isOpen = {this.state.dropdownOpen} toggle = {this.toggle}>
        <DropdownToggle caret> 계정관리 </DropdownToggle>
        <DropdownMenu>
          
          <DropdownItem onClick = {this.handleInformationClick}>내정보  </DropdownItem>
          
        </DropdownMenu>
      </ButtonDropdown>
      
      </>
    )
    
  }
}
export default MySystem;