![Issues](https://img.shields.io/github/issues/AIDE-M/AIDE) ![GitHub pull requests](https://img.shields.io/github/issues-pr/AIDE-M/AIDE) <img src="https://img.shields.io/github/v/release/AIDE-M/AIDE?include_prereleases&amp;label=latest%20release" alt="Latest release"> 
[![Build debug Apk](https://github.com/AIDE-M/AIDE/actions/workflows/android.yml/badge.svg)](https://github.com/AIDE-M/AIDE/actions/workflows/android.yml)
![GitHub contributors](https://img.shields.io/github/contributors/AIDE-M/AIDE) ![GitHub last commit](https://img.shields.io/github/last-commit/AIDE-M/AIDE)
# AIDE-M
AIDE-based mod that will help you develop mobile applications based on the Android platform.
## Features 
- [x] APK Compilation

- [ ] AAB Support

- [x] Java

- [ ] Kotlin  

- [ ] R8/ProGuard

- [x] Code Completions (Currently for Java only)  

- [x] Quick fixes (Import missing class and Implement Abstract Methods)  

- [x] Layout Preview (80%)

- [x] Automatic dependency resolution  

- [ ] Debugger

### Source code map

| Class | Role |
| ----- | ---- |
| `com.aide.ui.build.android.AaptService` | Responsible for indexing project |
| `com.aide.ui.build.packagingservice.ExternalPackagingService` | Responsible for dexing and packaging |


## Where can I get it?
As of now, you can get it only in [Telegram Group](https://t.me/aideremake) or [Github Actions](https://github.com/AIDE-M/AIDE/actions). But when there will be completed version, it will be published in releases.

## Contributing
Help in the development of AIDE-M by contributing new features or improvements. We will be glad.

We also want to restore some java code to do it need to decompile the class using jadx or other decompiler tool.

Fork this repository and contribute back using
[pull requests](https://github.com/AIDE-M/AIDE/pulls).

### Commit message

When you've made changes to one or more files, you have to *commit* that file. You also need a *
message* for that *commit*.

You should
read [these](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)
guidelines, or that summarized:

- Short and detailed ( otherwise it will be deleted )
- Prefix one of these commit types:
   - `feat:` A feature, possibly improving something already existing
   - `fix:` A fix, for example of a bug
   - `style:` Feature and updates related to styling
   - `refactor:` Refactoring a specific section of the codebase
   - `test:` Everything related to testing
   - `docs:` Everything related to documentation
   - `chore:` Code maintenance (you can also use emojis to represent commit types)

Examples:
 - `feat: Speed up compiling with new technique`
 - `fix: Fix crash during launch on certain phones`
 - `refactor: Reformat code at File.java`
## Contacts
- <a href="https://t.me/aideremake"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png" width=16 height=16 /> Telegram Chat</a>
- <a href="https://github.com/AIDE-M/AIDE/issues"><img src="https://user-images.githubusercontent.com/32961194/122037088-ebf2f700-cddc-11eb-9052-78e964c680f5.png" width=16 height=16 style="background: green;"/> Github Issues</a>
## Support
- You can send a support by donating us.
## Disclaimer
This was not meant for any harmful purposes, such as harming AIDE - Android IDE; Quite the opposite actually.
It was made to keep AIDE alive by the community for the community. Please use it at your own discretion.

We love AIDE very much, and we are grateful to AIDE's developers for making such an amazing app, but unfortunately, we haven't received updates for a long time.
That's why we decided to keep AIDE alive by making this.