import { ELEMENT_TYPES } from "./elementTypes";
import { ENTITY_NAME } from "./entities/entityNames";

export const INLINE_TYPES = [
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: "gns-icons-16 icon-icon-textunderline-24",
    element: ELEMENT_TYPES.INLINE_DEFAULT,
  },
  {
    label: "Bold",
    style: "BOLD",
    icon: "gns-icons-16 icon-icon-textbolder-24",
    element: ELEMENT_TYPES.INLINE_DEFAULT,
  },
  {
    label: "Italic",
    style: "ITALIC",
    icon: "gns-icons-16 icon-icon-textitalic-24",
    element: ELEMENT_TYPES.INLINE_DEFAULT,
  },
  {
    label: "Strike through",
    style: "STRIKETHROUGH",
    icon: "gns-icons-16 icon-icon-textstrikethrough-24",
    element: ELEMENT_TYPES.INLINE_DEFAULT,
  },
];
export const BLOCK_TYPES = [
  {
    label: "Header",
    style: "header-three",
    icon: "gns-icons-16 icon-icon-header-24",
    element: ELEMENT_TYPES.BLOCK_DEFAULT,
  },
  {
    label: "UL",
    style: "unordered-list-item",
    icon: "gns-icons-16 icon-icon-listdashes-24",
    element: ELEMENT_TYPES.BLOCK_DEFAULT,
  },
  {
    label: "OL",
    style: "ordered-list-item",
    icon: "gns-icons-16 icon-icon-listnumbers-24",
    element: ELEMENT_TYPES.BLOCK_DEFAULT,
  },
  {
    label: "Blockquote",
    style: "blockquote",
    icon: "gns-icons-16 icon-icon-quotes-24",
    element: ELEMENT_TYPES.BLOCK_DEFAULT,
  },
  {
    label: "Code block",
    style: "code-block",
    icon: "gns-icons-16 icon-icon-codesimple-24",
    element: ELEMENT_TYPES.BLOCK_DEFAULT,
  },
  // {
  //   lebel: "Align left",
  //   style: "editor-alignment-left",
  //   icon: "fa-solid fa-align-left",
  //   element: ELEMENT_TYPES.BLOCK_DEFAULT,
  // },
  // {
  //   lebel: "Align center",
  //   style: "editor-alignment-center",
  //   icon: "fa-solid fa-align-center",
  //   element: ELEMENT_TYPES.BLOCK_DEFAULT,
  // },
  // {
  //   lebel: "Align right",
  //   style: "editor-alignment-right",
  //   icon: "fa-solid fa-align-right",
  //   element: ELEMENT_TYPES.BLOCK_DEFAULT,
  // },
  // {
  //   lebel: "Align justify",
  //   style: "editor-alignment-justify",
  //   icon: "fa-solid fa-align-justify",
  //   element: ELEMENT_TYPES.BLOCK_DEFAULT,
  // },
];
export const ENTITY_TYPES = [
  // {
  //   label: "Link",
  //   style: ENTITY_NAME.LINK,
  //   icon: "fa-solid fa-link",
  //   element: ELEMENT_TYPES.ATOMIC_ENTITY,
  // },
  {
    label: "Image",
    style: ENTITY_NAME.IMAGE,
    icon: "gns-icons-16 icon-icon-imagesquare-24",
    element: ELEMENT_TYPES.ATOMIC_ENTITY,
  },
  // {
  //   label: "Mention",
  //   style: ENTITY_NAME.MENTION,
  //   icon: "fa-solid fa-at",
  //   element: ELEMENT_TYPES.ATOMIC_ENTITY,
  // },
  // {
  //   lable: "CL",
  //   style: ENTITY_NAME.CHECKLIST,
  //   icon: "fa-solid fa-list-check",
  //   element: ELEMENT_TYPES.ATOMIC_ENTITY,
  // },
  {
    label: "Divider",
    style: ENTITY_NAME.DIVIDER,
    icon: "gns-icons-16 icon-icon-minus-24",
    element: ELEMENT_TYPES.ATOMIC_ENTITY,
  },
];
const toolType = {
  INLINE_TYPES,
  BLOCK_TYPES,
  ENTITY_TYPES,
};

export default toolType;
