import React, { Component } from 'react';
import "../CSS/Mypage.css";

class MySchedule extends Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <table class="table_ty1" width={600} height={600} >
        <tr>
          <th></th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
        </tr>
        <tr>
          <th>9</th>
          <td></td>
          <td rowspa = {"2"} className = 'name_box1'> 이산 수학</td>
          <td rowspan = {"3"} className = 'name_box2' >공학수학</td>
          <td rowspan = {"2"} className = 'name_box3' >영어</td>
          <td></td>
        </tr>
        <tr>
          <th>10</th>
          <td></td>
        </tr>
        <tr>
          <th>11</th>
          <td className = 'name_box4'>기독교</td>
          <td></td>
          <td className = 'name_box5'>채플</td>
          <td></td>

        </tr>
        <tr>
          <th>12</th>
          <td></td>
          <td className = 'name_box6'>삶과 철학</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>1</th>
          <td rowSpan = {"3"} className= 'name_box7'>자바스크립트</td>
          <td className = 'name_box8'>체육</td>
          <td rowSpan = {"2"} className = 'name_box9'>c++</td>
          <td rowSpan = {"2"} className = 'name_box10'>알고리즘</td>
          <td></td>
        </tr>
        <tr>
          <th>2</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>3</th>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
        <tr>
          <th>4</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>5</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </table>
    )

  }
}
export default MySchedule;