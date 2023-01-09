import { marked } from "marked";
import React from "react";
import styles from "../styles/docs.module.css";

export default function Docs({ doc }) {
  return (
    <div className={styles.doc__container}>
      {doc.map((item, i) => {
        return (
          <div key={i} className={styles.doc__inner__container}>
            <div
              dangerouslySetInnerHTML={{ __html: marked(item.content) }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
