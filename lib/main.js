const CompositeDisposable = require('atom').CompositeDisposable;
const Path = require('path');
const Shell = require('shell');
module.exports = {

	config : require('./config'),
	subscriptions : null,
	unsupportedExtensions : null,
	treeViewPackage : null,
	treeViewOldEntryClicked : null,

	onUnsupportedTypeChanged(newValues) {
		this.unsupportedExtensions = newValues;
	},

	onCustomUnsupportedTypeChanged(newValues) {
		this.customUnsupportedExtensions = 
			newValues.split(",")
			.map((ext) => {
				return ext.startsWith(".") ? ext : ("." + ext);
			});
	},
	
	onTreeViewEntryClicked(e) {
		console.log("sms:osf activate")
		// plugin is activ
		// this is a double click
		// we got a file name
		if (this.active && e.detail != 1 && e.toElement.dataset.name != null) {
			// get the extension without the starting dot
			const ext = Path.extname(e.toElement.dataset.name).toLowerCase().replace(/^\./g,"");
			if (this.isUnsupported(ext)) {
				Shell.openItem(e.toElement.dataset.path);
				return false;
			} else {
				this.treeViewOldEntryClicked.call(this.treeViewPackage,e);
			}
		} else {
			this.treeViewOldEntryClicked.call(this.treeViewPackage,e);
		}
	},

	isUnsupported(ext) {
		return this.unsupportedExtensions[ext] || this.customUnsupportedExtensions.find(x => x == ext);
	},

	activate() {
		console.log("sms:osf activate")
		//safety
		this.active = true;
		// used to deallocate events created for atom events.
		this.disposables = new CompositeDisposable();
		// used to store which extensions are unsupported, only contains values from the default-extensions.
		this.unsupportedExtensions = {};
		// used to store which extensions are unsupported, only contains user defined extensions.
		this.customUnsupportedExtensions = [];

		// observe the default type configs
		this.disposables.add(atom.config.observe('starbound-open-unsupported-files.defaultTypes', this.onUnsupportedTypeChanged.bind(this)))
		// observe the custom type config
		this.disposables.add(atom.config.observe('starbound-open-unsupported-files.extensions', this.onCustomUnsupportedTypeChanged.bind(this)));
		
		// track the openning of the items
		atom.packages.activatePackage("tree-view").then((pkg) => {
			this.treeViewPackage = pkg.mainModule.treeView;
			if (this.treeViewPackage != null) {
				this.treeViewOldEntryClicked = this.treeViewPackage.entryClicked;
				this.treeViewPackage.entryClicked = this.onTreeViewEntryClicked.bind(this);
			}
		});
	},
	
	deactivate() {
		// dispose of the items
		this.active = false;
		this.disposables.dispose();
		this.unsupportedExtensions = null;
		this.customUnsupportedExtensions = null;
		if (this.treeViewPackage) {
			this.treeViewPackage.entryClicked = this.treeViewOldOnClick;
			this.treeViewOldOnClick = null;
		}
	}
}

	
