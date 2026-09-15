/**
 * MaidPro Google Sheets Form Webhook
 * ------------------------------------
 * Instructions:
 * 1. In your Google Sheet, click 'Extensions' > 'Apps Script'.
 * 2. Paste this code into the editor and click 'Save'.
 * 3. Click 'Deploy' > 'New deployment'.
 * 4. Select type: 'Web app'.
 * 5. Set 'Execute as': 'Me' and 'Who has access': 'Anyone'.
 * 6. Click 'Deploy' and copy the generated Web App URL.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();
    
    var data = JSON.parse(e.postData.contents);
    var now = new Date();
    var timestamp = Utilities.formatDate(now, "Asia/Kolkata", "dd/MM/yyyy hh:mm a");
    var autoId = "MP-" + Utilities.formatDate(now, "Asia/Kolkata", "yyMMdd-HHmmss");
    
    // Append the client inquiry row matching your CRM columns
    sheet.appendRow([
      autoId,
      timestamp,
      data.name || "",
      data.phone || "",
      data.locality || "",
      data.homeSize || "",
      data.service || "",
      data.shift || "To Discuss",
      "",                      // Agreed Fee (INR)
      "Rajesh (Ops)",          // Assigned Coordinator
      "Awaiting Allocation",   // Assigned Domestic Worker
      "STAFF-TBD",             // Staff ID
      "Pending",               // Police Verification
      "New Inquiry",           // Deal Status
      Utilities.formatDate(now, "Asia/Kolkata", "yyyy-MM-dd"), // Start Date
      "",                      // End Date
      "",                      // Days Left Formula
      "2 Leaves / month",      // Leave Policy
      "Pending",               // Payment Status
      "",                      // Customer Rating
      "",                      // Issue Details
      data.notes || ""         // Coordinator Notes
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", id: autoId }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
