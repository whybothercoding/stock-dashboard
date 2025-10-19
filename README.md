# 📊 IndieGoWeb Daily Stock Dashboard

[![Version](https://img.shields.io/badge/version-1.0%20MVP-blue.svg)](https://github.com/theoslasha/stock-dashboard)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A lightweight, **client-side HTML dashboard** for monitoring your daily **watchlist** (ONDS, RGTI, APLD, etc.) and analyzing **IWM / QQQ** risk sentiment across multiple timeframes — built with **vanilla HTML, CSS, and JavaScript** using **free APIs**.

> **🚀 Zero Dependencies • No Build Process • No API Keys Required**

## 📋 Table of Contents

- [Overview](#-overview)
- [Stack](#-stack)
- [Project Structure](#️-project-structure)
- [Installation & Usage](#️-installation--usage)
- [How to Read the Dashboard](#-how-to-read-the-dashboard)
- [Features](#-features)
- [User Interface](#-user-interface)
- [Technical Details](#️-technical-details)
- [Usage Tips](#-usage-tips)
- [Development](#-development)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [API Reference](#-api-reference)
- [Acknowledgments](#-acknowledgments)
- [Version 1.0 Updates](#-version-10-updates)
- [Quick Start](#-quick-start)

---

## 🧭 Overview

This dashboard helps you:
- See **latest price, % change, volume, and trend** for your stocks
- Visualize **IWM vs QQQ ratio** across multiple timeframes (3-month, 1-month, 1-week)
- Analyze **risk-on / risk-off market sentiment** with tabbed chart interface
- Quickly check your **daily momentum** and **macro context** before trading
- Run it locally by **opening the HTML file** — no server or API keys required

---

## 🧩 Stack

| Component | Technology | Purpose |
|-----------|------------|----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) | Pure client-side application |
| **Charts** | Chart.js (CDN) | Interactive data visualization |
| **Market Data** | Yahoo Finance API | Free real-time and historical data |
| **CORS Proxy** | AllOrigins | Bypass CORS restrictions |
| **Styling** | Custom CSS | Modern gradient design with responsive layout |

---

## 🗂️ Project Structure

```
stock-dashboard/
│
├─ stock_dashboard.html    # Complete dashboard application
└─ README.md              # This file
```

---

## ⚙️ Installation & Usage

### Quick Start (Recommended)
```bash
# Clone the repository
git clone https://github.com/theoslasha/stock-dashboard.git
cd stock-dashboard

# Open directly in browser (no server needed)
open stock_dashboard.html
# or
start stock_dashboard.html  # Windows
xdg-open stock_dashboard.html  # Linux
```

### Development Setup
```bash
# Clone the repository
git clone https://github.com/theoslasha/stock-dashboard.git
cd stock-dashboard

# Serve locally (optional, for CORS-free development)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# Open in browser
open http://localhost:8000/stock_dashboard.html
```

### Requirements
- **Modern web browser** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Internet connection** (for data fetching)
- **No additional dependencies** or build tools required

### Deployment Options

#### Static Hosting (Recommended)
```bash
# Deploy to GitHub Pages
git push origin main
# Enable GitHub Pages in repository settings

# Deploy to Netlify
# Drag and drop the HTML file to netlify.com

# Deploy to Vercel
npx vercel --prod

# Deploy to any static hosting service
# Just upload the HTML file
```

#### Self-Hosting
```bash
# Using any web server
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

#### Docker (Optional)
```dockerfile
FROM nginx:alpine
COPY stock_dashboard.html /usr/share/nginx/html/index.html
EXPOSE 80
```

---

## 📊 How to Read the Dashboard

| Section | Meaning |
|---------|---------|
| **Watchlist Table** | Price, % Change, Volume, Trend with sortable columns |
| **IWM/QQQ Charts** | Full-width tabbed interface with 3-month, 1-month, and 1-week ratio charts |
| **Risk Sentiment** | If the orange line rises → "risk-on" (good for small-cap tech). Falling line → "risk-off." |
| **Statistics Cards** | Total tickers, up/down counts for quick overview |
| **Refresh Button** | Updates all data on demand |
| **Add Ticker** | Dynamically add new stocks to your watchlist |
| **Market Context** | Explains how to interpret the IWM/QQQ ratio |

---

## 🔧 Features

### Current Features
- ✅ **Real-time stock data** from Yahoo Finance API
- ✅ **Interactive watchlist** with 13 pre-configured tickers
- ✅ **Multi-timeframe IWM/QQQ ratio charts** (3-month, 1-month, 1-week)
- ✅ **Full-width tabbed interface** for risk sentiment analysis
- ✅ **Color-coded trend indicators** (green/red for up/down)
- ✅ **Sortable table** with clickable column headers
- ✅ **Summary statistics** (total tickers, up/down counts)
- ✅ **Dynamic ticker addition** with validation
- ✅ **Responsive design** that works on mobile and desktop
- ✅ **Loading states** and error handling
- ✅ **Toast notifications** for user feedback

### Data Sources
- **Yahoo Finance API** (free tier) - Real-time and historical stock data
- **AllOrigins CORS Proxy** - Bypasses CORS restrictions for API calls
- **No API keys required** - Uses public endpoints
- **Rate limiting** - Respects Yahoo Finance's usage policies

### Technical Indicators
- Price change percentage with color coding
- Volume analysis with formatted numbers
- Trend direction (up/down) with visual indicators
- Multi-timeframe IWM/QQQ ratio with trend line and sentiment analysis
- Dynamic statistics that update based on selected timeframe

---

## 🎨 User Interface

### Design Features
- **Modern gradient design** with professional styling
- **Responsive grid layout** that adapts to screen size
- **Smooth animations** and hover effects
- **Loading spinners** during data fetch
- **Color-coded data** for quick visual analysis
- **Mobile-friendly** with collapsible layout

### Interactive Elements
- **Sortable table columns** (click headers to sort)
- **Tabbed chart interface** for switching between timeframes
- **Add ticker form** with Enter key support
- **Refresh button** with visual feedback
- **Chart interactions** (zoom, hover, etc.)
- **Toast messages** for user notifications

---

## 🛠️ Technical Details

### Architecture
- **Single-page application (SPA)** with vanilla JavaScript
- **No build process** or compilation required
- **CDN-based dependencies** (Chart.js, Tailwind CSS)
- **Client-side data processing** and visualization
- **Error handling** for network issues
- **Modular function design** for maintainability

### Code Structure
```javascript
// Core data management
let watchlist = ["ONDS", "RGTI", "APLD", ...];
let ratioCharts = { '3mo': null, '1mo': null, '1wk': null };
let currentStockData = [];
let currentTab = '3mo';

// Main functions
loadWatchlistData()     // Fetch and display stock data
loadAllRatioCharts()    // Create multiple ratio visualizations
getStockSummary()       // Get individual stock information
createRatioChart()      // Generate chart for specific timeframe
handleTabClick()        // Manage tab switching
sortStockData()         // Handle table sorting
addTicker()            // Add new stocks to watchlist
```

### API Integration
```javascript
// Yahoo Finance API via CORS proxy
const proxyUrl = 'https://api.allorigins.win/raw?url=';
const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`;
const response = await fetch(proxyUrl + encodeURIComponent(yahooUrl));
```

### Chart.js Implementation
```javascript
// Multi-chart management
ratioCharts[period] = new Chart(ctx, {
    type: 'line',
    data: { /* ratio data */ },
    options: { /* responsive config */ }
});
```

### Browser Compatibility
- **ES6+ features**: async/await, arrow functions, template literals, destructuring
- **Modern APIs**: Fetch API, Chart.js, CSS Grid, Flexbox
- **Browser support**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

---

## 💡 Usage Tips

- **Run once per day** to get a feel for market sentiment
- **Watch for green reversal days** after multiple red ones
- **Rising IWM/QQQ ratio** often precedes rebounds in small-cap stocks
- **Switch between timeframes** to analyze short-term vs medium-term trends
- **Use the sortable columns** to quickly identify top performers
- **Add your own tickers** to customize the watchlist
- **Keep it simple**: it's a **consulting dashboard**, not a trading engine

---

## 🚀 Development

### Project Structure
```
stock-dashboard/
├── stock_dashboard.html    # Main application file
├── README.md              # Documentation
└── .gitignore            # Git ignore rules (if needed)
```

### Key Development Areas

#### Adding New Features
1. **New Chart Types**: Extend `createRatioChart()` function
2. **Additional Timeframes**: Add to `periods` array in `loadAllRatioCharts()`
3. **Custom Indicators**: Modify `calculateRatio()` function
4. **UI Components**: Add to the HTML structure and corresponding JavaScript

#### Code Organization
- **Global Variables**: Defined at the top for easy configuration
- **Event Listeners**: Centralized in `DOMContentLoaded` event
- **Error Handling**: Consistent try-catch blocks with user feedback
- **Data Flow**: Clear separation between data fetching, processing, and display

#### Performance Considerations
- **Chart Management**: Proper cleanup with `chart.destroy()`
- **Memory Management**: Efficient data structures and cleanup
- **API Calls**: Parallel requests where possible with `Promise.all()`
- **Responsive Design**: CSS Grid and Flexbox for optimal layout

### Customization Guide

#### Adding New Tickers
```javascript
// Modify the default watchlist
let watchlist = ["ONDS", "RGTI", "APLD", "YOUR_TICKER"];
```

#### Changing Chart Colors
```javascript
// In createRatioChart function
borderColor: 'your-color',           // Line color
backgroundColor: 'rgba(r,g,b,0.1)',  // Fill color
```

#### Adding New Timeframes
```javascript
// Add to periods array
const periods = ['3mo', '1mo', '1wk', '1d'];

// Add corresponding tab button in HTML
<button class="tab-button" data-period="1d">1-Day</button>
```

#### Styling Modifications
- **Colors**: Modify CSS custom properties in the `<style>` section
- **Layout**: Adjust Tailwind CSS classes
- **Typography**: Update font sizes and weights in the CSS

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### How to Contribute
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Guidelines
- **Code Style**: Follow existing JavaScript conventions
- **Testing**: Test in multiple browsers (Chrome, Firefox, Safari)
- **Documentation**: Update README.md for new features
- **Performance**: Ensure changes don't impact loading times
- **Accessibility**: Maintain keyboard navigation and screen reader support

### Areas for Contribution
- 🐛 **Bug Fixes**: Report and fix issues
- ✨ **New Features**: Add new chart types, timeframes, or indicators
- 📱 **Mobile Optimization**: Improve mobile experience
- 🎨 **UI/UX**: Enhance design and user experience
- 📚 **Documentation**: Improve code comments and README
- ⚡ **Performance**: Optimize data loading and rendering
- 🔧 **API Integration**: Add support for additional data sources

### Reporting Issues
When reporting bugs, please include:
- **Browser version** and operating system
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Console errors** (if any)
- **Screenshots** (if applicable)

---

## 🆘 Troubleshooting

### Common Issues

1. **"Failed to load stock data" error**
   - Check internet connection
   - Yahoo Finance API may be temporarily unavailable
   - Try refreshing the page

2. **Chart not displaying**
   - Ensure JavaScript is enabled in your browser
   - Check browser console for errors
   - Try refreshing the page

3. **CORS errors**
   - The app uses AllOrigins proxy to handle CORS
   - If issues persist, try using a local server instead of file:// protocol

4. **Mobile display issues**
   - The dashboard is responsive but works best on desktop
   - Try rotating your device or using landscape mode

### Browser Requirements
- **JavaScript enabled**
- **Modern browser** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **Internet connection** for data fetching

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Commercial use** allowed
- ✅ **Modification** allowed  
- ✅ **Distribution** allowed
- ✅ **Private use** allowed
- ❌ **No warranty** provided

---

## 📊 API Reference

### Yahoo Finance API Endpoints
```javascript
// Real-time stock data
https://query1.finance.yahoo.com/v8/finance/chart/{TICKER}

// Historical data with parameters
https://query1.finance.yahoo.com/v8/finance/chart/{TICKER}?range={PERIOD}&interval=1d

// Supported periods: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
```

### Data Structure
```javascript
// Stock data response structure
{
  chart: {
    result: [{
      meta: {
        regularMarketPrice: number,
        previousClose: number,
        regularMarketVolume: number
      },
      timestamp: number[],
      indicators: {
        quote: [{
          close: number[]
        }]
      }
    }]
  }
}
```

---

## 🔒 Security & Privacy

### Data Handling
- **No data storage**: All data is fetched in real-time and not stored locally
- **No user tracking**: No analytics or tracking scripts included
- **Client-side only**: All processing happens in the browser
- **No API keys**: Uses public endpoints only

### CORS Considerations
- **AllOrigins proxy**: Used to bypass CORS restrictions
- **Public endpoints**: Only accesses publicly available Yahoo Finance data
- **No authentication**: No login or personal data required

### Browser Security
- **HTTPS recommended**: For production use, serve over HTTPS
- **Content Security Policy**: Consider adding CSP headers for enhanced security
- **No external scripts**: Only uses CDN resources from trusted sources

---

## 🏆 Acknowledgments

- **Yahoo Finance** for providing free market data API
- **Chart.js** for the excellent charting library
- **Tailwind CSS** for the utility-first CSS framework
- **AllOrigins** for the CORS proxy service

---

**Author:** [Theo](https://github.com/theoslasha)  
**Version:** 1.0 MVP  
**License:** MIT  
**Stack:** HTML5, CSS3, JavaScript, Chart.js, Yahoo Finance API

---

## 🆕 Version 1.0 Updates

### Major Improvements
- **🎯 Full-width IWM/QQQ section** - Expanded chart area for better visibility
- **📊 Multi-timeframe analysis** - 3-month, 1-month, and 1-week ratio charts
- **🔄 Tabbed interface** - Easy switching between different timeframes
- **📈 Enhanced statistics** - Dynamic updates based on selected timeframe
- **🎨 Improved layout** - Better use of screen real estate and visual hierarchy

### New Features
- Tabbed navigation for risk sentiment analysis
- Multiple chart instances with independent data loading
- Timeframe-specific chart titles and statistics
- Enhanced error handling for each timeframe
- Improved responsive design for the full-width section

---

## 🚀 Quick Start

1. Download `stock_dashboard.html`
2. Open it in your browser
3. Watch your stocks and market sentiment in real-time!

*No installation, no dependencies, no server setup required.*