<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1 id="book-listing-web-application">Book Listing Web Application</h1>
<p>A simple web application that allows users to view, add, and delete books. The application includes both frontend and backend functionality, allowing users to manage a list of books with fields for title, author, and description.</p>
<h2 id="features">Features</h2>
<ul>
<li><strong>View Books</strong>: Display a list of books with details (title, author, description).</li>
<li><strong>Add Book</strong>: Add a new book by entering title, author, and description.</li>
<li><strong>Delete Book</strong>: Remove a book from the list.</li>
</ul>
<h2 id="tech-stack">Tech Stack</h2>
<ul>
<li><strong>Frontend</strong>: React.js, Tailwind CSS</li>
<li><strong>Backend</strong>: Node.js, Express.js, MongoDB</li>
<li><strong>Database</strong>: MongoDB Atlas (cloud database)</li>
</ul>
<p><strong>Backend</strong> (Node.js + Express.js + MongoDB)</p>
<ul>
<li>API to get, add, and delete books.</li>
</ul>
<h2 id="tech-stack-1">Tech Stack</h2>
<ul>
<li><strong>Node.js</strong> - Runtime environment</li>
<li><strong>Express</strong> - Backend framework</li>
<li><strong>MongoDB</strong> - Database</li>
</ul>
<h2 id="setup-and-installation">Setup and Installation</h2>
<h2 id="installation">Installation</h2>
<h3 id="backend">Backend</h3>
<ol>
<li><strong>Clone the repository</strong>:</li>
</ol>
<pre><code>  git clone https://github.com/pintu544/BookApis
  cd BookApis
</code></pre>
<h3 id="install-dependencies">Install Dependencies</h3>
<p>bash</p>
<pre><code>
npm install
</code></pre>
<h3 id="environment-variables">Environment Variables</h3>
<p>Create a <code>.env</code> file in the root directory and configure the following variables:<br>
``<br>
`PORT=5000<br>
MONGO_URI=your_mongodb_connection_string</p>
<p>``</p>
<h3 id="running-the-application">Running the Application</h3>
<p>To start the server, run:</p>
<p>bash</p>
<pre><code>
`npm run dev` 
</code></pre>
<p>The backend should be running at <code>http://localhost:8000</code>.</p>
<h3 id="live-demo">Live Demo</h3>
<p>The live backend demo is available <a href="https://bookapis.onrender.com/api/v1/books">https://bookapis.onrender.com/api/v1/books</a></p>
<h2 id="api-endpoints">API Endpoints</h2>
<h3 id="book-endpoints">Book Endpoints</h3>
<ul>
<li><strong>POST</strong> <code>/api/v1/books/createBook</code> -Create Book</li>
<li><strong>GET</strong> <code>/api/v1/books</code> - Get All Books</li>
<li><strong>DELETE</strong> <code>/api/v1/books/:id</code> - delete Book</li>
</ul>
<h2 id="project-structure">Project Structure</h2>
<p>bash</p>
<pre><code>
BackendAuthSocket/
├── db/               # Configuration files (DB, JWT)
├── controllers/          # Functions handling requests
├── models/               # Mongoose models (Book Data)
├── routes/               # API routes
└── app.js             # Main server entry point
</code></pre>
</div>
</body>

</html>
