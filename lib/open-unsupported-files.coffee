module.exports =
	config:
		extensions:
			title: 'extensions'
			type: 'string'
			default: 'doc,xls,ppt,docx,xlsx,pptx,pdf,rtf,zip,7z,rar,tar,gz,bz2,exe,bat'

	activate: ->
		@extensions = atom.config.get('starbound-open-unsupported-files.extensions')?.split(',');
		@imageExt = "png,jpg,bat".split(',');
		{requirePackages} = require 'atom-utils'
		requirePackages('tree-view').then ([treeView]) =>
			if tv = treeView.treeView
				@originalEntryClicked = tv.entryClicked
				tv.entryClicked =	(e) =>
					filepath = e.toElement.dataset.path
					filename = e.toElement.dataset.name
					if filename?.substring(filename.lastIndexOf('.') + 1 ).toLowerCase() in @extensions
						filepath = e.toElement.dataset.path
						filename = e.toElement.dataset.name
						if e.detail == 1
							if filename?.substring(filename.lastIndexOf('.') + 1 ).toLowerCase() in @imageExt
								@originalEntryClicked.call(tv,e)
							else
								return
						else
							shell = require('shell')
							shell.openItem(filepath)
							return false
					else
						@originalEntryClicked.call(tv,e)
