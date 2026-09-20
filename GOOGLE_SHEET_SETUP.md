# Connecting Your Live Google Sheet to MaidPro

Your live spreadsheet columns have already been mapped:
**Sheet URL**: [https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU](https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU)

---

### Exact Columns Automatically Populated on Every Inquiry:
1. **Date & Timestamp** &rarr; Exact query time (e.g. `20/09/2026 04:37 PM`)
2. **Handled By** &rarr; `"Website"`
3. **Status** &rarr; `"1. New Inquiry"`
4. **Client Name** &rarr; Customer's Name (e.g. `Dr. Rajesh Sharma`)
5. **Contact no.** &rarr; Phone / WhatsApp number (e.g. `9876543210`)
6. **City** &rarr; `"Agra"`
7. **Complete Address** &rarr; `Locality, Agra` (e.g. `Khandari, Agra`)
8. **Number of Family Members** &rarr; Selected home size (if provided)
9. **⏰ Work Requirements | कार्य आवश्यकताएँ** &rarr; Service requested (e.g. `House Maid Service (Hourly & Monthly)`)
10. **Salary Details** &rarr; Selected pricing/shift slab
11. **Candidate Preference** &rarr; Blank for coordinator to fill
12. **Additional Details** &rarr; Callback notes / Shift
13. **Feedback** &rarr; `"New Web Lead"`

---

### Step-by-Step Setup (Takes 60 Seconds):

1. **Open your Google Sheet**:
   Go to [https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU](https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU)

2. **Open Apps Script**:
   In the top menu, click **Extensions** &rarr; **Apps Script**.

3. **Paste the Webhook Code**:
   Clear any existing code in the editor and paste the code below:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    
    var data = JSON.parse(e.postData.contents);
    var now = new Date();
    // Full date & exact time timestamp when query was raised (IST)
    var timestampFormatted = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    
    // Append row matching your exact 13 CRM columns
    sheet.appendRow([
      timestampFormatted,                                      // 1. Date & Exact Timestamp (e.g. 20/09/2026 04:37 PM)
      "Website",                                              // 2. Handled By
      "1. New Inquiry",                                        // 3. Status
      data.name || "",                                         // 4. Client Name
      data.phone || "",                                        // 5. Contact no.
      "Agra",                                                  // 6. City
      (data.locality ? data.locality + ", Agra" : "Agra"),     // 7. Complete Address
      data.homeSize || "",                                     // 8. Number of Family Members
      data.service || "Maid / Cleaning Service",               // 9. ⏰ Work Requirements | कार्य आवश्यकताएँ
      data.shift || "",                                        // 10. Salary Details
      "",                                                      // 11. Candidate Preference
      data.notes || "Source: Website Callback Form",           // 12. Additional Details
      "New Web Lead"                                           // 13. Feedback
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", status: "1. New Inquiry", timestamp: timestampFormatted }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

4. **Deploy as Web App**:
   - In the top-right corner, click **Deploy** &rarr; **New deployment**.
   - Click the gear icon ⚙️ next to "Select type" and select **Web app**.
   - Set **Execute as**: `Me (your email)`.
   - Set **Who has access**: `Anyone`.
   - Click **Deploy**, click **Authorize access**, choose your Google account, click **Advanced** &rarr; **Go to Untitled project (unsafe)**, and click **Allow**.
   - Copy the generated **Web App URL** (starts with `https://script.google.com/macros/s/.../exec`).

5. **Add Webhook URL to `.env.local`**:
   Paste the copied URL in your `.env.local` file (and in your Vercel deployment dashboard):
   ```env
   GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
   ```
