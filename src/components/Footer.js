import React, { Component } from 'react'
import './Footer.css';

class Footer extends Component{
  render(){
    return(
        <div>
        <div className={this.props.whereFooter}>
        <p className="f">Mã nguồn của hyperion0201 tại <a href="https://github.com/hyperion0201/thithuqs-remastered"><i>GitHub.</i>
        </a> Được thiết kế và cập nhật bởi <a href="https://fb.com/nmv.lhp">Nguyễn Minh Văn.</a> <br></br> Bộ câu hỏi cập nhật vào tháng 01/2021 </p>
        
        
        </div>
        </div>
    );
  }
}

export default Footer;