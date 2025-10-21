# 📊 IndieGoWeb Daily Stock Dashboard

[![Version](https://img.shields.io/badge/version-1.0%20MVP-blue.svg)](https://github.com/theoslasha/stock-dashboard)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-5-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A comprehensive **client-side HTML dashboard** for monitoring your **stock watchlist** and analyzing **market sentiment** through multiple financial ratios and indicators — built with **vanilla HTML, CSS, and JavaScript** using **free APIs**.

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
- Monitor your **stock watchlist** with comprehensive data (price, change, volume, 52-week highs/lows)
- Analyze **6 key market indicators** with interactive charts:
  - **IWM/QQQ Risk Appetite** - Small caps vs big tech sentiment
  - **RSP/SPY Market Breadth** - Equal-weight vs cap-weighted S&P breadth
  - **XLI/XLU Economic Confidence** - Industrials vs utilities growth sentiment
  - **XLF/XLK Value vs Growth** - Financials vs technology rotation
  - **HYG/IEF Credit Risk** - High-yield bonds vs treasuries risk appetite
  - **VIX Volatility Index** - Market fear/calm levels
- View **1-year and 3-month timeframes** for each indicator
- **Sortable watchlist table** with 12 data columns
- **Dynamic ticker management** (add/remove stocks)
- Run it locally by **opening the HTML file** — no server or API keys required

---

## 🧩 Stack

| Component | Technology | Purpose |
|-----------|------------|----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) | Pure client-side application |
| **Charts** | Chart.js (CDN) | Interactive data visualization for 6 market indicators |
| **Styling** | Tailwind CSS (CDN) | Utility-first responsive design |
| **Market Data** | Yahoo Finance API | Free real-time and historical data |
| **CORS Proxy** | AllOrigins | Bypass CORS restrictions |
| **Custom Theme** | CSS Gradients | Modern gradient design with professional styling |

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
| **Watchlist Table** | Comprehensive stock data with 12 sortable columns (ticker, price, change, volume, 52W high/low, etc.) |
| **Market Indicators** | 6 key financial ratios with 1-year and 3-month timeframes |
| **IWM/QQQ Risk Appetite** | Rising line = risk-on (good for small caps), falling = risk-off |
| **RSP/SPY Market Breadth** | Rising line = broad rally, falling = narrow rally |
| **XLI/XLU Economic Confidence** | Rising line = growth sentiment, falling = defensive sentiment |
| **XLF/XLK Value vs Growth** | Rising line = value rotation, falling = growth rotation |
| **HYG/IEF Credit Risk** | Rising line = risk-on in bonds, falling = risk-off |
| **VIX Volatility** | High VIX (>20) = fear, low VIX (<20) = calm |
| **Statistics Cards** | Total tickers, up/down counts for quick overview |
| **Dashboard Controls** | Refresh data, add/remove tickers dynamically |

---

## 🔧 Features

### Current Features
- ✅ **Real-time stock data** from Yahoo Finance API with 12 data columns
- ✅ **Interactive watchlist** with default tech stocks (AAPL, NVDA, TSLA, META, AMZN, GOOG, MSFT)
- ✅ **6 comprehensive market indicators** with interactive charts:
  - IWM/QQQ Risk Appetite (small caps vs big tech)
  - RSP/SPY Market Breadth (equal-weight vs cap-weighted)
  - XLI/XLU Economic Confidence (industrials vs utilities)
  - XLF/XLK Value vs Growth (financials vs technology)
  - HYG/IEF Credit Risk (high-yield vs treasuries)
  - VIX Volatility Index (market fear gauge)
- ✅ **Dual timeframe analysis** (1-year and 3-month) for each indicator
- ✅ **Tabbed interface** for easy switching between timeframes
- ✅ **Color-coded trend indicators** (green/red for up/down)
- ✅ **Fully sortable table** with 12 clickable column headers
- ✅ **Summary statistics** (total tickers, up/down counts)
- ✅ **Dynamic ticker management** (add/remove stocks with validation)
- ✅ **Responsive design** with Tailwind CSS
- ✅ **Loading states** and comprehensive error handling
- ✅ **Toast notifications** for user feedback
- ✅ **Professional gradient theme** with modern UI design

### Data Sources
- **Yahoo Finance API** (free tier) - Real-time and historical stock data
- **AllOrigins CORS Proxy** - Bypasses CORS restrictions for API calls
- **No API keys required** - Uses public endpoints
- **Rate limiting** - Respects Yahoo Finance's usage policies

### Technical Indicators
- **Stock Data**: Price, change %, change $, open, high, low, close, volume, 52-week high/low, trend
- **Market Ratios**: IWM/QQQ, RSP/SPY, XLI/XLU, XLF/XLK, HYG/IEF with trend analysis
- **Volatility**: VIX index with fear/calm sentiment interpretation
- **Color-coded indicators**: Green/red for positive/negative changes
- **Dynamic statistics**: Current ratios, daily changes, and sentiment analysis
- **Multi-timeframe analysis**: 1-year and 3-month views for comprehensive market context

---

## 🎨 User Interface

### Design Features
- **Professional gradient theme** with modern Tailwind CSS styling
- **Responsive grid layout** that adapts to screen size
- **Smooth animations** and hover effects throughout
- **Loading spinners** during data fetch operations
- **Color-coded data** for quick visual analysis (green/red trends)
- **Mobile-friendly** responsive design with optimized layouts
- **Custom CSS gradients** for cards, buttons, and visual hierarchy

### Interactive Elements
- **12 sortable table columns** (click any header to sort by that field)
- **Tabbed chart interface** for switching between 1-year and 3-month timeframes
- **Add/remove ticker forms** with Enter key support and validation
- **Refresh button** with visual feedback and loading states
- **Interactive charts** with zoom, hover, and responsive interactions
- **Toast notification system** for user feedback and error handling
- **Dynamic statistics** that update based on selected timeframe

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
let watchlist = ["AAPL", "NVDA", "TSLA", "META", "AMZN", "GOOG", "MSFT"];
let ratioCharts = {
    'iwm-qqq': { '1y': null, '3mo': null },
    'rsp-spy': { '1y': null, '3mo': null },
    'xli-xlu': { '1y': null, '3mo': null },
    'xlf-xlk': { '1y': null, '3mo': null },
    'hyg-ief': { '1y': null, '3mo': null },
    'vix': { '1y': null, '3mo': null }
};
let currentStockData = [];
let currentSortColumn = null;
let currentSortDirection = 'asc';

// Main functions
loadWatchlistData()     // Fetch and display stock data with 12 columns
loadAllRatioCharts()    // Create 6 market indicator charts
getStockSummary()       // Get comprehensive stock information
getHistoricalData()     // Fetch historical data for ratios
calculateRatio()        // Calculate ratio between two assets
createRatioChart()      // Generate chart for specific metric/timeframe
handleTabClick()        // Manage tab switching between timeframes
sortStockData()         // Handle table sorting by any column
addTicker()            // Add new stocks to watchlist
removeTicker()         // Remove stocks from watchlist
updateRatioStats()     // Update statistics for market indicators
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
// Multi-chart management for 6 metrics × 2 timeframes
ratioCharts[metricKey][period] = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: metric.name,
            data: values,
            borderColor: metric.colors.border,
            backgroundColor: metric.colors.background,
            borderWidth: 2,
            fill: true,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: true, text: `${periodLabels[period]} ${metric.name}` },
            legend: { display: false }
        }
    }
});
```

### Browser Compatibility
- **ES6+ features**: async/await, arrow functions, template literals, destructuring
- **Modern APIs**: Fetch API, Chart.js, CSS Grid, Flexbox
- **Browser support**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

---

## 💡 Usage Tips

- **Run once per day** to get a comprehensive feel for market sentiment
- **Watch for green reversal days** after multiple red ones in your watchlist
- **Rising IWM/QQQ ratio** often precedes rebounds in small-cap stocks
- **Rising RSP/SPY ratio** indicates broad market participation (not just mega-caps)
- **XLI/XLU ratio** shows economic confidence vs defensive positioning
- **XLF/XLK ratio** indicates value vs growth rotation trends
- **HYG/IEF ratio** shows credit risk appetite in bond markets
- **VIX levels** indicate market fear (>20) vs calm (<20)
- **Switch between timeframes** to analyze short-term vs medium-term trends
- **Use the sortable columns** to quickly identify top performers and laggards
- **Add your own tickers** to customize the watchlist for your strategy
- **Keep it simple**: it's a **market analysis dashboard**, not a trading engine

---

## 🚀 Development

### Project Structure
```
stock-dashboard/
├── stock_dashboard.html    # Main application file
├── local.html             # Alternative version with empty watchlist
├── README.md              # Documentation
└── .gitignore            # Git ignore rules (if needed)
```

## 📋 Detailed Implementation Steps

### Phase 1: Project Setup and Architecture

#### 1.1 Initial Project Setup
```bash
# Create project directory
mkdir stock-dashboard
cd stock-dashboard

