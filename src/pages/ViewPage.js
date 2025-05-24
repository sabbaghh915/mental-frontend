import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewPage.css";


const ViewPage = () => {
  const { pageId, subIndex } = useParams();
  const [subPage, setSubPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/pages");
      const page = res.data.find((p) => p._id === pageId);
      if (page && page.subPages[subIndex]) {
        setSubPage(page.subPages[subIndex]);
      }
    };
    fetchData();
  }, [pageId, subIndex]);

  if (!subPage) return <p style={{ padding: 20 }}>جاري تحميل المحتوى...</p>;

  return (
  <div className="view-container">
    <h2 className="view-title">{subPage.title}</h2>

    <div className="block-section">
      {subPage.contentBlocks?.length > 0 ? (
        <>
          {subPage.contentBlocks.map((block, i) => {
            if (block.type === "text") {
              return (
                <div key={i} className="text-block">
                  <p>{block.data}</p>
                </div>
              );
            }

            return null; // we'll show images/videos below in a separate row
          })}

          <div className="media-row">
            {subPage.contentBlocks.map((block, i) => {
              if (block.type === "image") {
                return (
                  <div key={i} className="media-box">
                    <span className="media-label">📷 صورة</span>
                    <img src={`http://localhost:5000/${block.data}`} alt="" />
                  </div>
                );
              }

              if (block.type === "video") {
                return (
                  <div key={i} className="media-box">
                    <span className="media-label">🎥 فيديو توضيحي</span>
                    <video src={`http://localhost:5000/${block.data}`} controls />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </>
      ) : (
        <p className="view-text">{subPage.content || "لا يوجد محتوى بعد."}</p>
      )}
    </div>
  </div>
);


};

export default ViewPage;
