# Python Automation Issues: When Your Scripts Stop Working

Python automation can save your business hours of manual work, but when scripts break, everything grinds to a halt. Here are the most common Python automation issues and how to fix them.

## 1. API Rate Limiting and Authentication Failures

**The Problem:** Your automation script suddenly stops working due to API changes or rate limits.

**Common Issues:**
- API endpoints changed or deprecated
- Authentication tokens expired
- Rate limiting exceeded
- API response format changed

**Quick Fix:**
```python
import requests
import time
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

# Set up retry strategy
retry_strategy = Retry(
    total=3,
    backoff_factor=1,
    status_forcelist=[429, 500, 502, 503, 504],
)

adapter = HTTPAdapter(max_retries=retry_strategy)
session = requests.Session()
session.mount("http://", adapter)
session.mount("https://", adapter)

# Add rate limiting
def api_call_with_rate_limit(url, headers, delay=1):
    try:
        response = session.get(url, headers=headers)
        if response.status_code == 429:
            time.sleep(delay * 2)  # Exponential backoff
            return api_call_with_rate_limit(url, headers, delay * 2)
        return response
    except Exception as e:
        print(f"API call failed: {e}")
        return None
```

## 2. File Path and Permission Issues

**The Problem:** Scripts work on your machine but fail on servers or other environments.

**Common Issues:**
- Different file paths between environments
- Missing file permissions
- File encoding problems
- Working directory issues

**Quick Fix:**
```python
import os
import pathlib
from pathlib import Path

# Use pathlib for cross-platform compatibility
def get_file_path(filename):
    # Get the script's directory
    script_dir = Path(__file__).parent.absolute()
    
    # Create path relative to script location
    file_path = script_dir / filename
    
    # Check if file exists
    if not file_path.exists():
        raise FileNotFoundError(f"File not found: {file_path}")
    
    return file_path

# Handle file permissions
def ensure_file_permissions(file_path):
    try:
        # Make file readable/writable
        os.chmod(file_path, 0o644)
        return True
    except PermissionError:
        print(f"Permission denied: {file_path}")
        return False
```

## 3. Database Connection and Query Issues

**The Problem:** Automation scripts fail when database connections drop or queries timeout.

**Common Issues:**
- Database connection timeouts
- Connection pool exhaustion
- Query performance problems
- Data type mismatches

**Quick Fix:**
```python
import psycopg2
from psycopg2 import pool
import time

# Connection pool setup
connection_pool = psycopg2.pool.SimpleConnectionPool(
    1, 20,  # min and max connections
    host="localhost",
    database="your_database",
    user="your_user",
    password="your_password",
    connect_timeout=10
)

def execute_query_with_retry(query, params=None, max_retries=3):
    for attempt in range(max_retries):
        try:
            conn = connection_pool.getconn()
            cursor = conn.cursor()
            
            cursor.execute(query, params)
            result = cursor.fetchall()
            
            cursor.close()
            connection_pool.putconn(conn)
            return result
            
        except psycopg2.OperationalError as e:
            print(f"Database error (attempt {attempt + 1}): {e}")
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)  # Exponential backoff
            else:
                raise
```

## 4. Memory and Performance Issues

**The Problem:** Scripts consume too much memory or run too slowly with large datasets.

**Common Issues:**
- Loading entire datasets into memory
- Inefficient loops and data processing
- Memory leaks from unclosed resources
- No progress tracking for long-running tasks

**Quick Fix:**
```python
import pandas as pd
import gc
from tqdm import tqdm

# Process data in chunks
def process_large_dataset(file_path, chunk_size=10000):
    results = []
    
    # Read file in chunks
    for chunk in tqdm(pd.read_csv(file_path, chunksize=chunk_size)):
        # Process chunk
        processed_chunk = process_chunk(chunk)
        results.append(processed_chunk)
        
        # Clear memory
        del chunk
        gc.collect()
    
    return pd.concat(results, ignore_index=True)

# Monitor memory usage
import psutil
import os

def log_memory_usage():
    process = psutil.Process(os.getpid())
    memory_mb = process.memory_info().rss / 1024 / 1024
    print(f"Memory usage: {memory_mb:.2f} MB")
```

## 5. Error Handling and Logging Issues

**The Problem:** Scripts fail silently or don't provide enough information about what went wrong.

**Common Issues:**
- No error handling for edge cases
- Insufficient logging
- No notification system for failures
- Difficult to debug when things go wrong

**Quick Fix:**
```python
import logging
import smtplib
from email.mime.text import MIMEText
from datetime import datetime

# Set up comprehensive logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('automation.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def send_error_notification(error_message):
    """Send email notification when automation fails"""
    try:
        msg = MIMEText(f"Automation script failed at {datetime.now()}\n\nError: {error_message}")
        msg['Subject'] = 'Automation Script Failure Alert'
        msg['From'] = 'your-email@domain.com'
        msg['To'] = 'admin@domain.com'
        
        # Send email (configure your SMTP settings)
        # server = smtplib.SMTP('smtp.gmail.com', 587)
        # server.starttls()
        # server.login('your-email@domain.com', 'your-password')
        # server.send_message(msg)
        # server.quit()
        
        logger.info("Error notification sent")
    except Exception as e:
        logger.error(f"Failed to send notification: {e}")

# Wrap main automation in error handling
def run_automation_safely():
    try:
        logger.info("Starting automation script")
        
        # Your automation code here
        main_automation_function()
        
        logger.info("Automation completed successfully")
        
    except Exception as e:
        error_msg = f"Automation failed: {str(e)}"
        logger.error(error_msg)
        send_error_notification(error_msg)
        raise
```

## The Business Impact of Automation Failures

When Python automation scripts break, it affects your business:

- **Lost Productivity:** Manual work that should be automated
- **Data Processing Delays:** Reports and analytics are late
- **Customer Service Issues:** Automated responses stop working
- **Revenue Impact:** Sales automation failures cost money

## When to Get Professional Automation Help

Consider professional help when:

- **Scripts fail regularly** and you can't identify the cause
- **Performance issues** make automation too slow to be useful
- **API changes** break your automation frequently
- **You need to scale** automation to handle more data
- **Security concerns** with your current automation setup

## Professional Python Automation Services

Expert automation support can:

- **Audit your current scripts** and identify issues
- **Implement robust error handling** and logging
- **Optimize performance** for better efficiency
- **Set up monitoring** to prevent future failures
- **Create documentation** for your automation processes

## Need Python Automation Help?

If your automation scripts are failing or not performing as expected, I can help get them working reliably again.

[Contact me for a free automation consultation](#contact)

---

*This post is part of our series on technical problems that affect business operations. Check out our other posts on React bugs, database performance, and AI builder issues.* 