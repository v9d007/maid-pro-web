/**
 * MaidPro Google Sheets Lead Webhook
 * ----------------------------------------------------
 * Configured specifically for your live MaidPro Google Sheet:
 * https://docs.google.com/spreadsheets/d/1uuU6W-q2BwnDV7qU1jAgw1YRb4e-t4R7GNXzby8HTpU
 *
 * Columns Mapped:
 * 1. Date & Timestamp (e.g. 20/09/2026 04:37 PM) -> Full timestamp when query was raised
 * 2. Handled By ("Website")
 * 3. Status ("1. New Inquiry")
 * 4. Client Name (e.g. Dr. Rajesh Sharma)
 * 5. Contact no. (e.g. 9876543210)
 * 6. City ("Agra")
 * 7. Complete Address (e.g. Khandari, Agra)
 * 8. Number of Family Members / Home Size
 * 9. ⏰ Work Requirements | कार्य आवश्यकताएँ (e.g. House Maid Service)
 * 10. Salary Details / Shift
 * 11. Candidate Preference
 * 12. Additional Details
 * 13. Feedback ("New Website Lead")
 */

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
