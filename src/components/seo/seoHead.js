import React from "react";
import { Helmet, } from "react-helmet";

const SeoHead = ({titleMeta, descMeta, }) => {
  return (
    <Helmet>
      <title>{`Cinema - ${titleMeta}`}</title>
      <meta name="description" content={descMeta} />
    </Helmet>
  );
};

export default SeoHead;
