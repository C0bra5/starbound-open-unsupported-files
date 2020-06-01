// static data
let config = {
	"extensions" : {
		"title" : "Custom extensions",
		"description" : "Want to open more file types using using your system's default application, write the extensions below using comma separated values. (Ex:.myext,.myotherext,asd)",
		"type" : "string",
		"default" : "",
		"order" : 1
	},
	"defaultTypes" : {
		"title" : "Default extensions:",
		"description" : "The plugin defines a may of extensions as unsupported by default. You may re-add support by using the toggles in this section.",
		"type" : "object",
		"order" : 2,
		"properties" : {
		}
	}
};

const DefaultExtensions = require("./default-extensions");
// generate all the config entries for default types.
for(let i = 0; i < DefaultExtensions.length; i++) {
	let ext = DefaultExtensions[i];
	config.defaultTypes.properties[ext] = {
		title : "Open **." + ext + "** files externally.",
		type : "boolean",
		default : true
	}
}

module.exports = config;