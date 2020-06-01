// Generate the list of non-text files.
// sources:
// https://knowledge.autodesk.com/support/3ds-max/learn-explore/caas/CloudHelp/cloudhelp/2020/ENU/3DSMax-Data-Exchange/files/GUID-566E59EE-8221-4AC6-824B-5062C5AE0B32-htm.html
// https://knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2019/ENU/Maya-ManagingScenes/files/GUID-69BC066D-D4D8-4B12-900C-CF42E798A5D6-htm.html
// https://www.gimp.org/about/introduction.html
// https://helpx.adobe.com/ca/acrobat/kb/supported-file-formats-acrobat-reader.html
// https://en.wikipedia.org/wiki/List_of_file_formats
const DefaultExtensions = [
	"3ds",
	"7z",
	"ai", "avi",
	"bat", "blend", "bz2", "bmp",
	"catpart", "catproduct",
	"ddf", "dds", "dem", "dib", "doc", "docx", "dst", "dvl", "dvl3", "dvl4", "dwg", "dwf", "dwg", "dwt", "dxf",
	"editma", "editmb", "exp",
	"fla", "flt", "fxb",
	"g", "gal", "gif", "gz",
	"htr",
	"iam", "ico", "ige", "iges","igs", "indd", "ipt",
	"jpg", "jpeg", "jt",
	"ma", "mb", "mdl", "mkv", "model", "mng", "mov", "mp4", "mpp",
	"neu", "nif",
	"obj", "odf", "odg", "odp", "ods", "odt", "ogg",
	"pcx", "pdf", "pdn", "png", "ppt", "pptx", "prc", "prt", "psb", "psd",
	"rar", "rle", "rtf", "rvt",
	"sai", "sat", "session", "shp", "skp", "sldprt", "sldasm", "sln", "step", "stp", "stl", "stw", "sxc", "sxd", "sxi", "sxw",
	"tar", "trc", "tiff",
	"u3d",
	"vsd", "vsdx", "vssx",
	"wav", "webp", "webm", "wire", "wpd", "wrl", "wrz", 
	"xcf", "xfl", "xls", "xlsx", "xmb", "xpm", "xz",
	"zip"
];

module.exports = DefaultExtensions;