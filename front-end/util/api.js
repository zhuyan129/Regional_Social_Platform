//封装
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'//共用的url部分
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.data.meta.status !== 200) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})	
	})
}

/* myRequest({
	url:'',
	method:'POST'
}) */