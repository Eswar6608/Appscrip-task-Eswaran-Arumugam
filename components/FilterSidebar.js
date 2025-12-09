// "use client";

// // components/FilterSidebar.jsx
// import { useState } from "react";
// import styles from "../styles/filter.module.css";

// /**
//  * Renders multiple collapsible filter groups with checkboxes.
//  * - filters prop: current filters state
//  * - onToggle(group, option): toggle handler
//  * - onClear(): reset filters
//  *
//  * For demo we provide placeholder option lists (these can be replaced with real values).
//  */

// const FILTER_DEFS = [
//   {
//     key: "idealFor",
//     title: "IDEAL FOR",
//     options: ["All", "Men", "Women", "Baby & Kids", "Jewelry", "Electronics"],
//   },
//   {
//     key: "occasion",
//     title: "OCCASION",
//     options: ["All", "Casual", "Formal", "Party"],
//   },
//   { key: "work", title: "WORK", options: ["All", "Office", "Field", "Remote"] },
//   {
//     key: "fabric",
//     title: "FABRIC",
//     options: ["All", "Cotton", "Synthetic", "Blends"],
//   },
//   {
//     key: "segment",
//     title: "SEGMENT",
//     options: ["All", "Premium", "Mid", "Budget"],
//   },
//   {
//     key: "suitableFor",
//     title: "SUITABLE FOR",
//     options: ["All", "Outdoor", "Indoor"],
//   },
//   {
//     key: "rawMaterials",
//     title: "RAW MATERIALS",
//     options: ["All", "Leather", "Plastic", "Metal"],
//   },
//   {
//     key: "pattern",
//     title: "PATTERN",
//     options: ["All", "Striped", "Plain", "Checked"],
//   },
// ];

// export default function FilterSidebar({ filters = {}, onToggle, onClear }) {
//   const [openGroups, setOpenGroups] = useState(() => {
//     // open "IDEAL FOR" by default
//     return { idealFor: true };
//   });

//   function toggleGroup(key) {
//     setOpenGroups((s) => ({ ...s, [key]: !s[key] }));
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <strong>Customizble</strong>
//         <button className={styles.clearBtn} onClick={onClear}>
//           Clear
//         </button>
//       </div>

//       <div className={styles.groups}>
//         {FILTER_DEFS.map((g) => (
//           <div key={g.key} className={styles.group}>
//             <button
//               className={styles.groupTitle}
//               onClick={() => toggleGroup(g.key)}
//               aria-expanded={!!openGroups[g.key]}
//             >
//               <span>{g.title}</span>
//               <span className={styles.chev}>
//                 {openGroups[g.key] ? "▾" : "▸"}
//               </span>
//             </button>

//             {openGroups[g.key] && (
//               <ul className={styles.optionList}>
//                 {g.options.map((opt) => {
//                   const checked = (filters[g.key] || []).includes(opt);
//                   return (
//                     <li key={opt} className={styles.optionItem}>
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={checked}
//                           onChange={() => onToggle(g.key, opt)}
//                         />{" "}
//                         <span className={styles.optLabel}>{opt}</span>
//                       </label>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import styles from "../styles/filter.module.css";

// const FILTER_DEFS = [
//   {
//     key: "customizable",
//     title: "CUSTOMIZABLE",
//     options: [],
//     type: "checkbox",
//   },
//   {
//     key: "idealFor",
//     title: "IDEAL FOR",
//     options: ["Men", "Women", "Baby & Kids"],
//     type: "checkbox",
//   },
//   {
//     key: "occasion",
//     title: "OCCASION",
//     options: ["All", "Casual", "Formal", "Party"],
//     type: "dropdown",
//   },
//   // ...add other groups as needed
// ];

// export default function FilterSidebar({ filters = {}, onToggle, onClear }) {
//   const [openGroups, setOpenGroups] = useState({ idealFor: true });

//   function toggleGroup(key) {
//     setOpenGroups((s) => ({ ...s, [key]: !s[key] }));
//   }

