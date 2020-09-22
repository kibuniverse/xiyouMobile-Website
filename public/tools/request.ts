
interface requestObjIProps {
    method?: string
    url: string
    data?: FormData
    headers?: any
}

export default new class requests {
    /**
     * 
     * @param requestObj 参数
     * @function 发送请求函数
     */
    public request(requestObj: requestObjIProps) {
        const method: string = requestObj.method as string | 'get'
        const url: string = requestObj.url
        const headers: Object = requestObj.headers
        const data: FormData = requestObj.data
        return new Promise(reslove => {
            const xhr = new XMLHttpRequest()
            xhr.open(method, url, false)
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key])
            })
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                        reslove(xhr.responseText)
                    }
                }
            }
            xhr.send(data)
        })

    }
}
