exports.welcomeEmail = (firstName, lastName, email) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <title>Welcome to InsightChat</title>
      <style>
        body {
          background-color: #f4f6fc;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 16px;
          color: #333;
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 600px;
          margin: 30px auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
        }
  
        .header {
          font-size: 26px;
          font-weight: bold;
          color: #4f46e5;
          margin-bottom: 10px;
        }
  
        .sub-header {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 20px;
        }
  
        .body-text {
          font-size: 16px;
          color: #444;
          line-height: 1.6;
        }
  
        .highlight {
          color: #4f46e5;
          font-weight: 600;
        }
  
        .button {
          display: inline-block;
          margin-top: 25px;
          padding: 12px 25px;
          font-size: 16px;
          background-color: #4f46e5;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          transition: background-color 0.3s ease;
        }
  
        .button:hover {
          background-color: #4338ca;
        }
  
        .footer {
          font-size: 14px;
          color: #9ca3af;
          margin-top: 40px;
        }
  
        .emoji {
          font-size: 22px;
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <div class="header">👋 Welcome to InsightChat!</div>
        <div class="sub-header">Your space to connect and collaborate instantly.</div>
        <div class="body-text">
          <p>Hi <span class="highlight">${firstName} ${lastName}</span>,</p>
          <p>We're thrilled to have you onboard!</p>
          <p>Start chatting, creating groups, and collaborating in real-time with <strong>InsightChat</strong>.</p>
          <p>Your registered email: <strong>${email}</strong></p>
          <a class="button" href="${process.env.FRONTEND_URL}">Launch InsightChat</a>
        </div>
        <div class="footer">
          <p class="emoji">💬 Stay connected, always.</p>
          <p>— The InsightChat Team</p>
        </div>
      </div>
    </body>
  
    </html>`;
};  