# Initialize git repository
git init
git remote add origin https://github.com/yourusername/stock-dashboard.git

# Create basic file structure
touch stock_dashboard.html README.md .gitignore
```

#### 1.2 HTML Structure Implementation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IndieGoWeb Daily Stock Dashboard</title>
    <!-- CDN Dependencies -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <!-- Dashboard Container -->
    <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <!-- Watchlist Section -->
        <!-- Market Indicators Section -->
        <!-- Footer Section -->
    </div>
</body>
</html>
```

#### 1.3 CSS Theme Implementation
```css
<style>
/* Custom gradient theme */
.theme-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.theme-surface {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

/* Button themes */
.theme-button-primary {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
}

/* Table styling */
#stock-table {
    min-width: 1400px;
}
</style>
```

### Phase 2: Core JavaScript Implementation

#### 2.1 Global Variables and Configuration
```javascript
// Default watchlist
let watchlist = ["AAPL", "NVDA", "TSLA", "META", "AMZN", "GOOG", "MSFT"];

// Chart storage for 6 metrics with 2 periods each
let ratioCharts = {
    'iwm-qqq': { '1y': null, '3mo': null },
    'rsp-spy': { '1y': null, '3mo': null },
    'xli-xlu': { '1y': null, '3mo': null },
    'xlf-xlk': { '1y': null, '3mo': null },
    'hyg-ief': { '1y': null, '3mo': null },
    'vix': { '1y': null, '3mo': null }
};

// Metric configurations
const metrics = {
    'iwm-qqq': { 
        name: 'IWM / QQQ Risk Appetite', 
        tickers: ['IWM', 'QQQ'], 
        isRatio: true,
        colors: { border: 'orange', background: 'rgba(255, 165, 0, 0.1)' }
    },
    // ... other metrics
};
```

