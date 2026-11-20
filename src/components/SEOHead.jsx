import { useEffect } from "react";

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://divyakoshti.netlify.app/og-image.jpg",
  ogType = "website",
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tags
    const setMetaTag = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Update Meta Description & Social Tags
    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (title) {
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
    }

    if (ogType) {
      setMetaTag("property", "og:type", ogType);
    }

    // 3. Update Canonical URL
    if (canonicalUrl) {
      let canonicalEl = document.querySelector("link[rel='canonical']");
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", canonicalUrl);
      setMetaTag("property", "og:url", canonicalUrl);
    }

    // 4. Update JSON-LD if provided
    let scriptEl = null;
    if (jsonLd) {
      scriptEl = document.getElementById("dynamic-jsonld");
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "dynamic-jsonld";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, jsonLd]);

  return null;
};

export default SEOHead;
