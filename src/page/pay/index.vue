<template>
  <div class="payproject">
    <div class="container">
      <div class="row">
        <div class="col-md-2">2222</div>
        <div class="col-md-2">2222</div>
        <div class="col-md-2">2222</div>
      </div>
    </div>
    <div class="paytop">
      <div style="margin-left: 20px;">
        <img class="topimg" src="../../assets/u7.png">
        <span style="font-size: 25px;font-family: 'Arial Black'">公交票款支付系统</span>
      </div>
    </div>
    <div class="lfloat ldiv">
      <ul id="nav">
        <li class="aa" id="tb_1" @click="hoverli(1);"><div style="margin-top: 30px;"><img src="../../assets/button_01.png"/><p class="textSet">投币积分</p></div></li>
        <li class="aa" id="tb_2" @click="hoverli(2);"><div style="margin-top: 30px;"><img src="../../assets/button_03.png"/><p class="textSet">刷卡支付</p></div></li>
        <li class="aa" id="tb_3" @click="hoverli(3);"><div style="margin-top: 30px;"><img src="../../assets/button_02.png"/><p class="textSet">扫码支付</p></div></li>
        <li class="aa" id="tb_4" @click="hoverli(4);"><div style="margin-top: 30px;"><img src="../../assets/button_04.png"/><p class="textSet">支付分析</p></div></li>
      </ul>
    </div>
    <div class="lfloat" style="width:90%;">
      <div id="newinfo">
        <div class="ctt list2">
          <div class="dis" id="tbc_01">
            <p>1111</p>
          </div>
          <div class="undis" id="tbc_02">
            <p>2222</p>
          </div>
          <div class="undis" id="tbc_03">
            <div class="paysheet">
              <div class="allincome">

              </div>
              <div class="alipayincome">
                <div class="incomeimg">
                  <img style="max-width: 80px" src="../../assets/u273.png" alt=""/>
                  <p>支付宝对账</p>
                </div>
              </div>
              <div class="wechatincome">
                <div class="incomeimg">
                  <img style="max-width: 80px" src="../../assets/u275.png" alt=""/>
                  <p>微信对账</p>
                </div>
              </div>
              <div class="bankincome">
                <div class="incomeimg">
                  <img style="max-width: 80px" src="../../assets/u277.png" alt=""/>
                  <p>银联对账</p>
                </div>
              </div>
            </div>
            <div class="paydetail">
              <div class="paysearch" >

              </div>
              <div class="paydata">
                <table class="table table-hover">
                  <caption>交易记录</caption>
                  <thead>
                  <tr>
                    <th>交易时间</th>
                    <th>路线</th>
                    <th>车辆</th>
                    <th>驾驶员</th>
                    <th>乘客识别码</th>
                    <th>票价(元)</th>
                    <th>交易来源</th>
                    <th>交易状态</th>
                    <th>详情</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="success">
                    <td>Tanmay</td>
                    <td>Bangalore</td>
                    <td>560001</td>
                    <td>Tanmay</td>
                    <td>Bangalore</td>
                    <td>560001</td>
                    <td>Tanmay</td>
                    <td>Bangalore</td>
                    <td>560001</td>
                  </tr>
                  <tr class="danger">
                    <td>Sachin</td>
                    <td>Mumbai</td>
                    <td>400003</td>
                    <td>Sachin</td>
                    <td>Mumbai</td>
                    <td>400003</td>
                    <td>Sachin</td>
                    <td>Mumbai</td>
                    <td>400003</td>

                  </tr>
                  <tr class="warning">
                    <td>Uma</td>
                    <td>Pune</td>
                    <td>411027</td>
                    <td>Uma</td>
                    <td>Pune</td>
                    <td>411027</td>
                    <td>Uma</td>
                    <td>Pune</td>
                    <td>411027</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="pagination">
                <ul class="pagination">
                  <li><a href="#">&laquo;</a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li class="disabled"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div class="undis" id="tbc_04">
            <p>4444</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pay',
    data () {
      return {
        msg: 'pay...'
      }
    },
    methods: {
      g (o) { return document.getElementById(o) },
      hoverli (n) {
        for (var i = 1; i <= 4; i++) {
          this.g('tb_' + i).className = 'aa'
          this.g('tbc_0' + i).className = 'undis'
        }
        this.g('tbc_0' + n).className = 'list2'
        this.g('tb_' + n).className = 'bb'
      },
      fun () {
        this.hoverli(3)
      },
      hoverli2 (n) {
        for (var i = 1; i <= 4; i++) {
          this.g('js_' + i).className = 'aa'
          this.g('jsc_0' + i).className = 'undis'
        }
        this.g('jsc_0' + n).className = 'list2'
        this.g('js_' + n).className = 'bb'
      },
      fun2 () {
        this.hoverli2(3)
      },
      hoverli3 (n) {
        for (var i = 1; i <= 4; i++) {
          this.g('be_' + i).className = 'aa'
          this.g('bec_0' + i).className = 'undis'
        }
        this.g('bec_0' + n).className = 'list2'
        this.g('be_' + n).className = 'bb'
      },
      fun3 () {
        this.hoverli2(3)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    font-size:13px;
    font-family:Arial;
  }
  .payproject
  {
    width: auto;
    height: auto;
    line-height: 40px;
  }
  .paytop
  {
    width: auto;
    height: 50px;
  }
  .paysheet
  {
    margin-left: 20px;
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    background: #FFF;
    width: auto;
    height: 150px;
  }
  .paysheet .allincome
  {
    float: left;
    height: 100%;
    width: 40%;
    background: #ffffff;
  }
  .paysheet .alipayincome
  {
    float: left;
    height: 99%;
    width: 20%;
    background: #fff;
    border: solid 1px #f5f5f5;
    text-align: center;
  }
  .paysheet .wechatincome
  {
    float: left;
    height: 99%;
    width: 20%;
    background: #fff;
    border: solid 1px #f5f5f5;
    text-align: center;
  }
  .paysheet .bankincome
  {
    float: left;
    height: 100%;
    width: 19%;
    background: #fff;
    border-left: solid 1px #f5f5f5;
    text-align: center;
  }
  .paydetail
  {
    margin-top: 20px;
    margin-left: 20px;
    -webkit-box-shadow: #666 0px 0px 10px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
    width: auto;
    height: 550px;
    background: #ffffff;
  }
  #nav li
  {
    list-style:none;
    width:100%;
    height:140px;
    margin-top:0;
  }
  #nav li:hover
  {
    background-color:#369FDC;
  }
  .ldiv p
  {
    color:#fff;
  }
  .topimg
  {
    width:60px;
  }
  .aa
  {
    border-right:0px;
    cursor:hand;
    border-top:3px solid #AAC7E9;
    text-align:center;
  }

  .bb
  {
    border:0px;
    cursor:hand;
    border-top:3px solid #ff9900;
    text-align:center;
  }
  .cc
  {
    border-top:4px solid #ff66ff;
    background:#fcf;
    cursor:hand;
  }
  .list2
  {
    font-size:13px;
    line-height:40px;
    padding:3px;
    text-align:left;
    background:#FFFFFF;
  }
  .list2 li
  {
    color:#555;
    font-size:13px;
    line-height:40px;
    padding:0 0 0 10px;
  }
  .list2 a
  {
    text-decoration: underline;
  }
  .lfloat
  {
    float:left;
  }
  .rfloat
  {
    float:right;
  }
  .rfloat .paysheet
  {

  }
  .ldiv
  {
    width:10%;
    border:0px;
    height:650px;
    background-color: #405668;
    padding-top: 7%;
  }
  .ctt
  {
    padding:0;
    clear:both;
    border:0px;
    text-align:left;
    height:755px;
  }
  .dis
  {
    display:block;
  }
  .undis
  {
    display:none;
  }
  li
  {
    list-style: none;
  }
  form, ul
  {
    padding:0;
    margin:0;
  }
  .table th, .table td
  {
    padding: 2px;
  }
  .paysearch
  {
    width: auto;
    height: 50px;
  }
  .paydata
  {
    width: auto;
    height: 400px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .pagination
  {
    float: right;
  }
  .incomeimg
  {
    margin-top: 30px;
  }

</style>
