### :package: Getting Started

1\. Clone the repository and install npm dependencies

```
git clone https://github.com/clonezer/thailand-post-tracker-gas my-project
cd my-project
npm install
```

2\. Log in to Google clasp and authorize with your Google account.

```
npx clasp login
```

3\. Create a new Google Script bound to a Google Sheet (or set the type as standalone to create a standalone script in your Google Drive)

```
npx clasp create --type sheets --title "My Apps Script Project" --rootDir ./dist
```

4\. Deploy the project

```
npm run deploy
```

The `dist` directory contains the bundled code that is pushed to Google Apps Script.
