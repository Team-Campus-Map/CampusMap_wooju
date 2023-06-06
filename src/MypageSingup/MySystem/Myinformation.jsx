import React, { Component } from "react";
import Myname from './MyNname';
import "../Mypage.css";
import Swal from 'sweetalert2';
import MySystem from './MySystem';

class Myinformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '홍길동',
      email: 'hong@naver.com',
      inputnameval: '',
      inputemailval:'',
    }
  }

  change = (e) => {
    var val = e.target.value;
    this.setState({
      inputnameval: val, // 이름 변경을 위한 입력값
      inputemailval: val, // 이메일 변경을 위한 입력값
    })
  }

  NameChange = () => {
    this.setState({
      name: this.state.inputnameval
    }, () => {
      this.saveAlert('이름 저장', 'center'); // 이름 변경 알림 메시지
    });
  }

  EmailChange = () => {
    this.setState({
      email: this.state.inputemailval
    }, () => {
      this.saveAlert('이메일 저장', 'center'); // 이메일 변경 알림 메시지
    });
  }

  saveAlert = (flag, positionflag) => {
    Swal.fire({
      position: positionflag,
      icon: 'success',
      title: flag + '되었습니다.',
      showCancelButton: false,
      timer: 1500
    })
  }

  render() {
    const inputStyle = {
      marginRight: '10px'
    };
    return (
      <div className="divStyle">
        <input type="text" placeholder="사용자 이름" onChange={this.change} />
        <button onClick={this.NameChange}>이름 수정</button>
        <tr></tr>
        <input type="text" placeholder="이메일" onChange={this.change} />
        <button onClick={this.EmailChange}>이메일 수정</button>
        <div><Myname name={this.state.name}/></div>
        <div>{this.state.email}</div>
        
      </div>
    )
  }
}

export default Myinformation;