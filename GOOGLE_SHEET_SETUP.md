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
    var timestampFormatted = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    
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
    // CASE 2: REAL CUSTOMER LEAD INQUIRY (Appended to Main CRM Tab)
    // =========================================================================
    var leadSheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
    
    leadSheet.appendRow([
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

4. **Deploy as New Version**:
   - In the top-right corner, click **Deploy &rarr; Manage deployments**.
   - Click **✏️ Edit (pencil icon)** on your existing deployment.
   - Set **Version**: `New version`.
   - Click **Deploy**.
