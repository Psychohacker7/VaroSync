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
          '/assets/images/company2.png',
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
            style.top = '1100px';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
            style.transform = 'scaleX(-1)';
          } else if (index === 1) {
            style.top = '1900px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
            style.transform = 'scaleX(-1)';
          } else if (index === 2) {
            style.top = '800px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 400px)';
          }
        } else if (page === 'technology') {
          if (index === 0) {
            style.top = '1830px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 1) {
            style.top = '0px';
            style.right = '0%';
            style.width = 'clamp(200px, 40vw, 500px)';
          } else if (index === 2) {
            style.top = '800px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 350px)';
          }
        } else if (page === 'company') {
          if (index === 0) {
            style.top = '0px';
            style.left = '0%';
            style.width = 'clamp(200px, 40vw, 530px)';
          }
        } else if (page === 'contact') {
          if (index === 0) {
            style.top = '500px';
            style.left = '0%';
            style.width = 'clamp(150px, 35vw, 300px)';
          } else if (index === 1) {
            style.top = '1000px';
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