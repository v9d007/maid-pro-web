/**
 * MaidPro Google Sheets Unified Webhook (Leads + Service Interest)
 * -----------------------------------------------------------------
 * 1. Customer Inquiries -> Appends to your main CRM sheet ("Inquiries")
 * 2. Service Clicks & Interest -> Appends to "Service Interest & Clicks" tab
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    var now = new Date();
    var timestampStr = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    
    // =========================================================================
    // 1. SERVICE CLICKS & USER INTEREST (Tracked in Tab 2)
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
        now,                  // Native Date timestamp
        eventAction,
        targetName,
        detailsText,
        data.url || "Website"
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ result: "event_logged" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // =========================================================================
    // 2. REAL CUSTOMER LEAD INQUIRY (Appended to Main CRM Tab 1)
    // =========================================================================
    var leadSheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
    
    // Check if we need to insert a Day Separator for today
    var todayKey = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd");
    var todayTitle = "📅  " + Utilities.formatDate(now, "Asia/Kolkata", "EEEE, dd MMMM yyyy") + " — Inquiries";
    
    var scriptProps = PropertiesService.getScriptProperties();
    var lastSeparatorDate = scriptProps.getProperty("LAST_DAY_SEPARATOR");
    
    // Insert day separator if it's a new day
    if (lastSeparatorDate !== todayKey) {
      leadSheet.appendRow([todayTitle, "", "", "", "", "", "", "", "", "", "", "", ""]);
      var sepRowIndex = leadSheet.getLastRow();
      var maxCols = Math.max(leadSheet.getLastColumn(), 13);
      var sepRange = leadSheet.getRange(sepRowIndex, 1, 1, maxCols);
      
      try {
        sepRange.merge();
      } catch (err) {}
      
      sepRange.setBackground("#E8F0FE");  // Soft pastel highlight banner
      sepRange.setFontWeight("bold");
      sepRange.setFontColor("#1E3A8A");   // Deep blue text
      sepRange.setFontSize(10);
      sepRange.setHorizontalAlignment("left");
      
      scriptProps.setProperty("LAST_DAY_SEPARATOR", todayKey);
    }
    
    leadSheet.appendRow([
      now,                                                     // 1. Date & Exact Timestamp (Native DateTime)
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
      "New Web Lead (" + timestampStr + ")"                    // 13. Feedback
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", status: "1. New Inquiry", timestamp: timestampStr }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Adds a custom menu in Google Sheets for quick one-click manual day separator
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("📋 MaidPro Tools")
    .addItem("📅 Insert Today's Day Separator", "insertTodayDaySeparator")
    .addToUi();
}

/**
 * Manually insert today's day separator banner into the Inquiries sheet
 */
function insertTodayDaySeparator() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var leadSheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
  var now = new Date();
  var todayTitle = "📅  " + Utilities.formatDate(now, "Asia/Kolkata", "EEEE, dd MMMM yyyy") + " — Inquiries";
  
  leadSheet.appendRow([todayTitle, "", "", "", "", "", "", "", "", "", "", "", ""]);
  var sepRowIndex = leadSheet.getLastRow();
  var maxCols = Math.max(leadSheet.getLastColumn(), 13);
  var sepRange = leadSheet.getRange(sepRowIndex, 1, 1, maxCols);
  
  try {
    sepRange.merge();
  } catch (err) {}
  
  sepRange.setBackground("#E8F0FE");
  sepRange.setFontWeight("bold");
  sepRange.setFontColor("#1E3A8A");
  sepRange.setFontSize(10);
  sepRange.setHorizontalAlignment("left");
}
