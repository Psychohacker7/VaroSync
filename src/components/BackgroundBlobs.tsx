interface BackgroundBlobsProps {
  page: 'landing' | 'technology' | 'company' | 'news' | 'contact'
}

const BackgroundBlobs = ({ page }: BackgroundBlobsProps) => {
  const getBlobImages = () => {
    switch (page) {
      case 'landing':
        return [
          '/assets/images/landing1.png',
          '/assets/images/landing2.png',
          '/assets/images/landing3.png',
        ]
      case 'technology':
        return [
          '/assets/images/technology1.png',
          '/assets/images/technology2.png',
          '/assets/images/technology3.png',
        ]
      case 'company':
        return [
          '/assets/images/company1.png',
          '/assets/images/company2.png',
        ]
      case 'news':
        return [
          '/assets/images/news1.png',
          '/assets/images/news2.png',
          '/assets/images/news3.png',
        ]
      default:
        return []
    }
  }

  return (
    <div className="background-blobs">
      {getBlobImages().map((blob, index) => {
        let style: any = {
          width: 'clamp(150px, 35vw, 300px)',
          height: 'auto',
        };
        if (page === 'landing') {
          if (index === 0) {
            style.top = '310%';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          } else if (index === 1) {
            style.top = '230%';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          } else if (index === 2) {
            style.top = '120%';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          }

        } else if (page === 'technology') {
          if (index === 0) {
            style.top = '99%';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 1) {
            style.top = '0%';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 2) {
            style.top = '187%';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 350px)';
          }

        } else if (page === 'company') {
          if (index === 0) {
            style.top = '70%';
            style.right = '-2%';
          } else if (index === 1) {
            style.top = '0%';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 530px)';
          }
        } else if (page === 'news') {
          if (index === 0) {
            style.top = '100%';
            style.right = '0%';
            style.width = 'clamp(250px, 45vw, 450px)';
          } else if (index === 1) {
            style.top = '20%';
            style.left = '0%';
            style.width = 'clamp(150px, 35vw, 300px)';
          } else if (index === 2) {
            style.top = '150%';
            style.left = '-2%';
            style.width = 'clamp(400px, 70vw, 700px)';
          }
        } else if (page === 'contact') {
          if (index === 0) {
            style.top = '30%';
            style.left = '0%';
          } else if (index === 1) {
            style.top = '70%';
            style.right = '0%';
          }
        } else {
          style.top = `${20 + index * 30}%`;
          style[index % 2 === 0 ? 'left' : 'right'] = '0%';
        }
        return (
          <img
            key={index}
            src={blob}
            alt=""
            className={`blob blob-${index + 1} ${page}-blob-${index + 1}`}
            style={style}
          />
        )
              })}
      <style>{`
        /* Mobile positioning for landing page blobs */
        @media (max-width: 768px) {
          .landing-blob-1 {
            top: 407% !important;
          }
          
          .landing-blob-2 {
            top: 312% !important;
          }
          
          .landing-blob-3 {
            top: 45% !important;
          }
          
          /* Mobile positioning for technology page blobs */
          .technology-blob-1 {
            top: 99% !important;
          }
          
          .technology-blob-2 {
            top: 0% !important;
          }
          
          .technology-blob-3 {
            top: 201% !important;
          }
          
          /* Mobile positioning for company page blobs */
          .company-blob-1 {
            top: 173% !important;
          }
          
          .company-blob-2 {
            top: 0% !important;
          }
          
          /* Mobile positioning for news page blobs */
          .news-blob-1 {
            top: 78% !important;
            right: -5% !important;
          }
          
          .news-blob-2 {
            top: 7% !important;
          }
          
          .news-blob-3 {
            top: 227% !important;
          }
        }
      `}</style>
    </div>
  )
}

export default BackgroundBlobs 