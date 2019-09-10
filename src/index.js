import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import g from './generatorDemo';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={tableToExcel}>json导出xls文件</button>
      </div>
    )
  }
}

function tableToExcel() {
  console.log('bai');
  var jsonData = [{
      name: '路人甲',
      phone: '123456',
      email: '123@123456.com'
  }, {
      name: '炮灰乙',
      phone: '123456',
      email: '123@123456.com'
  }]

  //列标题
  var table = '<tr><td>姓名</td><td>电话</td><td>邮箱</td></tr>'

  //循环遍历，每行加入tr标签，每个单元格加td标签
  jsonData.forEach(function(item) {
      table += '<tr>';
      for (let key in item) {
          //增加\t为了不让表格显示科学计数法或者其他格式
          table += `<td>${item[key] + '\t'}</td>`
      }
      table += '</tr>';
  })

  //Worksheet名
  var worksheet = 'Sheet1'
  //下载的表格模板数据
  var template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
                        xmlns:x="urn:schemas-microsoft-com:office:excel" 
                        xmlns="http://www.w3.org/TR/REC-html40">
                    <head>
                      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                      <!--[if gte mso 9]>
                      <xml>
                        <x:ExcelWorkbook>
                          <x:ExcelWorksheets>
                            <x:ExcelWorksheet>
                              <x:Name>${worksheet}</x:Name>
                              <x:WorksheetOptions>
                                <x:DisplayGridlines/>
                              </x:WorksheetOptions>
                            </x:ExcelWorksheet>
                          </x:ExcelWorksheets>
                        </x:ExcelWorkbook>
                      </xml>
                      <![endif]-->
                    </head>
                    <body>
                      <table>${table}</table>
                    </body>
                  </html>`
  // 下载模板
  window.location.href = 'data:application/vnd.ms-excel;base64,' + base64(template)
}
//输出base64编码
function base64(s) { return window.btoa(unescape(encodeURIComponent(s))) }

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

// setInterval(tick, 1000)
tick()