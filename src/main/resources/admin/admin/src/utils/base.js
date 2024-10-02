const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto4dvi/",
            name: "springbooto4dvi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto4dvi/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宿舍管理系统"
        } 
    }
}
export default base
