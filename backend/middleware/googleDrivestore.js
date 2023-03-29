const {google} = require('googleapis');
const drive = google.drive({version: 'v3', auth});
const fileMetadata = {
  name: 'image.jpg',
};
const media = {
  mimeType: 'image/jpeg',
  body: fs.createReadStream('/path/to/image.jpg'),
};
drive.files.create({
  resource: fileMetadata,
  media: media,
  fields: 'id',
}, (err, file) => {
  if (err) {
    // Handle error
    console.error(err);
  } else {
    console.log(`File ID: ${file.id}`);
  }
});
