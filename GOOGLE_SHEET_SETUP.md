# Connecting Your Live Google Sheet to MaidPro

Your live spreadsheet columns have already been mapped:
**Sheet URL**: [https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU](https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU)

---

### Dual-Tab Features:
- **Tab 1 (`Inquiries`)**: Captures real customer callback enquiries with name, phone, locality, service, and shift.
- **Tab 2 (`Service Interest & Clicks`)**: Automatically created! Logs which services customers are clicking on, pricing tiers explored, and phone/WhatsApp taps.

---

### Step-by-Step Setup:

1. **Open your Google Sheet**:
   Go to [https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU](https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU)

2. **Open Apps Script**:
   In the top menu, click **Extensions** &rarr; **Apps Script**.

3. **Paste the Unified Webhook Code**:
   Replace existing code with:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var now = new Date();
    var timestampFormatted = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm:ss a");
    
    // =========================================================================
    // CASE 1: USER CLICKS & SERVICE INTEREST (Tracked in Tab 2)
    // =========================================================================
    if (data.type === "event") {
      var eventSheet = doc.getSheetByName("Service Interest & Clicks");
      if (!eventSheet) {
        eventSheet = doc.insertSheet("Service Interest & Clicks");
        eventSheet.appendRow([
          "Timestamp (IST)",
          "Event Type",
          "Service Name / Target",
          "Interaction Details (Shift / Rate / Area)",
          "Page Source"
        ]);
        eventSheet.setFrozenRows(1);
      }
      
      var eventAction = data.event || "Click";
      var targetName = data.service_title || data.service || data.service_id || "-";
      var detailsText = "";
      
      if (data.hours && data.rate) {
        detailsText = "Shift: " + data.hours + " | Rate: " + data.rate;
      } else if (data.locality) {
        detailsText = "Area: " + data.locality;
      } else if (data.name) {
        detailsText = "Customer: " + data.name;
      } else {
        detailsText = "User Interaction";
      }
      
      eventSheet.appendRow([
        timestampFormatted,
        eventAction,
        targetName,
        detailsText,
        data.url || "Website"
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ result: "event_logged" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // =========================================================================
    // CASE 2: REAL CUSTOMER LEAD INQUIRY (100% Automatic Monthly Rollover)
    // =========================================================================
    // Automatically generates tab name based on current date, e.g. "November 2026", "December 2026"
    var currentMonthName = Utilities.formatDate(now, "Asia/Kolkata", "MMMM yyyy");
    
    // Check if the current month tab already exists
    var leadSheet = doc.getSheetByName(currentMonthName);

    // If it's a new month and the tab doesn't exist yet, automatically create it!
    if (!leadSheet) {
      // 1. Insert new tab at index 0 (places it at the very first position on the far left)
      leadSheet = doc.insertSheet(currentMonthName, 0);

      // 2. Find previous month tab to copy headers and formatting from
      var allSheets = doc.getSheets();
      var prevSheet = null;
      for (var i = 1; i < allSheets.length; i++) {
        var sName = allSheets[i].getName();
        if (sName !== "Service Interest & Clicks") {
          prevSheet = allSheets[i];
          break;
        }
      }

      if (prevSheet && prevSheet.getLastColumn() > 0) {
        var headers = prevSheet.getRange(1, 1, 1, prevSheet.getLastColumn()).getValues();
        leadSheet.getRange(1, 1, 1, prevSheet.getLastColumn()).setValues(headers);
        leadSheet.getRange(1, 1, 1, prevSheet.getLastColumn()).setFontWeight("bold");
        leadSheet.setFrozenRows(1);
      } else {
        // Fallback standard headers
        leadSheet.appendRow([
          "Date & Exact Timestamp",
          "Handled By",
          "Status",
          "Feedback / Additional Details",
          "Client Name",
          "Contact no.",
          "City",
          "Complete Address",
          "Number of Family Members",
          "⏰ Work Requirements | कार्य आवश्यकताएँ",
          "Salary Details",
          "Candidate Preference"
        ]);
        leadSheet.setFrozenRows(1);
      }
    }

    var clientCity = data.city ? String(data.city).trim() : "Agra";
    var fullAddress = data.locality ? String(data.locality).trim() : "";

    leadSheet.appendRow([
      timestampFormatted,                                      // 1. (A) Date & Exact Timestamp
      "Website",                                              // 2. (B) Handled By
      "1. New Inquiry",                                        // 3. (C) Status
      data.notes || "",                                        // 4. (D) Feedback/Additional Details
      data.name || "",                                         // 5. (E) Client Name
      data.phone || "",                                        // 6. (F) Contact no.
      clientCity,                                              // 7. (G) City (Dynamic: Agra, Mumbai, Delhi, etc.)
      fullAddress,                                             // 8. (H) Complete Address
      data.homeSize || "",                                     // 9. (I) Number of Family Members
      data.service || "House Maid Service",                   // 10. (J) ⏰ Work Requirements | कार्य आवश्यकताएँ
      data.shift || "",                                        // 11. (K) Salary Details
      ""                                                       // 12. (L) Candidate Preference
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

4. **Deploy as New Version**:
   - In the top-right corner, click **Deploy &rarr; Manage deployments**.
   - Click **✏️ Edit (pencil icon)** on your existing deployment.
   - Set **Version**: `New version`.
   - Click **Deploy**.
