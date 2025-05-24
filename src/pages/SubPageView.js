import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubPageView = () => {
  const { pageId, subIndex } = useParams();
  const [subPage, setSubPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mental-backend-8ia0.onrender.com/api/pages");
      const page = res.data.find((p) => p._id === pageId);
      if (page && page.subPages[subIndex]) {
        setSubPage(page.subPages[subIndex]);
      }
    };
    fetchData();
  }, [pageId, subIndex]);

  if (!subPage) return <p>جاري تحميل المحتوى...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: 800, margin: "auto" }}>
      <h2 style={{ marginBottom: 20 }}>{subPage.title}</h2>

      {subPage.contentBlocks && subPage.contentBlocks.map((block, i) => {
        if (block.type === "text") {
          return (
            <p key={i} style={{ fontSize: "16px", lineHeight: "1.8", marginBottom: 20 }}>
              {block.data}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <img
              key={i}
              src={`https://mental-backend-8ia0.onrender.com/${block.data}`}
              alt=""
              style={{ width: "100%", marginBottom: 20, borderRadius: 8 }}
            />
          );
        }

        if (block.type === "video") {
          return (
            <video
              key={i}
              src={`https://mental-backend-8ia0.onrender.com/${block.data}`}
              controls
              style={{ width: "100%", marginBottom: 20, borderRadius: 8 }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default SubPageView;
