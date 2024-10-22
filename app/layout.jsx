import  '@/styles/globals.css';

export default function layout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'white' }}>
        {children}
      </body>
    </html>
  );
}