//   return (
//     <aside className={styles.sidebar}>
//       {FILTER_DEFS.map((g) => (
//         <div key={g.key} className={styles.group}>
//           <button
//             className={styles.groupTitle}
//             onClick={() => toggleGroup(g.key)}
//             aria-expanded={!!openGroups[g.key]}
//           >
//             <span>{g.title}</span>
//             <span className={openGroups[g.key] ? styles.chevOpen : styles.chev}>
//               ▼
//             </span>
//           </button>
//           <div
//             className={styles.groupContent}
//             style={{ display: openGroups[g.key] ? "block" : "none" }}
//           >
//             {g.key === "idealFor" && (
//               <>
//                 <div className={styles.selectAllRow}>
//                   <span className={styles.allLabel}>All</span>
//                   <button className={styles.unselectBtn}>Unselect all</button>
//                 </div>
//               </>
//             )}
//             <ul className={styles.optionList}>
//               {g.options.map((opt) => (
//                 <li key={opt} className={styles.optionItem}>
//                   <label>
//                     <input type="checkbox" />
//                     <span className={styles.optLabel}>{opt}</span>
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </aside>
//   );
// }

"use client";

import { useState } from "react";
import styles from "../styles/filter.module.css";

/**
 * Updated according to your request:
 * 1. “All” is NOT a checkbox anymore.
 *    It is a default label shown when dropdown is closed.
 * 2. Every filter group has its own “Clear” button inside the dropdown.
 */

const FILTER_DEFS = [
  {
    key: "idealFor",
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids", "Jewelry", "Electronics"],
  },
  {
    key: "occasion",
    title: "OCCASION",
    options: ["Casual", "Formal", "Party"],
  },
  { key: "work", title: "WORK", options: ["Office", "Field", "Remote"] },
  {
    key: "fabric",
    title: "FABRIC",
    options: ["Cotton", "Synthetic", "Blends"],
  },
  { key: "segment", title: "SEGMENT", options: ["Premium", "Mid", "Budget"] },
  { key: "suitableFor", title: "SUITABLE FOR", options: ["Outdoor", "Indoor"] },
  {
    key: "rawMaterials",
    title: "RAW MATERIALS",
    options: ["Leather", "Plastic", "Metal"],
  },
  {
    key: "pattern",
    title: "PATTERN",
    options: ["Striped", "Plain", "Checked"],
  },
];

export default function FilterSidebar({ filters = {}, onToggle, onClear }) {
  const [openGroups, setOpenGroups] = useState(() => {
    return { idealFor: true };
  });

  function toggleGroup(key) {
    setOpenGroups((s) => ({ ...s, [key]: !s[key] }));
  }

  function clearGroup(groupKey) {
    // triggered only for this specific filter group
    onClear(groupKey);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <strong>Customizable</strong>
      </div>

      <div className={styles.groups}>
        {FILTER_DEFS.map((g) => {
          const hasSelection = (filters[g.key] || []).length > 0;
          const labelText = hasSelection ? filters[g.key].join(", ") : "All"; // default label when closed

          return (
            <div key={g.key} className={styles.group}>
              {/* Heading button */}
              <button
                className={styles.groupTitle}
                onClick={() => toggleGroup(g.key)}
                aria-expanded={!!openGroups[g.key]}
              >
                <span>{g.title}</span>
                <span className={styles.chev}>
                  {openGroups[g.key] ? "▾" : "▸"}
                </span>
              </button>
              <span className={styles.selectedValue}>{labelText}</span>

              {/* Dropdown */}
              {openGroups[g.key] && (
                <div className={styles.dropdownBox}>
                  {/* Clear only this group */}
                  <button
                    className={styles.groupClearBtn}
                    onClick={() => clearGroup(g.key)}
                  >
                    Unselect all
                  </button>

                  <ul className={styles.optionList}>
                    {g.options.map((opt) => {
                      const checked = (filters[g.key] || []).includes(opt);
                      return (
                        <li key={opt} className={styles.optionItem}>
                          <label>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => onToggle(g.key, opt)}
                            />
                            <span className={styles.optLabel}>{opt}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
