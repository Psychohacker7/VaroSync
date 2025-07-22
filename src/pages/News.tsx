import { useEffect } from 'react'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/news.css'

const News = () => {
  useEffect(() => {
    document.title = 'Varosync - News'
  }, [])

  const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';

  const blogPosts = [
    {
      id: 1,
      date: "2024",
      title: "AI Powers a New Era of Drug Discovery and Development",
      author: "Nature",
      excerpt: "This article discusses how the integration of artificial intelligence (AI) and big data is revolutionizing the drug discovery process. By combining AI with expert knowledge, pharmaceutical companies are accelerating the development of more effective medicines, reducing the time and cost traditionally associated with bringing new drugs to market. This hybrid approach is poised to provide new treatment options for patients worldwide.",
      category: "Research",
      size: "large",
      url: "https://www.nature.com/articles/d42473-024-00250-9"
    },
    {
      id: 2,
      date: "2023",
      title: "Molecular Free Energies, Rates, and Mechanisms from Data-Efficient Path Sampling Simulations",
      author: "Journal of Chemical Theory and Computation (ACS)",
      excerpt: "This paper introduces a data-efficient method for exploring reaction pathways and free energy surfaces using machine learning-enhanced path sampling. It highlights how physical priors and statistical inference can reduce simulation costs while improving mechanistic fidelity—an approach that aligns closely with our interest in model-driven simulations of pharmacokinetics and biomolecular interactions.",
      category: "Research",
      size: "medium",
      url: "https://pubs.acs.org/doi/10.1021/acs.jctc.3c00821"
    },
    {
      id: 3,
      date: "2024",
      title: "Starfysh Integrates Spatial Transcriptomic and Histologic Data to Reveal Heterogeneous Tumour–Immune Hubs",
      author: "Nature Biotechnology",
      excerpt: "This study introduces Starfysh, a computational framework that combines spatial transcriptomic data with histological context to identify cellular neighbourhoods within the tumour microenvironment. The method enables high-resolution mapping of tumour–immune interactions, uncovering functional hubs that are invisible to conventional analysis. For Varosync, this illustrates the power of integrative modelling in resolving biological heterogeneity.",
      category: "Research",
      size: "medium",
      url: "https://www.nature.com/articles/s41587-024-02173-8"
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
      <BackgroundBlobs page="news" />
      <section className="content">
        <div className="news-header-section">&nbsp;</div>
        <div className="news-grid">
          {/* Desktop layout with empty divs for positioning */}
          <div className="desktop-only"></div>
          {blogPosts.slice(1, 3).map((post) => (
            <article key={post.id} className="news-card">
              <div className="news-content">
                <div className="news-header">
                  <span className="news-category-date" style={{ fontFamily }}>{post.category} • {post.date}</span>
                  <h3 className="news-title" style={{ fontFamily }}>{post.title}</h3>
                  <p className="news-author" style={{ fontFamily }}>{post.author}</p>
                </div>
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
          <div className="desktop-only"></div>

          {/* Empty positioning divs for desktop */}
          <div className="desktop-only"></div>
          <div className="desktop-only"></div>
          <article className="news-card">
            <div className="news-content">
              <div className="news-header">
                <span className="news-category-date" style={{ fontFamily }}>{blogPosts[0].category} • {blogPosts[0].date}</span>
                <h3 className="news-title" style={{ fontFamily }}>{blogPosts[0].title}</h3>
                <p className="news-author" style={{ fontFamily }}>{blogPosts[0].author}</p>
              </div>
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