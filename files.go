package swaggerFiles

import (
	"embed"
	"io/fs"
)

//go:embed dist/*
var dist embed.FS

// FS holds embedded swagger ui files
var FS, _ = fs.Sub(dist, "dist")

// func NewHandler() *webdav.Handler {
// 	return &webdav.Handler{
// 		FileSystem: FS,
// 		LockSystem: webdav.NewMemLS(),
// 	}
// }
