/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import CareerPage from "./pages/CareerPage";
import LandownerPage from "./pages/LandownerPage";
import BlogPage from "./pages/BlogPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NewsletterPage from "./pages/NewsletterPage";
import ImageGalleryPage from "./pages/ImageGalleryPage";
import VideoGalleryPage from "./pages/VideoGalleryPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:status" element={<ProjectsPage />} />
        <Route path="/projects/:status/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/landowner" element={<LandownerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/gallery/newsletter" element={<NewsletterPage />} />
        <Route path="/gallery/images" element={<ImageGalleryPage />} />
        <Route path="/gallery/videos" element={<VideoGalleryPage />} />
      </Routes>
    </Router>
  );
}


