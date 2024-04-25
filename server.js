const express = require('express');
const db = require('./database.js');

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

app.post('/api/postsign', (req, res) => {
  const { downloadKey, documentId } = req.body;
  const sql = 'INSERT INTO documents (downloadKey, documentId) VALUES (?,?)';
  db.run(sql, [downloadKey, documentId], (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Success', data: req.body });
  });
});

app.get('/api/getDownloadKey', (req, res) => {
  const { documentId } = req.query;  
  const sql = 'SELECT documentId,downloadKey FROM documents WHERE documentId = ?';
  db.get(sql, [documentId], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (row) {
      res.json({ documentId: row.documentId, downloadKey: row.downloadKey });
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
