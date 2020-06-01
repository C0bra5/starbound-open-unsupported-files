# Changelog

# 1.0.0
- Initial release.
- Modified the original package to use some more extensions.

## 1.0.1
- Made bat files show up in the text editor when clicked once.

## 1.0.2
- Fixed a critical issue that prevented the plugin from working on some image types.

## 1.0.3
- Added support for more extensions: .pdn, .gal

# 2.0.0
+ **Feature changes:**
  - Changed the config to use toggles for the default extension supported
  - All files will now attempt to display themselves before being open.
  - Files will only open externally if double clicked.
  - Added many new extensions to the default list.
  - The old configuration is now added on top of the default extension list.
  - Updated the readme with new information about the new features.


+ **Codebase changes:**
  - Ported the entire plugin over to JavaScript (The package was originally written
    in CoffeScript). This was done to simplify debugging and gives us a more
    standardized language to work with. This also reduces overhead as there is no
    need to compile the code back into JavaScript.
  - Removed the dependency for atom-utils. The original code required it for some
    reason. I have no clue why as it effectively imports about 10 more packages.
    These 10 packages can all be replaced with 3 lines of code. Some people really
    need to learn [to stop importing entire libraries for a single function.](https://imgur.com/a/ARP0ku4). This also means that the package no longer requires any other
    npm modules to work.
  - Removed the MIT licence from the original package as the codebase no longer uses
    the codebase of the original package.
  - Updated readme to reflect the previously mentioned change.
  - Updated licence to reflect current year.

## 2.0.1
- Fixed a typo in the readme.