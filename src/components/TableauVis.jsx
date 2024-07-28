import React, { useEffect, useRef } from "react";

const TableauViz = () => {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.onload = () => {
      const divElement = ref.current;
      const vizElement = divElement.getElementsByTagName("object")[0];

      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1155px";
        vizElement.style.height = "619px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "1155px";
        vizElement.style.height = "619px";
      } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "1377px";
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={ref} className="tableauPlaceholder" id="viz1701352635212" style={{ position: "relative" }}>
      <noscript>
        <a href="#">
          <img alt="Visualisasi Studiobook" src="https://public.tableau.com/static/images/Vi/VisualizationStudiobook/VisualisasiStudiobook/1_rss.png" style={{ border: "none" }} />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="VisualizationStudiobook&#47;VisualisasiStudiobook" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/Vi/VisualizationStudiobook/VisualisasiStudiobook/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default TableauViz;
