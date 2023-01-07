import { marked } from "marked";
import React from "react";

export default function Docs({ doc }) {
  return (
    <div>
      {doc.map((item) => {
        return (
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: marked(item.content) }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
