/**
 * MaidPro Google Sheets Clean CRM Webhook
 * -----------------------------------------------------------------
 * ONLY captures genuine customer leads with valid Name and Contact Number.
 * Completely ignores and discards empty/cluttered requests.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ result: "error", message: "No data payload" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);

    // =========================================================================
    // STRICT FILTER: Ignore any telemetry/events or entries without Name & Phone
    // =========================================================================
    if (data.type === "event") {
      return ContentService.createTextOutput(JSON.stringify({ result: "ignored_event" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var clientName = data.name ? String(data.name).trim() : "";
    var clientPhone = data.phone ? String(data.phone).replace(/\D/g, "").trim() : "";

    // Reject immediately if Name or 10-digit Phone is missing
    if (!clientName || clientName.length < 2 || !clientPhone || clientPhone.length < 10) {
      return ContentService.createTextOutput(JSON.stringify({
        result: "ignored",
        message: "Discarded: Requires valid client name and 10-digit phone number."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // =========================================================================
    // APPEND TO CRM INQUIRIES SHEET
    // =========================================================================
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var leadSheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
    var now = new Date();
    var timestampStr = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    var todayKey = Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd");
    var todayTitle = "📅  " + Utilities.formatDate(now, "Asia/Kolkata", "EEEE, dd MMMM yyyy") + " — Inquiries";
    
    // Check if we need to insert a Day Separator for today
    var scriptProps = PropertiesService.getScriptProperties();
    var lastSeparatorDate = scriptProps.getProperty("LAST_DAY_SEPARATOR");
    
    if (lastSeparatorDate !== todayKey) {
      leadSheet.appendRow([todayTitle, "", "", "", "", "", "", "", "", "", "", "", ""]);
      var sepRowIndex = leadSheet.getLastRow();
      var maxCols = Math.max(leadSheet.getLastColumn(), 13);
      var sepRange = leadSheet.getRange(sepRowIndex, 1, 1, maxCols);
      
      try {
        sepRange.merge();
      } catch (err) {}
      
      sepRange.setBackground("#E8F0FE");  // Soft pastel highlight
      sepRange.setFontWeight("bold");
      sepRange.setFontColor("#1E3A8A");   // Deep blue text
      sepRange.setFontSize(10);
      sepRange.setHorizontalAlignment("left");
      
      scriptProps.setProperty("LAST_DAY_SEPARATOR", todayKey);
    }
    
    // Append the verified customer lead row
    leadSheet.appendRow([
      now,                                                     // 1. Date & Exact Timestamp (Native DateTime)
      "Website",                                              // 2. Handled By
      "1. New Inquiry",                                        // 3. Status
      clientName,                                              // 4. Client Name
      clientPhone,                                             // 5. Contact no.
      "Agra",                                                  // 6. City
      (data.locality ? data.locality + ", Agra" : "Agra"),     // 7. Complete Address
      data.homeSize || "",                                     // 8. Number of Family Members
      data.service || "House Maid Service",                   // 9. ⏰ Work Requirements | कार्य आवश्यकताएँ
      data.shift || "",                                        // 10. Salary Details
      "",                                                      // 11. Candidate Preference
      data.notes || `Source: ${data.source || "Website Callback Form"}`, // 12. Additional Details
      "New Web Lead (" + timestampStr + ")"                    // 13. Feedback
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      status: "1. New Inquiry",
      client: clientName,
      phone: clientPhone,
      timestamp: timestampStr
    })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Adds a custom menu in Google Sheets for quick tools
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("📋 MaidPro Tools")
    .addItem("📅 Insert Today's Day Separator", "insertTodayDaySeparator")
    .addItem("🧹 Clean Up Blank / Empty Rows", "cleanUpEmptyRows")
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

/**
 * 1-Click Tool: Deletes any empty/blank inquiry rows where Client Name and Phone are empty
 */
function cleanUpEmptyRows() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
  var lastRow = sheet.getLastRow();
  if (lastRow <= 1) return;
  
  var range = sheet.getRange(2, 1, lastRow - 1, 13);
  var values = range.getValues();
  var deletedCount = 0;
  
  // Iterate backwards to safely delete rows
  for (var i = values.length - 1; i >= 0; i--) {
    var row = values[i];
    var firstCol = String(row[0] || "").trim();
    var clientName = String(row[3] || "").trim();
    var contactNo = String(row[4] || "").trim();
    
    // Keep day separator rows (starts with 📅)
    if (firstCol.indexOf("📅") !== -1) {
      continue;
    }
    
    // Delete row if BOTH client name and contact no are empty
    if (!clientName && !contactNo) {
      sheet.deleteRow(i + 2);
      deletedCount++;
    }
  }
  
  var ui = SpreadsheetApp.getUi();
  ui.alert("🧹 Clean Up Complete", "Removed " + deletedCount + " blank/empty row(s). Your sheet is now completely clean!", ui.ButtonSet.OK);
}
