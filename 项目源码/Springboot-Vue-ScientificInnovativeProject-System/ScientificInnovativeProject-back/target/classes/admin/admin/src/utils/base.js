const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengkechuangxiangmu/",
            name: "daxueshengkechuangxiangmu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengkechuangxiangmu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生科创项目"
        } 
    }
}
export default base
