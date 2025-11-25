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
      date: "Nov 2025",
      title: "Invited to present at Nvidia HQ after the Evolved Hackathon",
      excerpt: "We're thrilled to have secured runner-up at the Evolved hackathon, earning us an invitation to present our solution at Nvidia's headquarters in December.",
      category: "Awards",
      size: "medium",
      url: "https://www.evolvedtechnology.org",
      image: "/assets/images/evolved.png"
    },
    {
      id: 2,
      date: "Nov 2025",
      title: "First Place at AWS Generative AI Hackathon NYC",
      excerpt: "Varosync took home first place at the AWS Generative AI Hackathon in New York City, competing alongside some of the brightest minds in agentic AI innovation.",
      category: "Awards",
      size: "medium",
      url: "https://aws.amazon.com/startups/events/aws-agentic-ai-hackathon-nyc2025",
      image: "/assets/images/aws.png"
    },
    {
      id: 3,
      date: "Nov 2025",
      title: "Runner-Up at AWS Heidi Health Hackathon",
      excerpt: "Our healthcare AI solution earned runner-up honours at the Heidi Health Hackathon in San Francisco, showcasing the impact of our technology in transforming patient care.",
      category: "Awards",
      size: "medium",
      url: "https://events.humanitix.com/heidibuild-san-francisco",
      image: "/assets/images/heidii.png"
    },
    {
      id: 4,
      date: "Oct 2025",
      title: "Joined VentureCrush by Lowenstein Sandler",
      excerpt: "We're proud to join VentureCrush, Lowenstein Sandler's premier accelerator programme, where we'll scale our pharmaceutical AI solutions alongside exceptional industry partners.",
      category: "Accelerator",
      size: "large",
      url: "https://www.venturecrush.com",
      image: "/assets/images/Venturecrush.jpeg"
    },
    {
      id: 5,
      date: "Oct 2025",
      title: "Presenting at MIT's MoML Conference",
      excerpt: "Varosync will present our latest advances in AI-driven drug discovery at MIT's Machine Learning for Molecular Discovery conference, joining leading researchers in computational science.",
      category: "Conference",
      size: "medium",
      url: "https://www.moml.mit.edu",
      image: "/assets/images/MoML.png"
    },
    {
      id: 6,
      date: "Oct 2025",
      title: "Best AI Solution at The Ventures NYC Global Startup Awards",
      excerpt: "Varosync received the Best AI Solution award at The Ventures NYC Global Startup Awards, recognising our work in revolutionising pharmaceutical research through innovative AI.",
      category: "Awards",
      size: "medium",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7379005266127900672",
      image: "/assets/images/theventures.png"
    },
    {
      id: 7,
      date: "Jul 2025",
      title: "Introducing Varosync",
      author: "",
      excerpt: "As we shape the future of pharma, we're proud to introduce Varosync.",
      category: "Tech",
      size: "medium",
      url: "https://www.varosync.com"
    }
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
          {/* ROW 1: Featured card (ID 1) spans 2 columns, blob news2.png (flipped) in third position */}
          <article className="news-card featured">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[0].category} • {blogPosts[0].date}</span>
                <h2 className="news-title" style={{ fontFamily }}>{blogPosts[0].title}</h2>
                {blogPosts[0].author && <p className="news-author" style={{ fontFamily }}>{blogPosts[0].author}</p>}
              </div>
              {blogPosts[0].image && (
                <div className="news-image-container">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="news-card-image"
                  />
                </div>
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[0].excerpt}</p>
                <a href={blogPosts[0].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
          <img 
            src="/assets/images/news2.png" 
            alt="" 
            className="news-grid-blob blob-row1"
          />

          {/* ROW 2: blob news1.png (flipped) in first position, followed by two cards (ID 2, ID 3) */}
          <img 
            src="/assets/images/news1.png" 
            alt="" 
            className="news-grid-blob blob-row2"
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
                  <div className="news-image-container">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="news-card-image"
                    />
                  </div>
                )}
                <div className="news-footer">
                  <p className="news-excerpt" style={{ fontFamily }}>{post.excerpt}</p>
                  <a href={post.url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
                </div>
              </div>
            </article>
          ))}

          {/* ROW 3: Three cards (ID 4, ID 5, ID 6) */}
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[3].category} • {blogPosts[3].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[3].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[3].author}</p>
              </div>
              {blogPosts[3].image && (
                <div className="news-image-container">
                  <img 
                    src={blogPosts[3].image} 
                    alt={blogPosts[3].title}
                    className="news-card-image"
                  />
                </div>
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[3].excerpt}</p>
                <a href={blogPosts[3].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[4].category} • {blogPosts[4].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[4].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[4].author}</p>
              </div>
              {blogPosts[4].image && (
                <div className="news-image-container">
                  <img 
                    src={blogPosts[4].image} 
                    alt={blogPosts[4].title}
                    className="news-card-image"
                  />
                </div>
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[4].excerpt}</p>
                <a href={blogPosts[4].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[5].category} • {blogPosts[5].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[5].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[5].author}</p>
              </div>
              {blogPosts[5].image && (
                <div className="news-image-container">
                  <img 
                    src={blogPosts[5].image} 
                    alt={blogPosts[5].title}
                    className="news-card-image"
                  />
                </div>
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[5].excerpt}</p>
                <a href={blogPosts[5].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>

          {/* ROW 4: blob news3.png spans 2 columns, followed by one card (ID 7) */}
          <img 
            src="/assets/images/news3.png" 
            alt="" 
            className="news-grid-blob blob-row3"
          />
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[6].category} • {blogPosts[6].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[6].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[6].author}</p>
              </div>
              {blogPosts[6].image && (
                <div className="news-image-container">
                  <img 
                    src={blogPosts[6].image} 
                    alt={blogPosts[6].title}
                    className="news-card-image"
                  />
                </div>
              )}
              <div className="news-footer">
                <p className="news-excerpt" style={{ fontFamily }}>{blogPosts[6].excerpt}</p>
                <a href={blogPosts[6].url} className="read-more" target="_blank" rel="noopener noreferrer" style={{ fontFamily }}>Read More</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default News 