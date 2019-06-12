import '@/main'
import axios from 'axios'
console.log("十步杀一人，千里不留行，事了拂衣去，深藏功与名")

axios.get('/api/book/1011471481').then(res => {
  console.log(res)
  console.log('数据出来了')
})
