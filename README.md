# BlockMesh Hack

This is a hack related to this bounty: https://earn.superteam.fun/listings/bounty/connect-and-extract-values-of-a-leveldb/

This hack is trying to get access to the chrome's LevelDB values.

This codebase is comprised by 2 parts:
1. chrome_extension
2. hack.js

## Chrome Extension

The chrome_extension folder is a simple Chrome extension to create new keys within LevelDB.
To install it locally:
1. Open your Chrome browser
2. Go to: `chrome://extensions/`
3. Enable "Developer mode" in the top left corner
4. Click on "Load unpacked" and select the `chrome_extension` folder of this repo
5. Go to your extension and start adding new key / value pairs via the form.

## Hack.js

This script is trying to access the values stored in Chrome's LevelDB by the extension above.

To execute the script:
1. `yarn`
2. `yarn start`, to get the whole list of Key / Value pairs within the LevelDB
3. `yarn start <KEY>`, to get only a specific key

The path to the LevelDB is located:
1. Windows: `~\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Storage\\leveldb`
2. MAC: `~/Library/Application Support/Google/Chrome/Default/Local Storage/leveldb`


