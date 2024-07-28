import { Footer, Navbar } from '@/components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <title>Boost Turku</title>
      <meta property="description" content="Entrepreneurship society of Turku inspiring startups since 2009." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    </head>
    <body>
      <div className="bg-primary-black overflow-hidden min-h-screen">
        <Navbar />
        <div className='min-h-[65vh]'>
          {children}
        </div>
        <Footer />
      </div></body>
  </html>
);

export default RootLayout;
