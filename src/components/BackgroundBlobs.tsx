interface BackgroundBlobsProps {
  page: 'landing' | 'technology' | 'company' | 'contact'
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
          '/assets/images/company2.png', // Only company2 blob - company1 and company3 are positioned in content
        ]

      default:
        return []
    }
  }

  return (
    <div className={`background-blobs background-blobs--${page}`}>
      {getBlobImages().map((blob, index) => {
        let style: any = {
          height: 'auto',
        };
        
        if (page === 'landing') {
          if (index === 0) {
            style.top = '2400px';  // Base value - overridden by media queries
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          } else if (index === 1) {
            style.top = '1750px';  // Base value - overridden by media queries
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          } else if (index === 2) {
            style.top = '900px';   // Base value - overridden by media queries
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          }

        } else if (page === 'technology') {
          if (index === 0) {
            style.top = '1830px';  // Base value - add tech page media queries
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 1) {
            style.top = '0px';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 2) {
            style.top = '800px';   // Base value - add tech page media queries
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 350px)';
          }

        } else if (page === 'company') {
          if (index === 0) {
            // Only company2 blob now - positioned at top left (untouched as requested)
            style.top = '0px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 530px)';
          }
          

        } else if (page === 'contact') {
          if (index === 0) {
            style.top = '500px';   // Base value - add contact page media queries
            style.left = '0%';
            style.width = 'clamp(150px, 35vw, 300px)';
          } else if (index === 1) {
            style.top = '1000px';  // Base value - add contact page media queries
            style.right = '0%';
            style.width = 'clamp(150px, 35vw, 300px)';
          }
        }
        
        return (
          <img
            key={index}
            src={blob}
            alt=""
            className={`blob blob-${index + 1}`}
            style={style}
          />
        )
      })}
    </div>
  )
}

export default BackgroundBlobs 