let sum=prompt("请输入银行卡总额:")
let df = prompt('请输入电费:')
let sf = prompt('请输入水费:')
let wf = prompt('请输入网费:')
let rest=sum-df-sf-wf
document.write(`<table>
    <tr>
        <th>总额</th>
        <th>电费</th>
        <th>水费</th>
        <th>网费</th>
        <th>余额</th>
    </tr>
    <tr>
        <td>${sum}元</td>
        <td>${df}元</td>
        <td>${sf}元</td>
        <td>${wf}元</td>
        <td>${rest}元</td>
    </tr>
</table>`)