#### 2.2 API Integration Implementation
```javascript
// Generic retry function with exponential backoff
async function fetchWithRetry(url, options = {}, maxRetries = 2, baseDelay = 2000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, {
                ...options,
                mode: 'cors',
                credentials: 'omit',
                timeout: 10000
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
            
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            
            const delay = baseDelay * Math.pow(2, attempt - 1);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// Stock data fetching with multiple CORS proxies
async function getStockSummary(ticker) {
    const proxies = [
        'https://cors-anywhere.herokuapp.com/',
        'https://thingproxy.freeboard.io/fetch/',
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?'
    ];
    
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`;
    
    for (const proxy of proxies) {
        try {
            const url = proxy === 'https://api.allorigins.win/raw?url=' 
                ? proxy + encodeURIComponent(yahooUrl)
                : proxy + yahooUrl;
            
            const data = await fetchWithRetry(url);
            if (data && data.chart) {
                return processStockData(data, ticker);
            }
        } catch (error) {
            console.warn(`Proxy ${proxy} failed, trying next...`);
            continue;
        }
    }
    
    throw new Error('All proxies failed');
}
```

#### 2.3 Data Processing Implementation
```javascript
// Process stock data from Yahoo Finance API
function processStockData(data, ticker) {
    const result = data.chart.result[0];
    const meta = result.meta;
    const quotes = result.indicators.quote[0];
    
    const currentPrice = meta.regularMarketPrice;
    const previousClose = meta.previousClose;
    const change = ((currentPrice - previousClose) / previousClose) * 100;
    const changeAmount = currentPrice - previousClose;
    const volume = meta.regularMarketVolume;
    const trend = currentPrice > previousClose ? 'up' : 'down';
    
    return {
        ticker: ticker,
        price: currentPrice ? currentPrice.toFixed(2) : 'N/A',
        change: change ? change.toFixed(2) : 'N/A',
        changeAmount: changeAmount ? changeAmount.toFixed(2) : 'N/A',
        volume: volume ? volume.toLocaleString() : 'N/A',
        trend: trend,
        open: meta.regularMarketOpen ? meta.regularMarketOpen.toFixed(2) : 'N/A',
        high: meta.regularMarketDayHigh ? meta.regularMarketDayHigh.toFixed(2) : 'N/A',
        low: meta.regularMarketDayLow ? meta.regularMarketDayLow.toFixed(2) : 'N/A',
        close: previousClose ? previousClose.toFixed(2) : 'N/A',
        fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh ? meta.fiftyTwoWeekHigh.toFixed(2) : 'N/A',
        fiftyTwoWeekLow: meta.fiftyTwoWeekLow ? meta.fiftyTwoWeekLow.toFixed(2) : 'N/A'
    };
}
```

### Phase 3: Chart Implementation

#### 3.1 Historical Data Fetching
```javascript
// Get historical data for charts
async function getHistoricalData(ticker, period) {
    const proxies = [
        'https://cors-anywhere.herokuapp.com/',
        'https://thingproxy.freeboard.io/fetch/',
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?'
    ];
    
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=${period}&interval=1d`;
    
    for (const proxy of proxies) {
        try {
            const url = proxy === 'https://api.allorigins.win/raw?url=' 
                ? proxy + encodeURIComponent(yahooUrl)
                : proxy + yahooUrl;
            
            const data = await fetchWithRetry(url);
            if (data && data.chart) {
                return processHistoricalData(data);
            }
        } catch (error) {
            continue;
        }
    }
    
    return null;
}

function processHistoricalData(data) {
    const result = data.chart.result[0];
    const timestamps = result.timestamp;
    const quotes = result.indicators.quote[0];
    
    return {
        timestamps: timestamps,
        closes: quotes.close
    };
}
```

#### 3.2 Ratio Calculation Implementation
```javascript
// Calculate ratio between two assets
function calculateRatio(data1, data2) {
    const ratio = [];
    const closes1 = data1.closes;
    const closes2 = data2.closes;
    const timestamps = data1.timestamps;

    for (let i = 0; i < Math.min(closes1.length, closes2.length); i++) {
        if (closes1[i] && closes2[i]) {
            ratio.push({
                date: new Date(timestamps[i] * 1000),
                ratio: closes1[i] / closes2[i]
            });
        }
    }

    return ratio;
}
```

#### 3.3 Chart Creation Implementation
```javascript
// Create Chart.js chart
function createRatioChart(data, metricKey, period, metric) {
    const canvasId = `chart-${metricKey}-${period}`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Destroy existing chart if it exists
    if (ratioCharts[metricKey] && ratioCharts[metricKey][period]) {
        ratioCharts[metricKey][period].destroy();
    }

    const values = data.map(d => d.value || d.ratio);
    const labels = data.map(d => d.date.toLocaleDateString());

    ratioCharts[metricKey][period] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: metric.name,
                data: values,
                borderColor: metric.colors.border,
                backgroundColor: metric.colors.background,
                borderWidth: 2,
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `${periodLabels[period]} ${metric.name}`
                },
                legend: { display: false }
            },
            scales: {
                x: { title: { display: true, text: 'Date' } },
                y: { title: { display: true, text: metric.isRatio ? 'Ratio' : 'Value' } }
            }
        }
    });

    // Update statistics after chart creation
    updateRatioStats(data, metricKey);
}
```

### Phase 4: User Interface Implementation

#### 4.1 Table Implementation
```javascript
// Display stock data in sortable table
function displayStockData(data) {
    currentStockData = data;
    const tbody = document.getElementById('stock-tbody');
    tbody.innerHTML = '';

    data.forEach(stock => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 transition-colors duration-150';
        row.innerHTML = `
            <td class="px-3 py-3 whitespace-nowrap">
                <div class="text-sm font-bold text-gray-900">${stock.ticker}</div>
            </td>
            <td class="px-3 py-3 whitespace-nowrap">
                <div class="text-sm text-gray-900">$${stock.price}</div>
            </td>
            <td class="px-3 py-3 whitespace-nowrap">
                <div class="text-sm font-bold ${parseFloat(stock.change) >= 0 ? 'text-emerald-600' : 'text-rose-600'}">
                    ${parseFloat(stock.change) >= 0 ? '+' : ''}${stock.change}%
                </div>
            </td>
            <!-- Additional columns... -->
        `;
        tbody.appendChild(row);
    });

    // Update statistics
    updateStatistics(data);
}
```

#### 4.2 Sorting Implementation
```javascript
// Sort stock data by column
function sortStockData(column, direction) {
    if (!currentStockData || currentStockData.length === 0) return;

    const sortedData = [...currentStockData].sort((a, b) => {
        let aVal, bVal;

        switch (column) {
            case 'ticker':
                aVal = a.ticker.toLowerCase();
                bVal = b.ticker.toLowerCase();
                break;
            case 'price':
                aVal = parseFloat(a.price) || 0;
                bVal = parseFloat(b.price) || 0;
                break;
            // Additional cases...
        }

        if (direction === 'asc') {
            return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        } else {
            return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
        }
    });

    displayStockData(sortedData);
}
```

#### 4.3 Tab Navigation Implementation
```javascript
// Handle tab clicks for chart switching
function handleTabClick(event) {
    const metric = event.target.getAttribute('data-metric');
    const period = event.target.getAttribute('data-period');
    
    // Update tab button styles
    const metricButtons = document.querySelectorAll(`[data-metric="${metric}"]`);
    metricButtons.forEach(button => {
        button.classList.remove('active', 'border-indigo-500', 'text-indigo-600');
        button.classList.add('border-transparent', 'text-gray-500');
    });

    event.target.classList.add('active', 'border-indigo-500', 'text-indigo-600');
    event.target.classList.remove('border-transparent', 'text-gray-500');

    // Show/hide tab content
    const metricTabs = document.querySelectorAll(`[id^="tab-${metric}-"]`);
    metricTabs.forEach(tab => tab.classList.add('hidden'));
    document.getElementById(`tab-${metric}-${period}`).classList.remove('hidden');

    // Update statistics if chart exists
    if (ratioCharts[metric] && ratioCharts[metric][period]) {
        updateRatioStatsFromChart(metric, period);
    }
}
```

### Phase 5: Error Handling and User Experience

#### 5.1 Error Handling Implementation
```javascript
// Comprehensive error handling for API calls
async function loadWatchlistData() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('watchlist-content');
    
    try {
        const stockData = [];
        let loadedCount = 0;
        let failedCount = 0;
        
        // Load stocks in parallel
        const stockPromises = watchlist.map(async (ticker) => {
            try {
                const data = await getStockSummary(ticker);
                if (data) {
                    stockData.push(data);
                    loadedCount++;
                } else {
                    failedCount++;
                }
            } catch (error) {
                failedCount++;
                console.error(`Error fetching data for ${ticker}:`, error);
            }
        });
        
        await Promise.allSettled(stockPromises);
        
        if (failedCount > 0) {
            showMessage(`Loading complete: ${loadedCount} stocks loaded, ${failedCount} failed`, 'warning');
        }
        
        displayStockData(stockData);
        
    } catch (error) {
        console.error('Error loading watchlist data:', error);
        showErrorMessage();
    }
}
```

#### 5.2 Toast Notification System
```javascript
// Centralized message system
function showMessage(message, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    let bgColor, textColor, borderColor;
    
    switch(type) {
        case 'success':
            bgColor = 'bg-emerald-50';
            textColor = 'text-emerald-700';
            borderColor = 'border-emerald-200';
            break;
        case 'warning':
            bgColor = 'bg-amber-50';
            textColor = 'text-amber-700';
            borderColor = 'border-amber-200';
            break;
        case 'error':
            bgColor = 'bg-rose-50';
            textColor = 'text-rose-700';
            borderColor = 'border-rose-200';
            break;
    }
    
    messageDiv.className = `message ${bgColor} ${textColor} ${borderColor} border px-4 py-3 rounded-lg mb-4`;
    messageDiv.textContent = message;
    
    const controlsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
    if (controlsSection) {
        controlsSection.insertBefore(messageDiv, controlsSection.firstChild);
    }
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
```

### Phase 6: Advanced Features Implementation

#### 6.1 Dynamic Ticker Management
```javascript
// Add new ticker to watchlist
function addTicker() {
    const input = document.getElementById('new-ticker');
    const ticker = input.value.trim().toUpperCase();
    
    if (!ticker) {
        showMessage('Please enter a ticker symbol', 'warning');
        return;
    }

    if (watchlist.includes(ticker)) {
        showMessage(`${ticker} is already in watchlist`, 'warning');
        return;
    }

    watchlist.push(ticker);
    input.value = '';
    showMessage(`Added ${ticker} to watchlist`, 'success');
    loadWatchlistData();
}

// Remove ticker from watchlist
function removeTicker() {
    const select = document.getElementById('ticker-select');
    const ticker = select.value;
    
    if (!ticker) {
        showMessage('Please select a ticker to remove', 'warning');
        return;
    }

    if (confirm(`Are you sure you want to remove ${ticker} from your watchlist?`)) {
        const index = watchlist.indexOf(ticker);
        if (index > -1) {
            watchlist.splice(index, 1);
            showMessage(`Removed ${ticker} from watchlist`, 'success');
            loadWatchlistData();
        }
    }
}
```

#### 6.2 Statistics Implementation
```javascript
// Update ratio statistics
function updateRatioStats(data, metricKey) {
    if (!data || data.length < 2) return;

    const currentValue = data[data.length - 1].value || data[data.length - 1].ratio;
    const previousValue = data[data.length - 2].value || data[data.length - 2].ratio;
    
    if (!currentValue || !previousValue || previousValue === 0) return;

    const dailyChange = ((currentValue - previousValue) / previousValue) * 100;
    
    // Update DOM elements
    const currentElement = document.getElementById(`stats-${metricKey}-current`);
    const changeElement = document.getElementById(`stats-${metricKey}-change`);
    const sentimentElement = document.getElementById(`stats-${metricKey}-sentiment`);
    
    if (currentElement) currentElement.textContent = currentValue.toFixed(4);
    if (changeElement) changeElement.textContent = `${dailyChange.toFixed(2)}%`;
    
    // Set sentiment based on metric type
    let sentiment = '';
    if (metricKey === 'vix') {
        sentiment = currentValue > 20 ? 'Fear' : 'Calm';
    } else if (metricKey === 'iwm-qqq') {
        sentiment = dailyChange > 0 ? 'Risk-On' : 'Risk-Off';
    }
    // Additional sentiment logic...
    
    if (sentimentElement) sentimentElement.textContent = sentiment;
}
```

### Phase 7: Performance Optimization

#### 7.1 Parallel Loading Implementation
```javascript
// Load all charts in parallel for better performance
async function loadAllRatioCharts() {
    const periods = ['1y', '3mo'];
    const totalCharts = Object.keys(metrics).length * periods.length;
    let loadedCharts = 0;
    let failedCharts = 0;
    
    const chartPromises = [];
    
    for (const metricKey of Object.keys(metrics)) {
        const metric = metrics[metricKey];
        
        for (const period of periods) {
            const chartPromise = loadSingleChart(metricKey, metric, period)
                .then(() => {
                    loadedCharts++;
                    console.log(`Chart loaded: ${metricKey} ${period} (${loadedCharts}/${totalCharts})`);
                })
                .catch((error) => {
                    failedCharts++;
                    console.error(`Chart failed: ${metricKey} ${period}`, error);
                });
            
            chartPromises.push(chartPromise);
        }
    }
    
    await Promise.allSettled(chartPromises);
    
    // Update statistics after all charts are loaded
    setTimeout(() => {
        updateAllStatistics();
    }, 1000);
}
```

#### 7.2 Memory Management
```javascript
// Proper chart cleanup
function createRatioChart(data, metricKey, period, metric) {
    const canvasId = `chart-${metricKey}-${period}`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // Destroy existing chart to prevent memory leaks
    if (ratioCharts[metricKey] && ratioCharts[metricKey][period]) {
        ratioCharts[metricKey][period].destroy();
    }
    
    // Create new chart
    ratioCharts[metricKey][period] = new Chart(ctx, {
        // Chart configuration...
    });
}
```

### Phase 8: Testing and Deployment

#### 8.1 Local Testing
```bash
# Test locally with Python server
python -m http.server 8000

# Test with Node.js serve
npx serve .

# Test with PHP server
php -S localhost:8000
```

#### 8.2 Deployment Options
```bash
# GitHub Pages deployment
git add .
git commit -m "Initial commit"
git push origin main

# Netlify deployment (drag and drop)
# Upload stock_dashboard.html to netlify.com

# Vercel deployment
npx vercel --prod

# Docker deployment
docker build -t stock-dashboard .
docker run -p 80:80 stock-dashboard
```

### Key Development Areas

#### Adding New Features
1. **New Market Indicators**: Add to `metrics` object and create corresponding HTML sections
2. **Additional Timeframes**: Add to `periods` array in `loadAllRatioCharts()`
3. **Custom Ratios**: Modify `calculateRatio()` function for new asset pairs
4. **New Chart Types**: Extend `createRatioChart()` function for different visualizations
5. **UI Components**: Add to the HTML structure and corresponding JavaScript
6. **Data Columns**: Add new fields to `getStockSummary()` and table structure

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
// Add to periods array in loadAllRatioCharts()
const periods = ['1y', '3mo', '1mo', '1wk'];

// Add corresponding tab button in HTML for each metric
<button class="tab-button" data-metric="iwm-qqq" data-period="1mo">1-Month</button>
```

#### Styling Modifications
- **Colors**: Modify CSS custom properties in the `<style>` section (theme-card, theme-surface, etc.)
- **Layout**: Adjust Tailwind CSS classes for responsive design
- **Typography**: Update font sizes and weights in the CSS
- **Gradients**: Customize the gradient themes for cards and buttons
- **Charts**: Modify Chart.js options for different visual styles

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
- 🐛 **Bug Fixes**: Report and fix issues with data loading or chart rendering
- ✨ **New Features**: Add new market indicators, timeframes, or chart types
- 📱 **Mobile Optimization**: Improve mobile experience and responsive design
- 🎨 **UI/UX**: Enhance design, add animations, or improve user experience
- 📚 **Documentation**: Improve code comments, README, and usage guides
- ⚡ **Performance**: Optimize data loading, chart rendering, and memory usage
- 🔧 **API Integration**: Add support for additional data sources or indicators
- 📊 **Data Analysis**: Add technical indicators, moving averages, or trend analysis

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
- **🎯 Comprehensive market analysis** - 6 key financial indicators with dual timeframes
- **📊 Enhanced watchlist** - 12 data columns with full sortable functionality
- **🔄 Professional UI** - Modern gradient theme with Tailwind CSS
- **📈 Advanced statistics** - Dynamic sentiment analysis for each indicator
- **🎨 Responsive design** - Optimized for desktop and mobile viewing
- **🔧 Fixed Statistics** - Current Ratio, Daily Change, and Sentiment now properly calculated and displayed
- **🔄 Smart Retry System** - Automatic retry mechanism with exponential backoff for failed API calls
- **📈 Improved Reliability** - Enhanced error handling and fallback strategies for chart loading

### New Features
- **6 Market Indicators**: IWM/QQQ, RSP/SPY, XLI/XLU, XLF/XLK, HYG/IEF, VIX
- **Dual Timeframes**: 1-year and 3-month analysis for each indicator
- **Comprehensive Watchlist**: Price, change, volume, 52-week highs/lows, trend analysis
- **Dynamic Ticker Management**: Add/remove stocks with validation
- **Professional Styling**: Custom gradients, responsive layout, modern UI
- **Enhanced Error Handling**: Comprehensive error management and user feedback
- **Interactive Charts**: Zoom, hover, and responsive chart interactions
- **Real-time Statistics**: Current ratios, daily changes, and sentiment analysis for all indicators
- **Smart Retry System**: Automatic retry with exponential backoff (3 attempts per API call)
- **Parallel Loading**: Charts and stock data load simultaneously for faster performance
- **Graceful Error Handling**: Failed charts show helpful error messages instead of blank spaces
- **Progress Feedback**: Real-time loading progress and completion status

---

## 🚀 Quick Start

1. Download `stock_dashboard.html`
2. Open it in your browser
3. Monitor your watchlist and analyze 6 key market indicators in real-time!

*No installation, no dependencies, no server setup required.*

### What You'll See
- **Stock Watchlist**: Default tech stocks (AAPL, NVDA, TSLA, META, AMZN, GOOG, MSFT) with comprehensive data
- **Market Indicators**: 6 financial ratios showing market sentiment across different sectors
- **Interactive Charts**: Switch between 1-year and 3-month timeframes for each indicator
- **Professional UI**: Modern gradient design with responsive layout