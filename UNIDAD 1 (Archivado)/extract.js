const fs = require('fs');
const path = require('path');
const textract = require('textract');

const folderPath = path.join(__dirname);

fs.readdir(folderPath, (err, files) => {
    if (err) throw err;
    let combinedText = '';
    let processed = 0;
    const validFiles = files.filter(f => f.endsWith('.pdf') || f.endsWith('.docx') || f.endsWith('.doc') || f.endsWith('.pptx'));
    
    if(validFiles.length === 0) {
        console.log("No valid files");
        return;
    }
    
    validFiles.forEach(file => {
        const filePath = path.join(folderPath, file);
        textract.fromFileWithPath(filePath, (error, text) => {
            processed++;
            if (error) {
                console.error(`Error with ${file}: `, error);
            } else {
                combinedText += `\n\n=== START OF ${file} ===\n\n`;
                combinedText += text;
                combinedText += `\n\n=== END OF ${file} ===\n\n`;
            }
            if (processed === validFiles.length) {
                fs.writeFileSync(path.join(folderPath, 'extracted_content.txt'), combinedText);
                console.log('Extraction complete. Saved to extracted_content.txt');
            }
        });
    });
});
