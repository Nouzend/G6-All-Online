import React, { useState, useEffect } from 'react';

export const getComments = async () => {
  return [
    {
      id: "1",
      body: "สินค้าสวยมาก ตรงปก ห่อมาดีมาก",
      username: "user",
      userId: "1",
      parentId: null,
      createdAt: "2021-05-05T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "ส่งเร็วดีค่ะ พึ่งสั่งไปเมื่อวาน วันนี้มาส่งแล้ว",
      username: "user4",
      userId: "2",
      parentId: null,
      createdAt: "2023-05-03T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "ใช้ดีมั้ยคะ",
      username: "user3",
      userId: "2",
      parentId: "1",
      createdAt: "2023-05-04T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "ส่งเร็วจริงๆค่ะ ยืนยันอีกเสียง 😁",
      username: "user2",
      userId: "2",
      parentId: "2",
      createdAt: "2023-05-03T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "user",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};

function App() {
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState('');
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    async function fetchComments() {
      // Build the URL for the API endpoint with query parameters
      let url = '/comments';
      if (userId || body || createdAt) {
        url += '?';
        if (userId) {
          url += `userId=${userId}&`;
        }
        if (body) {
          url += `body=${body}&`;
        }
        if (createdAt) {
          url += `createdAt=${createdAt}&`;
        }
        url = url.slice(0, -1); // Remove trailing &
      }

      // Send a GET request to the API endpoint
      const response = await fetch(url);
      const data = await response.json();
      setComments(data);
    }

    fetchComments();
  }, [userId, body, createdAt]);

  return (
    <div>
      <h1>Comments</h1>
      <form>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />

        <label>Body:</label>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />

        <label>Created At:</label>
        <input type="text" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.username}</strong> - {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
