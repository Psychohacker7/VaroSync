import { useEffect } from 'react'
import '../styles/css/news.css'

const News = () => {
  useEffect(() => {
    document.title = 'Varosync - News'
  }, [])

  const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';

  const blogPosts = [
    {
      id: 1,
      date: "2025",
      title: "Member of VentureCrush by Lowenstein Sandler",
      excerpt: "We're excited to join VentureCrush by Lowenstein Sandler, a premier accelerator program that will help us scale our AI solutions for drug discovery and connect with key industry partners.",
      category: "Accelerator",
      size: "large",
      url: "https://www.venturecrush.com",
      image: "/assets/images/Venturecrush.jpeg"
    },
    {
      id: 2,
      date: "2025",
      title: "Presenting at MIT MoML Conference",
      excerpt: "Varosync has been selected to present at the prestigious MIT MoML (Machine Learning for Molecular Discovery) conference. We'll be sharing our latest advances in AI-driven pharmaceutical research.",
      category: "Conference",
      size: "medium",
      url: "https://www.moml.mit.edu",
      image: "/assets/images/MoML.png"
    },
    {
      id: 3,
      date: "2025",
      title: "Best AI Solution at The Ventures NYC Global Startup Awards",
      excerpt: "We're thrilled to announce that Varosync has been recognized as the Best AI Solution at The Ventures NYC Global Startup Awards. This recognition validates our commitment to revolutionizing drug discovery through innovative AI technologies.",
      category: "Awards",
      size: "medium",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7379005266127900672",
      image: "/assets/images/theventures.png"
    },
    {
      id: 4,
      date: "2025",
      title: "Introducing Varosync",
      author: "",
      excerpt: "As we shape the future of pharma, we're proud to introduce Varosync.",
      category: "Tech",
      size: "medium",
      url: "https://www.varosync.com"
    },
  ];

  return (
    <>
      {/* Static multi-layered mesh gradient background for organic, distributed look */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          pointerEvents: 'none',
          background: `
            linear-gradient(120deg, #FEF7E8 0%, #FFF9F0 60%, transparent 100%),
            linear-gradient(60deg, #FFFEF9 10%, transparent 80%),
            linear-gradient(200deg, #FFF9F0 20%, #FFFEF9 80%, transparent 100%),
            linear-gradient(90deg, #FEF7E8 0%, transparent 100%)
          `,
          transition: 'background 1s',
        }}
        aria-hidden="true"
      />
      <section className="content">
        <div className="news-header-section">&nbsp;</div>
        <div className="news-grid">
          {/* ROW 1: blob news2.png in first position */}
          <img 
            src="/assets/images/news2.png" 
            alt="" 
            className="news-grid-blob blob-row1"
          />
          {blogPosts.slice(1, 3).map((post) => (
            <article key={post.id} className="news-card">
              <div className="news-content">
                <div className="news-header">
                  <span className="news-category-date" style={{ fontFamily }}>{post.category} • {post.date}</span>
                  <h3 className="news-title" style={{ fontFamily }}>{post.title}</h3>
                  <p className="news-author" style={{ fontFamily }}>{post.author}</p>
                </div>
                {post.image && (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{
                      width: '100%',
                      maxHeight: '230px',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      marginBottom: '8px',
                      clipPath: 'inset(0 round 12px)',
                      display: 'block'
                    }}
                  />
                )}
                <div className="news-footer">
                  <p className="news-excerpt" style={{ fontFamily }}>{post.excerpt}</p>
                  <a href={post.url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
                </div>
              </div>
            </article>
          ))}

          {/* Featured card */}
          <article className="news-card featured">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[3].category} • {blogPosts[3].date}</span>
                <h2 className="news-title" style={{ fontFamily }}>{blogPosts[3].title}</h2>
                {blogPosts[3].author && <p className="news-author" style={{ fontFamily }}>{blogPosts[3].author}</p>}
              </div>
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[3].excerpt}</p>
                <a href={blogPosts[3].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
          {/* ROW 2: blob news1.png in third position */}
          <img 
            src="/assets/images/news1.png" 
            alt="" 
            className="news-grid-blob blob-row2"
          />

          {/* ROW 3: blob news3.png spans 2 columns */}
          <img 
            src="/assets/images/news3.png" 
            alt="" 
            className="news-grid-blob blob-row3"
          />
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[0].category} • {blogPosts[0].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[0].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[0].author}</p>
              </div>
              {blogPosts[0].image && (
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  style={{
                    width: '100%',
                    maxHeight: '300px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    marginBottom: '8px',
                    clipPath: 'inset(0 round 12px)',
                    display: 'block'
                  }}
                />
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[0].excerpt}</p>
                <a href={blogPosts[0].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default News 