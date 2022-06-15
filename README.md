## Crypto web app Intro 
- Have indepth data about all crypto currency, crypto markets, and exchanges.
- Popular crypto currency news.
- Learn React best practices.
- Learn Redux using redux tool kit
- Learn to create user interface and using ant design.
- Learn to create charts using Chart.js
- Learn to fetch more data from 2 different sources using rapidapi
## Rapid Api link
- [https://rapidapi.com/Coinranking/api/coinranking1/] API for real-time crypto prices, exchanges and markets.
    - click blue subscribe button in order to test.
- [https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/] An AI service from Microsoft Azure that turns any app into a news search resource.Fetch crypto currency related news.
    - click blue subscribe button in order to test.
# Install dependancies
- npm install antd 
    - antd is ant design and is for styling
- npm install @ant-design/icons 
    - for icons
- npm install react-redux @reduxjs/toolkit 
    - Taken from Redux site [reduxjs.org]. A predictable State Container for JS Apps. 
    - Predictable: Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
    - Centralized: your application state and logic enables powerful capabilities like undo/redio state peristence and much more.
    - Debuggable: The Redux Devtools make it easy to trace when , where, why and how your application's stte changed. Redux's architecture lets you log changes, use"time-travel debugging", and even send complete error reports to a server. 
    - Flexible: Redux works with any UI layer, and has a large ecosystem of addons to fit your needs. 
- npm install axios 
    - to fetch api data
- npm install chart.js 
    - to create charts
- npm install react-chartjs-2
    - to render charts from chartjs
- npm install html-react-parser
    - to parse html data
- npm install millify 
    - to transform large numbers to readable string
- npm install moment
    - parse times and dates
- npm install react-router-dom

## Errors 
1. FIXED could not see Navbar component when imported. Then realize had to import BrowserRoutter as Router from react-router-dom and wrap App component with Router.
2. Fixed pages/Exchanges.jsx was not loading data on first load. So added if conditional to say if exchanges equals undefined or if there isnt any exchanges to show a loading...
