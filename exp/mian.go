package main

import (
	"embed"
	// "github.com/swaggo/swag"
)

//go:embed admin.swagger.json
var doc embed.FS

// func main() {
// 	r := gin.Default()
// 	SwaggerDoc(r)
// 	r.Run(":9981")
// }

// func SwaggerDoc(r gin.IRouter) {
// 	r.GET("/doc/*any", func(ctx *gin.Context) {
// 		// 获取url+/doc/ 后面的路径
// 		path := strings.TrimPrefix(ctx.Request.URL.Path, "/doc/")
// 		switch path {
// 		case "":
// 			path = "doc.html"
// 		case "doc":
// 			path = "doc.html"
// 		case "services.json":
// 			// res := &docs.Admin{}
// 			data, err := doc.ReadFile("admin.swagger.json")
// 			if err != nil {
// 				ctx.Abort()
// 				return
// 			}
// 			ctx.String(http.StatusOK, string(data))
// 			return
// 		}
// 		ctx.FileFromFS(path, http.FS(swaggerFiles.FS))
// 		return
// 	})
// }
