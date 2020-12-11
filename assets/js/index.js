/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...
//0.写一个默认数据库
var arr = [
  { thing: '吃饭', },
  { thing: '睡觉', },
  { thing: '打豆豆', },
]


var xuan = function fn() { 
  var str = ''
  for (var i = 0; i < arr.length; i++) { 
      str +=`
      <li>
        <input type="checkbox" />
        <p onclick="edit(${arr[i+1]})">${arr[i].thing}</p>
        <a href="javascript:remove(${arr[i+1]})">-</a>
      </li>
    `
    $('.demo-box').html(str)
  }
  $('#todocount').text($("#todolist li").length)
  

}

//1.获取输入框,添加回车事件,回车之后获取输入框内的内容,并将内容两端的空格删除,添加到待办区,事件完成后清空文本框

 $('#title').on('keydown', function (e) {
  //判断是否为回车
  if (e.keyCode === 13) { 
    const text = $('input').val()
    //书写一个判断空格的正则
    reg = /(^\s*)|(\s*$)/g
    if (reg.test(text)) { 
      function trim(str) { 
        return str.replace(reg, "")        
      }
      var doing = trim(text)
      // return doing 
    }
    // console.log(doing)
    var aaa = {
      thing:doing
    }
    arr.push(aaa)
    console.log(arr)
    xuan()
    $('#title').val("")

  }
  
 })
 $('#todolist').on('click', 'a', function () { 
  var index = $(this).siblings('input').attr('index')
  arr.splice(index, 1)
  xuan()
})
