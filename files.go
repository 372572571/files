package swaggerFiles

import (
	"embed"
)

//go:embed dist/*
var dist embed.FS

// FS holds embedded swagger ui files
// var FS, _ = fs.Sub(dist, "dist")
