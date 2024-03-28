import { Container, Col, Row, Navbar, NavbarBrand, NavbarText, NavbarToggler, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToggle, ButtonToolbar, CloseButton, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown, UncontrolledDropdown, Fade, Accordion, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion, Badge, Card, CardBody, CardColumns, CardDeck, CardGroup, CardFooter, CardHeader, CardImgOverlay, CardTitle, CardSubtitle, CardImg, CardLink, CardText, Carousel, UncontrolledCarousel, CarouselControl, CarouselCaption, CarouselItem, CarouselIndicators, Popover, PopperContent, PopperTargetHelper, PopoverHeader, PopoverBody, UncontrolledPopover, Modal, ModalBody, ModalFooter, ModalHeader, UncontrolledTooltip, Table as Table$2, InputGroup, Input, List, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, ListInlineItem, Form, FormFeedback, FormText, FormGroup, InputGroupText, Label, Media as Media$1, Offcanvas, OffcanvasBody, OffcanvasHeader, Spinner, Progress, Pagination as Pagination$1, PaginationItem, PaginationLink, TabContent, TabPane, Alert, UncontrolledAlert, Toast, ToastBody, ToastHeader, Collapse, UncontrolledCollapse, Placeholder, PlaceholderButton } from 'reactstrap';
export { Card, Input as TextInput } from 'reactstrap';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState, useEffect, useMemo, useCallback, useContext, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useTable, useSortBy, useExpanded, usePagination as usePagination$1, useResizeColumns, useFlexLayout } from 'react-table';
import ReactSelect from 'react-select';
import CreatableSelect from 'react-select/creatable';
import AsyncSelect from 'react-select/async';
import { useDropzone } from 'react-dropzone';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Modifier, EditorState, CompositeDecorator, convertToRaw, ContentState, convertFromRaw, RichUtils, SelectionState, AtomicBlockUtils, Editor } from 'draft-js';
import { Mousewheel, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import * as yup from 'yup';

Object.assign({}, Container.prototype.props);

/**
 *
 * @param {ContainerBaseProps} props
 * @returns
 */
const ContainerBase = props => {
  return /*#__PURE__*/jsx(Container, {
    ...props,
    children: props.children
  });
};
ContainerBase.propTypes = {
  ...(Container.propTypes && Container.propTypes)
};

Object.assign({}, Col.prototype.props);

/**
 *
 * @param {ColProps} props
 * @returns
 */
const ColBase = props => {
  return /*#__PURE__*/jsx(Col, {
    ...props,
    children: props.children
  });
};
ColBase.propTypes = {
  ...(Col.propTypes && Col.propTypes)
};

Object.assign({}, Row.prototype.props);

/**
 *
 * @param {RowProps} props
 * @returns
 */
const RowBase = props => {
  return /*#__PURE__*/jsx(Row, {
    ...props,
    children: props.children
  });
};
RowBase.propTypes = {
  ...(Row.propTypes && Row.propTypes)
};

Object.assign({}, Navbar.prototype.props);

/**
 *
 * @param {NavbarBaseProps} props
 * @returns
 */

const NavBarBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Navbar, {
    ...rest,
    children: children
  });
};
NavBarBase.propTypes = {
  ...(Navbar.propTypes && Navbar.propTypes)
};

Object.assign({}, NavbarBrand.prototype.props);

/**
 *
 * @param {NavbarBrandBaseProps} props
 * @returns
 */

const NavbarBrandBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(NavbarBrand, {
    ...rest,
    children: children
  });
};
NavbarBrandBase.propTypes = {
  ...(NavbarBrand.propTypes && NavbarBrand.propTypes)
};

Object.assign({}, NavbarText.prototype.props);

/**
 *
 * @param {NavbarTextBaseProps} props
 * @returns
 */

const NavbarTextBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(NavbarText, {
    ...rest,
    children: children
  });
};
NavbarTextBase.propTypes = {
  ...(NavbarText.propTypes && NavbarText.propTypes)
};

Object.assign({}, NavbarToggler.prototype.props);

/**
 *
 * @param {NavbarTogglerBaseProps} props
 * @returns
 */

const NavbarTogglerBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(NavbarToggler, {
    ...rest,
    children: children
  });
};
NavbarTogglerBase.propTypes = {
  ...(NavbarToggler.propTypes && NavbarToggler.propTypes)
};

const NavBase = _ref => {
  let {
    children,
    variant = "primary",
    ...rest
  } = _ref;
  Object.assign({
    variant: PropTypes.oneOf(["primary", "secondary", "outline"])
  }, Nav.prototype.props);

  /**
   *
   * @param {NavBaseProps} props
   * @returns
   */
  //variant="primary"
  //variant="secondary"
  //variant="outline"
  return /*#__PURE__*/jsx(Nav, {
    className: classnames("" + (rest.className || ""), {
      "nav-tabs-primary": variant === "primary",
      "nav-tabs-secondary": variant === "secondary",
      "nav-tabs-outline": variant === "outline"
    }),
    ...rest,
    children: children
  });
};
NavBase.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  ...(Nav.propTypes && Nav.propTypes)
};

Object.assign({}, NavItem.prototype.props);

/**
 *
 * @param {NavItemProps} props
 * @returns
 */

const NavItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(NavItem, {
    ...rest,
    children: children
  });
};
NavItemBase.propTypes = {
  ...(NavItem.propTypes && NavItem.propTypes)
};

Object.assign({}, NavLink.prototype.props);

/**
 *
 * @param {NavLinkProps} props
 * @returns
 */

const NavLinkBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx("span", {
    className: classnames("nav-link " + rest.className, {
      active: rest.active
    }),
    ...rest,
    children: children
  });
};
NavLinkBase.propTypes = {
  ...(NavLink.propTypes && NavLink.propTypes)
};

var _Breadcrumb$prototype;
Object.assign({}, (_Breadcrumb$prototype = Breadcrumb.prototype) == null ? void 0 : _Breadcrumb$prototype.props);

/**
 * @param {BreadcrumbBaseProps} props
 * @returns
 * */

const BreadcrumbBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Breadcrumb, {
    ...rest,
    children: children
  });
};
BreadcrumbBase.propTypes = {
  ...(Breadcrumb.propTypes && Breadcrumb.propTypes)
};

var _BreadcrumbItem$proto;
Object.assign({}, (_BreadcrumbItem$proto = BreadcrumbItem.prototype) == null ? void 0 : _BreadcrumbItem$proto.props);

/**
 * @param {BreadcrumbItemBaseProps} props
 * @returns
 * */

const BreadcrumbItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(BreadcrumbItem, {
    ...rest,
    children: children
  });
};
BreadcrumbItemBase.propTypes = {
  ...(BreadcrumbItem.propTypes && BreadcrumbItem.propTypes)
};

Object.assign({
  leftIcon: "",
  rightIcon: ""
}, Button.prototype.props);

/**
 *
 * @param {ButtonBaseProps} props
 * @returns
 */
const ButtonBase = props => {
  return /*#__PURE__*/jsxs(Button, {
    ...props,
    children: [props.leftIcon ? /*#__PURE__*/jsx("i", {
      className: classnames(props.leftIcon, "me-2")
    }) : null, props.children, props.rightIcon ? /*#__PURE__*/jsx("i", {
      className: classnames(props.rightIcon, "ms-2")
    }) : null]
  });
};
ButtonBase.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  ...(Button.propTypes && Button.propTypes)
};

var _ButtonDropdown$proto;
Object.assign({}, (_ButtonDropdown$proto = ButtonDropdown.prototype) == null ? void 0 : _ButtonDropdown$proto.props);

/**
 *
 * @param {ButtonDropdownBaseProps} props
 * @returns
 */

const ButtonDropdownBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ButtonDropdown, {
    ...rest,
    children: children
  });
};
ButtonDropdownBase.propTypes = {
  ...(ButtonDropdown.propTypes && ButtonDropdown.propTypes)
};

var _ButtonGroup$prototyp;
Object.assign({}, (_ButtonGroup$prototyp = ButtonGroup.prototype) == null ? void 0 : _ButtonGroup$prototyp.props);

/**
 *
 * @param {ButtonGroupBaseProps} props
 * @returns
 */

const ButtonGroupBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ButtonGroup, {
    ...rest,
    children: children
  });
};
ButtonGroupBase.propTypes = {
  ...(ButtonGroup.propTypes && ButtonGroup.propTypes)
};

var _ButtonToggle$prototy;
Object.assign({}, (_ButtonToggle$prototy = ButtonToggle.prototype) == null ? void 0 : _ButtonToggle$prototy.props);

/**
 *
 * @param {ButtonToggleBaseProps} props
 * @returns
 */

const ButtonToggleBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ButtonToggle, {
    ...rest,
    children: children
  });
};
ButtonToggleBase.propTypes = {
  ...(ButtonToggle.propTypes && ButtonToggle.propTypes)
};

var _ButtonToolbar$protot;
Object.assign({}, (_ButtonToolbar$protot = ButtonToolbar.prototype) == null ? void 0 : _ButtonToolbar$protot.props);

/**
 *
 * @param {ButtonToolbarBaseProps} props
 * @returns
 */
const ButtonToolbarBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ButtonToolbar, {
    ...rest,
    children: children
  });
};
ButtonToolbarBase.propTypes = {
  ...(ButtonToolbar.propTypes && ButtonToolbar.propTypes)
};

var _CloseButton$prototyp;
Object.assign({}, (_CloseButton$prototyp = CloseButton.prototype) == null ? void 0 : _CloseButton$prototyp.props);

/**
 *
 * @param {CloseButtonBaseProps} props
 * @returns
 */

const CloseButtonBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(CloseButton, {
    children: children
  });
};
CloseButtonBase.propTypes = {
  ...(CloseButton.propTypes && CloseButton.propTypes)
};

Object.assign({}, Dropdown.prototype.props);

/**
 *
 * @param {DropdownBaseProps} props
 * @returns
 */
const DropdownBase = _ref => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(Dropdown, {
    ...props,
    children: props.children
  });
};
DropdownBase.propTypes = {
  ...(Dropdown.propTypes && Dropdown.propTypes)
};

Object.assign({}, DropdownItem.prototype.props);

/**
 *
 * @param {DropdownItemBaseProps} props
 * @returns
 */
const DropdownItemBase = _ref => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(DropdownItem, {
    ...props,
    children: props.children
  });
};
DropdownItemBase.propTypes = {
  ...(DropdownItem.propTypes && DropdownItem.propTypes)
};

Object.assign({}, DropdownMenu.prototype.props);

/**
 *
 * @param {DropdownMenuBaseProps} props
 * @returns
 */
const DropdownMenuBase = _ref => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(DropdownMenu, {
    ...props,
    children: props.children
  });
};
DropdownMenuBase.propTypes = {
  ...(DropdownMenu.propTypes && DropdownMenu.propTypes)
};

Object.assign({}, DropdownToggle.prototype.props);

/**
 *
 * @param {DropdownToogleBaseProps} props
 * @returns
 */

const DropdownToogleBase = _ref => {
  let {
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(DropdownToggle, {
      ...props,
      children: [props.startIcon && /*#__PURE__*/jsx("i", {
        className: classnames(props.startIcon, "me-2")
      }), props.children]
    })
  });
};
DropdownToogleBase.propTypes = {
  ...(DropdownToggle.propTypes && DropdownToggle.propTypes)
};

var _UncontrolledButtonDr;
Object.assign({}, (_UncontrolledButtonDr = UncontrolledButtonDropdown.prototype) == null ? void 0 : _UncontrolledButtonDr.props);

/**
 *
 * @param {UncontrolledButtonDropdownBaseProps} props
 * @returns
 *
 */
const UncontrolledButtonDropdownBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledButtonDropdown, {
    ...rest,
    children: children
  });
};
UncontrolledButtonDropdownBase.propTypes = {
  ...(UncontrolledButtonDropdown.propTypes && UncontrolledButtonDropdown.propTypes)
};

Object.assign({}, UncontrolledDropdown.prototype.props);

/**
 *
 * @param {UncontrolledDropdownBaseProps} props
 * @returns
 *
 *    */

const UncontrolledDropdownBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledDropdown, {
    ...rest,
    children: children
  });
};
UncontrolledDropdownBase.propTypes = {
  ...(UncontrolledDropdown.propTypes && UncontrolledDropdown.propTypes)
};

var _Fade$prototype;
Object.assign({}, (_Fade$prototype = Fade.prototype) == null ? void 0 : _Fade$prototype.props);
const FadeBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Fade, {
    ...rest,
    children: children
  });
};
FadeBase.propTypes = {
  ...(FadeBase.propTypes && FadeBase.propTypes)
};

var _Accordion$prototype;
Object.assign({}, (_Accordion$prototype = Accordion.prototype) == null ? void 0 : _Accordion$prototype.props);

/**
 * @param {AccordionBaseProps} props
 * @returns
 * */

const AccordionBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Accordion, {
    ...rest,
    children: children
  });
};
AccordionBase.propTypes = {
  ...(Accordion.propTypes && Accordion.propTypes)
};

var _AccordionBody$protot;
Object.assign({}, (_AccordionBody$protot = AccordionBody.prototype) == null ? void 0 : _AccordionBody$protot.props);
/**
 * @param {AccordionBodyBaseProps} props
 * @returns
 * */

const AccordionBodyBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(AccordionBody, {
    ...rest,
    children: children
  });
};
AccordionBodyBase.propTypes = {
  ...(AccordionBody.propTypes && AccordionBody.propTypes)
};

var _AccordionHeader$prot;
Object.assign({}, (_AccordionHeader$prot = AccordionHeader.prototype) == null ? void 0 : _AccordionHeader$prot.props);

/**
 * @param {AccordionHeaderBaseProps} props
 * @returns
 * */

const AccordionHeaderBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(AccordionHeader, {
    ...rest,
    children: children
  });
};
AccordionHeaderBase.propTypes = {
  ...(AccordionHeader.propTypes && AccordionHeader.propTypes)
};

var _AccordionItem$protot;
Object.assign({}, (_AccordionItem$protot = AccordionItem.prototype) == null ? void 0 : _AccordionItem$protot.props);

/**
 * @param {AccordionItemBaseProps} props
 * @returns
 * */

const AccordionItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(AccordionItem, {
    ...rest,
    children: children
  });
};
AccordionItemBase.propTypes = {
  ...(AccordionItem.propTypes && AccordionItem.propTypes)
};

var _UncontrolledAccordio;
Object.assign({}, (_UncontrolledAccordio = UncontrolledAccordion.prototype) == null ? void 0 : _UncontrolledAccordio.props);

/**
 * @param {AccordionUncontrolledBaseProps} props
 * @returns
 * */

const UncontrolledAccordionBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledAccordion, {
    ...rest,
    children: children
  });
};
UncontrolledAccordionBase.propTypes = {
  ...(UncontrolledAccordion.propTypes && UncontrolledAccordion.propTypes)
};

Object.assign({
  color: "",
  outline: "",
  fade: "",
  icon: ""
}, Badge.prototype.props);

/**
 *
 * @param {BadgeBaseProps} props
 * @returns
 */

const BadgeBase = _ref => {
  let {
    children,
    color,
    outline,
    fade,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Badge, {
    color: color,
    className: classnames(rest.className, {
      "bg-secondary bg-pending": color === "pending",
      "badge-outline-primary": outline === "primary",
      "badge-outline-info": outline === "info",
      "badge-outline-secondary": outline === "secondary",
      "badge-outline-success": outline === "success",
      "badge-outline-danger": outline === "danger",
      "badge-outline-warning": outline === "warning",
      "badge-outline-light": outline === "light",
      "badge-outline-dark": outline === "dark",
      "badge-outline-pending": outline === "pending",
      "badge-fade-primary": fade === "primary",
      "badge-fade-info": fade === "info",
      "badge-fade-secondary": fade === "secondary",
      "badge-fade-success": fade === "success",
      "badge-fade-danger": fade === "danger",
      "badge-fade-warning": fade === "warning",
      "badge-fade-light": fade === "light",
      "badge-fade-dark": fade === "dark",
      "badge-fade-pending": fade === "pending"
    }),
    ...rest,
    children: children
  });
};
BadgeBase.propTypes = {
  color: PropTypes.string,
  ...(Badge.propTypes && Badge.propTypes)
};

Object.assign({}, Card.prototype.props);

Object.assign({}, CardBody.prototype.props);

/**
 *
 * @param {CardBodyBaseProps} props
 * @returns
 */
const CardBodyBase = props => {
  return /*#__PURE__*/jsx(CardBody, {
    ...props,
    children: props.children
  });
};
CardBodyBase.propTypes = {
  ...(CardBody.propTypes && CardBody.propTypes)
};

Object.assign({}, CardColumns.prototype.props);

/**
 *
 * @param {CardColumnsBaseProps} props
 * @returns
 */
const CardColumnsBase = props => {
  return /*#__PURE__*/jsx(CardColumns, {
    ...props,
    children: props.children
  });
};
CardColumnsBase.propTypes = {
  ...(CardColumns.propTypes && CardColumns.propTypes)
};

Object.assign({}, CardDeck.prototype.props);

/**
 *
 * @param {CardDeckBaseProps} props
 * @returns
 */
const CardDeckBase = props => {
  return /*#__PURE__*/jsx(CardDeck, {
    ...props,
    children: props.children
  });
};
CardDeckBase.propTypes = {
  ...(CardDeck.propTypes && CardDeck.propTypes)
};

Object.assign({}, CardGroup.prototype.props);

/**
 *
 * @param {CardGroupBaseProps} props
 * @returns
 */
const CardGroupBase = props => {
  return /*#__PURE__*/jsx(CardGroup, {
    ...props,
    children: props.children
  });
};
CardGroupBase.propTypes = {
  ...(CardGroup.propTypes && CardGroup.propTypes)
};

Object.assign({}, CardFooter.prototype.props);

/**
 *
 * @param {CardFooterBaseProps} props
 * @returns
 */
const CardFooterBase = props => {
  return /*#__PURE__*/jsx(CardFooter, {
    ...props,
    children: props.children
  });
};
CardFooterBase.propTypes = {
  ...(CardFooter.propTypes && CardFooter.propTypes)
};

Object.assign({}, CardHeader.prototype.props);

/**
 *
 * @param {CardHeaderBaseProps} props
 * @returns
 */
const CardHeaderBase = props => {
  return /*#__PURE__*/jsx(CardHeader, {
    ...props,
    children: props.children
  });
};
CardHeaderBase.propTypes = {
  ...(CardHeader.propTypes && CardHeader.propTypes)
};

Object.assign({}, CardImgOverlay.prototype.props);

/**
 *
 * @param {CardImgOverlayBaseProps} props
 * @returns
 */
const CardImgOverlayBase = props => {
  return /*#__PURE__*/jsx(CardImgOverlay, {
    ...props,
    children: props.children
  });
};
CardImgOverlayBase.propTypes = {
  ...(CardImgOverlay.propTypes && CardImgOverlay.propTypes)
};

Object.assign({}, CardTitle.prototype.props);

/**
 *
 * @param {CardTitleBaseProps} props
 * @returns
 */
const CardTitleBase = props => {
  return /*#__PURE__*/jsx(CardTitle, {
    ...props,
    children: props.children
  });
};
CardTitleBase.propTypes = {
  ...(CardTitle.propTypes && CardTitle.propTypes)
};

Object.assign({}, CardSubtitle.prototype.props);

/**
 *
 * @param {CardSubtitleBaseProps} props
 * @returns
 */
const CardSubtitleBase = props => {
  return /*#__PURE__*/jsx(CardSubtitle, {
    ...props,
    children: props.children
  });
};
CardSubtitleBase.propTypes = {
  ...(CardSubtitle.propTypes && CardSubtitle.propTypes)
};

Object.assign({}, CardImg.prototype.props);

/**
 *
 * @param {CardImgBaseProps} props
 * @returns
 */
const CardImgBase = props => {
  return /*#__PURE__*/jsx(CardImg, {
    ...props,
    children: props.children
  });
};
CardImgBase.propTypes = {
  ...(CardImg.propTypes && CardImg.propTypes)
};

Object.assign({}, CardLink.prototype.props);

/**
 *
 * @param {CardLinkBaseProps} props
 * @returns
 */
const CardLinkBase = props => {
  return /*#__PURE__*/jsx(CardLink, {
    ...props,
    children: props.children
  });
};
CardLinkBase.propTypes = {
  ...(CardLink.propTypes && CardLink.propTypes)
};

Object.assign({}, CardText.prototype.props);

/**
 *
 * @param {CardTextBaseProps} props
 * @returns
 */
const CardTextBase = props => {
  return /*#__PURE__*/jsx(CardText, {
    ...props,
    children: props.children
  });
};
CardTextBase.propTypes = {
  ...(CardText.propTypes && CardText.propTypes)
};

Object.assign({}, Carousel.prototype.props);

/**
 *
 * @param {CarouselBaseProps} props
 * @returns {JSX.Element}
 */
const CarouselBase = props => {
  return /*#__PURE__*/jsx(Carousel, {
    ...props,
    children: props.children
  });
};
CarouselBase.propTypes = {
  ...(Carousel.propTypes && Carousel.propTypes)
};

Object.assign({}, UncontrolledCarousel.prototype.props);

/**
 *
 * @param {UncontrolledCarouselBaseProps} props
 * @returns
 */
const UncontrolledCarouselBase = props => {
  return /*#__PURE__*/jsx(UncontrolledCarousel, {
    ...props,
    children: props.children
  });
};
UncontrolledCarouselBase.propTypes = {
  ...(UncontrolledCarousel.propTypes && UncontrolledCarousel.propTypes)
};

Object.assign({}, CarouselControl.prototype.props);

/**
 *
 * @param {CarouselControlBaseProps} props
 * @returns
 */
const CarouselControlBase = props => {
  return /*#__PURE__*/jsx(CarouselControl, {
    ...props,
    children: props.children
  });
};
CarouselControlBase.propTypes = {
  ...(CarouselControl.propTypes && CarouselControl.propTypes)
};

Object.assign({}, CarouselCaption.prototype.props);

/**
 *
 * @param {CarouselCaptionBaseProps} props
 * @returns
 */
const CarouselCaptionBase = props => {
  return /*#__PURE__*/jsx(CarouselCaption, {
    ...props,
    children: props.children
  });
};
CarouselCaptionBase.propTypes = {
  ...(CarouselCaption.propTypes && CarouselCaption.propTypes)
};

Object.assign({}, CarouselItem.prototype.props);

/**
 *
 * @param {CarouselItemBaseProps} props
 * @returns
 */
const CarouselItemBase = props => {
  return /*#__PURE__*/jsx(CarouselItem, {
    ...props,
    children: props.children
  });
};
CarouselItemBase.propTypes = {
  ...(CarouselItem.propTypes && CarouselItem.propTypes)
};

Object.assign({}, CarouselIndicators.prototype.props);

/**
 *
 * @param {CarouselIndicatorsBaseProps} props
 * @returns
 */
const CarouselIndicatorsBase = props => {
  return /*#__PURE__*/jsx(CarouselIndicators, {
    ...props,
    children: props.children
  });
};
CarouselIndicatorsBase.propTypes = {
  ...(CarouselIndicators.propTypes && CarouselIndicators.propTypes)
};

Object.assign({}, Popover.prototype.props);

/**
 *
 * @param {PopoverBaseProps} props
 * @returns
 */
const PopoverBase = props => {
  return /*#__PURE__*/jsx(Popover, {
    ...props,
    children: props.children
  });
};
PopoverBase.propTypes = {
  ...(Popover.propTypes && Popover.propTypes)
};

Object.assign({}, PopperContent.prototype.props);

/**
 *
 * @param {PopperContentBaseProps} props
 * @returns
 */
const PopperContentBase = props => {
  return /*#__PURE__*/jsx(PopperContent, {
    ...props,
    children: props.children
  });
};
PopperContentBase.propTypes = {
  ...(PopperContent.propTypes && PopperContent.propTypes)
};

Object.assign({}, PopperTargetHelper.prototype.props);

/**
 *
 * @param {PopperTargetHelperBaseProps} props
 * @returns
 */
const PopperTargetHelperBase = props => {
  return /*#__PURE__*/jsx(PopperTargetHelper, {
    ...props,
    children: props.children
  });
};
PopperTargetHelperBase.propTypes = {
  ...(PopperTargetHelper.propTypes && PopperTargetHelper.propTypes)
};

Object.assign({}, PopoverHeader.prototype.props);
/**
 *
 * @param {PopoverHeaderBaseProps} props
 * @returns
 */
const PopoverHeaderBase = props => {
  return /*#__PURE__*/jsx(PopoverHeader, {
    ...props,
    children: props.children
  });
};
PopoverHeaderBase.propTypes = {
  ...(PopoverHeader.propTypes && PopoverHeader.propTypes)
};

Object.assign({}, PopoverBody.prototype.props);

/**
 *
 * @param {PopoverBodyBaseProps} props
 * @returns
 */
const PopoverBodyBase = props => {
  return /*#__PURE__*/jsx(PopoverBody, {
    ...props,
    children: props.children
  });
};
PopoverBodyBase.propTypes = {
  ...(PopoverBody.propTypes && PopoverBody.propTypes)
};

Object.assign({}, UncontrolledPopover.prototype.props);

/**
 *
 * @param {UncontrolledPopoverBaseProps} props
 * @returns
 */
const UncontrolledPopoverBase = props => {
  return /*#__PURE__*/jsx(UncontrolledPopover, {
    ...props,
    children: props.children
  });
};
UncontrolledPopoverBase.propTypes = {
  ...(UncontrolledPopover.propTypes && UncontrolledPopover.propTypes)
};

Object.assign({}, Modal.prototype.props);

/**
 *
 * @param {ModalBaseProps} props
 * @returns
 */

const ModalBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Modal, {
    ...rest,
    children: children
  });
};
ModalBase.propTypes = {
  ...(Modal.propTypes && Modal.propTypes)
};

Object.assign({}, ModalBody.prototype.props);

/**
 *
 * @param {ModalBodyBaseProps} props
 * @returns
 */

const ModalBodyBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ModalBody, {
    ...rest,
    children: children
  });
};
ModalBodyBase.propTypes = {
  ...(ModalBody.propTypes && ModalBody.propTypes)
};

Object.assign({}, ModalFooter.prototype.props);

/**
 *
 * @param {ModalFooterBaseProps} props
 * @returns
 */

const ModalFooterBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ModalFooter, {
    ...rest,
    children: children
  });
};
ModalFooterBase.propTypes = {
  ...(ModalFooter.propTypes && ModalFooter.propTypes)
};

Object.assign({}, ModalHeader.prototype.props);

/**
 *
 * @param {ModalHeaderBaseProps} props
 * @returns
 */

const ModalHeaderBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ModalHeader, {
    ...rest,
    children: children
  });
};
ModalHeaderBase.propTypes = {
  ...(ModalHeader.propTypes && ModalHeader.propTypes)
};

Object.assign({}, UncontrolledTooltip.prototype.props);

/**
 * @param {UncontrolledTooltipBaseProps} props
 * @returns
 * */

const UncontrolledTooltipBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledTooltip, {
    ...rest,
    children: children
  });
};
UncontrolledTooltipBase.propTypes = {
  ...(UncontrolledTooltip.propTypes && UncontrolledTooltip.propTypes)
};

Object.assign({}, Table$2.prototype.props);

/**
 *
 * @param {TableBaseProps} props
 * @returns
 */
const TableBase = props => {
  return /*#__PURE__*/jsx(Table$2, {
    ...props,
    children: props.children
  });
};
TableBase.propTypes = {
  ...(Table$2.propTypes && Table$2.propTypes)
};

const ImsSimpleTable = _ref => {
  let {
    onRowClick = () => {},
    active,
    linear,
    ...props
  } = _ref;
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleActiveRow = e => {
    const index = e.currentTarget.rowIndex - 1;
    setSelectedRow(index);
  };
  return /*#__PURE__*/jsxs(Table$2, {
    hover: true,
    ...props,
    className: classnames(props.className, {
      "table-linear": linear
    }),
    children: [/*#__PURE__*/jsx("thead", {
      children: /*#__PURE__*/jsx("tr", {
        children: props.thead.map((prop, key) => {
          return /*#__PURE__*/jsx("th", {
            className: classnames("", {
              "text-right": props.thead.length - 1 === key
            }),
            children: prop.text
          }, key);
        })
      })
    }), /*#__PURE__*/jsx("tbody", {
      children: props.tbody.map((_ref2, key) => {
        let {
          onRowClick = function () {},
          ...prop
        } = _ref2;
        return /*#__PURE__*/jsxs("tr", {
          onClick: e => {
            handleActiveRow(e);
            onRowClick(e);
          },
          className: classnames({
            /** allow row active feature only if sepcified in the prop */
            "table-active": active && selectedRow === key
          }),
          children: [prop.data.map((data, k) => {
            return /*#__PURE__*/jsx("td", {
              className: classnames({
                [data.className]: data.className !== undefined
              }),
              children: data.item
            }, k);
          }), prop.actions && /*#__PURE__*/jsx("td", {
            className: "text-right",
            children: prop.actions
          })]
        }, key);
      })
    })]
  });
};
ImsSimpleTable.propTypes = {
  thead: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    text: PropTypes.string.isRequired
  })).isRequired,
  tbody: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      className: PropTypes.string,
      item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired
    })).isRequired,
    actions: PropTypes.node
  })).isRequired,
  active: PropTypes.bool
};

function useDebounce$1(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const FilterAndSearch$1 = _ref => {
  let {
    onFilter = () => {},
    onSearch = () => {},
    filters = []
  } = _ref;
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce$1(searchString, 500);
  React.useEffect(() => {
    onSearch({
      value: {
        clientSearch: debouncedSearchString
      }
    });
  }, [debouncedSearchString]);
  return /*#__PURE__*/jsxs(Row, {
    children: [/*#__PURE__*/jsx(Col, {
      md: "3",
      children: /*#__PURE__*/jsx(ReactSelect, {
        className: "react-select default m-0 w-100",
        classNamePrefix: "react-select",
        name: "singleSelect",
        onChange: value => {
          onFilter(value);
        },
        defaultValue: filters.find(item => item.default),
        options: filters,
        placeholder: "Select filter"
      })
    }), /*#__PURE__*/jsx(Col, {
      md: "6",
      children: /*#__PURE__*/jsx(InputGroup, {
        children: /*#__PURE__*/jsx(Input, {
          onChange: e => setSearchString(e.currentTarget.value.toString()),
          placeholder: "Search item"
        })
      })
    })]
  });
};

const DOTS = '...';
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({
    length
  }, (_, idx) => idx + start);
};
const usePagination = _ref => {
  let {
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage
  } = _ref;
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

const Pagination = props => {
  const {
    onPageChange = () => {},
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 10
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx("nav", {
      "aria-label": "Page navigation",
      children: /*#__PURE__*/jsxs("ul", {
        className: "pagination",
        children: [/*#__PURE__*/jsx("li", {
          className: "page-item",
          children: /*#__PURE__*/jsxs("button", {
            onClick: onPrevious,
            className: "page-link",
            "aria-label": "Next",
            children: [/*#__PURE__*/jsx("span", {
              "aria-hidden": "true",
              children: "\xAB"
            }), /*#__PURE__*/jsx("span", {
              className: "sr-only",
              children: "Previous"
            })]
          })
        }, "first-button"), paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) return /*#__PURE__*/jsx("li", {
            className: "pagination-item dots",
            children: "\u2026"
          }, DOTS + i);
          return /*#__PURE__*/jsx("li", {
            className: "page-item " + (currentPage === pageNumber && " active"),
            children: /*#__PURE__*/jsx("button", {
              className: "page-link",
              onClick: () => onPageChange(pageNumber),
              children: pageNumber
            })
          }, pageNumber);
        }), /*#__PURE__*/jsx("li", {
          className: "page-item",
          children: /*#__PURE__*/jsxs("button", {
            disabled: currentPage === lastPage,
            className: "page-link",
            onClick: onNext,
            "aria-label": "Next",
            children: [/*#__PURE__*/jsx("span", {
              "aria-hidden": "true",
              children: "\xBB"
            }), /*#__PURE__*/jsx("span", {
              className: "sr-only",
              children: "Next"
            })]
          })
        }, "next-button")]
      })
    })
  });
};

/*eslint-disable*/
function Table$1(_ref) {
  let {
    columns,
    data,
    renderRowSubComponent,
    rowProps = () => ({}),
    className = "-highlight -striped ",
    handleSearch = () => {},
    handleFilter = () => {},
    handlePagination = () => {},
    filters = [],
    pagination = {
      currentPage: 1,
      hasNextPage: true,
      hasPrevPage: false,
      nextPage: 2,
      prevPage: null,
      size: 10,
      totalPages: 2,
      totalResults: 17
    }
  } = _ref;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: {
      expanded
    },
    visibleColumns
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0
    }
  }, useSortBy, useExpanded, usePagination$1, useResizeColumns, useFlexLayout);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs("div", {
      className: "ReactTable " + className,
      children: [/*#__PURE__*/jsx("div", {
        className: "pagination-top",
        children: /*#__PURE__*/jsx(FilterAndSearch$1, {
          filters: filters,
          onFilter: filter => handleFilter(filter),
          onSearch: search => handleSearch(search)
        })
      }), /*#__PURE__*/jsxs("table", {
        ...getTableProps(),
        className: "rt-table",
        children: [/*#__PURE__*/jsx("thead", {
          className: "rt-thead -header",
          children: headerGroups.map(headerGroup => /*#__PURE__*/jsx("tr", {
            ...headerGroup.getHeaderGroupProps(),
            className: "rt-tr",
            children: headerGroup.headers.map((column, key) => /*#__PURE__*/jsxs("th", {
              ...column.getHeaderProps(column.getSortByToggleProps()),
              className: classnames("rt-th rt-resizable-header", {
                "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                "-sort-asc": column.isSorted && !column.isSortedDesc,
                "-sort-desc": column.isSorted && column.isSortedDesc
              }),
              children: [/*#__PURE__*/jsxs("div", {
                className: "rt-resizable-header-content",
                children: [column.render("Header"), /*#__PURE__*/jsx("div", {
                  ...column.getResizerProps(),
                  className: classnames("col-resizer", {
                    " active": column.isResizing
                  })
                })]
              }), /*#__PURE__*/jsx("div", {
                children: headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render("Filter") : null
              })]
            }))
          }))
        }), /*#__PURE__*/jsx("tbody", {
          ...getTableBodyProps(),
          className: "rt-tbody",
          children: page.map((row, i) => {
            var _row$getRowProps;
            prepareRow(row);
            const rowStyel = classnames("rt-tr", {
              " -odd": i % 2 === 0
            }, {
              " -even": i % 2 === 1
            });
            return /*#__PURE__*/jsxs(React.Fragment, {
              children: [/*#__PURE__*/jsx("tr", {
                /**
                 * in the follwing we are muting row object and putting classNames
                 * this is a custom property added to get control from outside
                 */
                className: rowStyel,
                ...row.getRowProps(rowProps({
                  ...row,
                  className: rowStyel
                })),
                children: row.cells.map(cell => {
                  return /*#__PURE__*/jsx("td", {
                    ...cell.getCellProps(),
                    className: "rt-td",
                    children: cell.render("Cell")
                  });
                })
              }), row.isExpanded ? /*#__PURE__*/jsx("tr", {
                children: /*#__PURE__*/jsx("td", {
                  colSpan: visibleColumns.length,
                  children: renderRowSubComponent && renderRowSubComponent({
                    row
                  })
                })
              }) : null]
            }, (_row$getRowProps = row.getRowProps()) == null ? void 0 : _row$getRowProps.key);
          })
        })]
      }), /*#__PURE__*/jsx("div", {
        className: "pagination-bottom",
        children: /*#__PURE__*/jsx("div", {
          className: "-pagination",
          children: /*#__PURE__*/jsx("div", {
            className: "-center flex-nowrap",
            children: /*#__PURE__*/jsx(Pagination, {
              className: "pagination-bar",
              pagination: pagination,
              currentPage: pagination.currentPage,
              totalCount: pagination.totalResults,
              pageSize: pagination.size,
              onPageChange: page => {
                handlePagination({
                  page
                });
              }
            })
          })
        })
      })]
    })
  });
}

Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */
const InputBase = props => {
  return /*#__PURE__*/jsx(Input, {
    ...props,
    children: props.children
  });
};
InputBase.propTypes = {
  ...(Input.propTypes && Input.propTypes)
};

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const FilterAndSearch = _ref => {
  let {
    onFilter = () => {},
    onSearch = () => {},
    onSort = () => {},
    isSearchable,
    isFilterable,
    hasBulkActions,
    isSortable,
    sorts = [],
    tableToolbar,
    filterToolbar,
    title = ""
  } = _ref;
  React.useState("");
  let [sortLabel, setSortLabel] = React.useState("");
  let [searchString, setSearchString] = React.useState("");
  const debouncedSearchString = useDebounce(searchString, 500);
  const [sortDropdownOpen, setSortDropdownOpen] = React.useState(false);
  const sortToggle = () => setSortDropdownOpen(!sortDropdownOpen);
  React.useEffect(() => {
    onSearch({
      value: {
        clientSearch: debouncedSearchString
      }
    });
  }, [debouncedSearchString]);
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs(RowBase, {
      className: "filter-search d-lg-flex justify-around align-items-center px-lg-4 my-4",
      children: [/*#__PURE__*/jsx(ColBase, {
        md: "4",
        sm: "12",
        className: " mb-3",
        children: title && /*#__PURE__*/jsx("h4", {
          children: title
        })
      }), /*#__PURE__*/jsx(ColBase, {
        md: "8",
        sm: "12",
        className: "mb-3",
        children: /*#__PURE__*/jsxs("div", {
          className: "d-flex justify-content-lg-end justify-content-md-end action-container",
          children: [tableToolbar && /*#__PURE__*/jsx("div", {
            className: "me-md-3 mr-md-3 create-filer",
            children: tableToolbar
          }), hasBulkActions && /*#__PURE__*/jsx(Fragment, {
            children: /*#__PURE__*/jsxs(UncontrolledDropdown, {
              children: [/*#__PURE__*/jsx(DropdownToogleBase, {
                className: " p-0 table-actions border-primary text-primary",
                children: /*#__PURE__*/jsx("i", {
                  class: "fa-solid fa-ellipsis-vertical"
                })
              }), /*#__PURE__*/jsxs(DropdownMenuBase, {
                children: [/*#__PURE__*/jsx(DropdownItemBase, {
                  children: "hello"
                }), /*#__PURE__*/jsx(DropdownItemBase, {
                  children: "world"
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx(ColBase, {
        md: "12",
        sm: "12",
        children: /*#__PURE__*/jsxs("div", {
          className: "d-flex justify-content-lg-start justify-content-md-start action-container",
          children: [/*#__PURE__*/jsx("div", {
            className: "d-flex create-filter-wrapper",
            children: isFilterable && filterToolbar && /*#__PURE__*/jsx("div", {
              className: "me-md-3 mr-md-3 create-filer",
              children: filterToolbar
            })
          }), isSearchable && /*#__PURE__*/jsxs("div", {
            className: "me-md-3 mr-md-3  table-search-container shadow-sm--hover",
            children: [/*#__PURE__*/jsx("i", {
              className: "fa-solid fa-search my-auto ms-3 ml-3 p-0"
            }), /*#__PURE__*/jsx(InputBase, {
              size: "sm",
              onChange: e => setSearchString(e.currentTarget.value.toString()),
              placeholder: "Search",
              className: "border-0 table-search-input",
              type: "text"
            })]
          }), /*#__PURE__*/jsx("div", {
            className: "d-flex create-filter-wrapper",
            children: isSortable && /*#__PURE__*/jsx("div", {
              className: "me-md-3 mr-md-3 create-filer",
              children: /*#__PURE__*/jsxs(DropdownBase, {
                isOpen: sortDropdownOpen,
                toggle: sortToggle,
                children: [/*#__PURE__*/jsxs(DropdownToogleBase, {
                  className: "filter",
                  color: "secondary",
                  outline: true,
                  size: "md",
                  children: [/*#__PURE__*/jsx("i", {
                    class: "fa-solid fa-sort me-2 mr-2 p-0 shadow-sm--hover"
                  }), sortLabel ? sortLabel : "Sort"]
                }), /*#__PURE__*/jsx(DropdownMenuBase, {
                  className: "mt-3",
                  children: sorts && sorts.length > 0 && sorts.map(sort => /*#__PURE__*/jsx(DropdownItemBase, {
                    style: {
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#152536"
                    },
                    onClick: () => {
                      setSortLabel(sort.label);
                      onSort(sort);
                    },
                    className: "d-flex align-items-center fw-bold my-2",
                    children: sort.label
                  }))
                })]
              })
            })
          })]
        })
      })]
    })
  });
};

/*eslint-disable*/
function Table(_ref) {
  let {
    columns,
    data,
    renderRowSubComponent,
    rowProps = () => ({}),
    className = "-highlight -striped ",
    handleCreate = () => {},
    handleSearch = () => {},
    handleFilter = () => {},
    handlePagination = () => {},
    filters = [],
    pagination = {
      currentPage: 1,
      hasNextPage: true,
      hasPrevPage: false,
      nextPage: 2,
      prevPage: null,
      size: 10,
      totalPages: 2,
      totalResults: 17
    },
    ...props
  } = _ref;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: {
      expanded
    },
    visibleColumns
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0
    }
  }, useSortBy, useExpanded, usePagination$1, useResizeColumns, useFlexLayout);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx("div", {
      className: "visual-table",
      children: /*#__PURE__*/jsxs("div", {
        className: "ReactTable " + className,
        children: [/*#__PURE__*/jsx("div", {
          className: "pagination-top",
          children: /*#__PURE__*/jsx(FilterAndSearch, {
            filters: filters,
            onFilter: filter => handleFilter(filter),
            onSearch: search => handleSearch(search),
            onClick: () => handleCreate(),
            ...props
          })
        }), /*#__PURE__*/jsxs("table", {
          ...getTableProps(),
          className: "rt-table ",
          children: [/*#__PURE__*/jsx("thead", {
            className: "rt-thead -header",
            children: headerGroups.map(headerGroup => /*#__PURE__*/jsx("tr", {
              ...headerGroup.getHeaderGroupProps(),
              className: "rt-tr",
              children: headerGroup.headers.map((column, key) => /*#__PURE__*/jsxs("th", {
                ...column.getHeaderProps(column.getSortByToggleProps()),
                className: classnames("rt-th rt-resizable-header", {
                  "-cursor-pointer": column.canSort,
                  "-sort-asc": column.isSorted && !column.isSortedDesc,
                  "-sort-desc": column.isSorted && column.isSortedDesc
                }),
                children: [/*#__PURE__*/jsxs("div", {
                  className: "rt-resizable-header-content",
                  children: [column.render("Header"), /*#__PURE__*/jsx("div", {
                    ...column.getResizerProps(),
                    className: classnames("col-resizer", {
                      " active": column.isResizing
                    })
                  })]
                }), /*#__PURE__*/jsx("div", {
                  children: headerGroup.headers.length - 1 === key ? null : column.canFilter ? column.render("Filter") : null
                })]
              }))
            }))
          }), /*#__PURE__*/jsx("tbody", {
            ...getTableBodyProps(),
            className: "rt-tbody",
            children: page.map((row, i) => {
              var _row$getRowProps;
              prepareRow(row);
              const rowStyel = classnames("rt-tr", {
                " -odd": i % 2 === 0
              }, {
                " -even": i % 2 === 1
              });
              return /*#__PURE__*/jsxs(React.Fragment, {
                children: [/*#__PURE__*/jsx("tr", {
                  /**
                   * in the follwing we are muting row object and putting classNames
                   * this is a custom property added to get control from outside
                   */
                  className: rowStyel,
                  ...row.getRowProps(rowProps({
                    ...row,
                    className: rowStyel
                  })),
                  children: row.cells.map(cell => {
                    return /*#__PURE__*/jsx("td", {
                      ...cell.getCellProps(),
                      className: "rt-td",
                      children: cell.render("Cell")
                    });
                  })
                }), row.isExpanded ? /*#__PURE__*/jsx("tr", {
                  children: /*#__PURE__*/jsx("td", {
                    colSpan: visibleColumns.length,
                    children: renderRowSubComponent && renderRowSubComponent({
                      row
                    })
                  })
                }) : null]
              }, (_row$getRowProps = row.getRowProps()) == null ? void 0 : _row$getRowProps.key);
            })
          })]
        }), /*#__PURE__*/jsx("div", {
          className: "pagination-bottom",
          children: /*#__PURE__*/jsx("div", {
            className: "-pagination",
            children: /*#__PURE__*/jsx("div", {
              className: "-center flex-nowrap",
              children: /*#__PURE__*/jsx(Pagination, {
                className: "pagination-bar",
                pagination: pagination,
                currentPage: pagination.currentPage,
                totalCount: pagination.totalResults,
                pageSize: pagination.size,
                onPageChange: page => {
                  handlePagination({
                    page
                  });
                }
              })
            })
          })
        })]
      })
    })
  });
}

var _List$prototype;
Object.assign({}, (_List$prototype = List.prototype) == null ? void 0 : _List$prototype.props);

/**
 *
 * @param {ListBaseProps} props
 * @returns
 */

const ListBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(List, {
    ...rest,
    children: children
  });
};
ListBase.propTypes = {
  ...(List.propTypes && List.propTypes)
};

var _ListGroup$prototype;
Object.assign({}, (_ListGroup$prototype = ListGroup.prototype) == null ? void 0 : _ListGroup$prototype.props);

/**
 *
 * @param {ListGroupBaseProps} props
 * @returns
 */

const ListGroupBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ListGroup, {
    ...rest,
    children: children
  });
};
ListGroupBase.propTypes = {
  ...(ListGroup.propTypes && ListGroup.propTypes)
};

var _ListGroupItem$protot;
Object.assign({}, (_ListGroupItem$protot = ListGroupItem.prototype) == null ? void 0 : _ListGroupItem$protot.props);

/**
 *
 * @param {ListGroupItemBaseProps} props
 * @returns
 */

const ListGroupItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ListGroupItem, {
    ...rest,
    children: children
  });
};
ListGroupItemBase.propTypes = {
  ...(ListGroupItem.propTypes && ListGroupItem.propTypes)
};

var _ListGroupItemHeading;
Object.assign({}, (_ListGroupItemHeading = ListGroupItemHeading.prototype) == null ? void 0 : _ListGroupItemHeading.props);

/**
 *
 * @param {ListGroupItemHeadingBaseProps} props
 * @returns
 */

const ListGroupItemHeadingBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ListGroupItemHeading, {
    ...rest,
    children: children
  });
};
ListGroupItemHeadingBase.propTypes = {
  ...(ListGroupItemHeading.propTypes && ListGroupItemHeading.propTypes)
};

var _ListGroupItemText$pr;
Object.assign({}, (_ListGroupItemText$pr = ListGroupItemText.prototype) == null ? void 0 : _ListGroupItemText$pr.props);

/**
 *
 * @param {ListGroupItemTextBaseProps} props
 * @returns
 */

const ListGroupItemTextBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ListGroupItemText, {
    ...rest,
    children: children
  });
};
ListGroupItemTextBase.propTypes = {
  ...(ListGroupItemText.propTypes && ListGroupItemText.propTypes)
};

var _ListInlineItem$proto;
Object.assign({}, (_ListInlineItem$proto = ListInlineItem.prototype) == null ? void 0 : _ListInlineItem$proto.props);

/**
 *
 * @param {ListInlineItemBaseProps} props
 * @returns
 */

const ListInlineItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ListInlineItem, {
    ...rest,
    children: children
  });
};
ListInlineItemBase.propTypes = {
  ...(ListInlineItem.propTypes && ListInlineItem.propTypes)
};

Object.assign({}, Form.prototype.props);

/**
 *
 * @param {FormBaseProps} props
 * @returns
 */
const FormBase = props => {
  return /*#__PURE__*/jsx(Form, {
    ...props,
    children: props.children
  });
};
FormBase.propTypes = {
  ...(Form.propTypes && Form.propTypes)
};

Object.assign({}, FormFeedback.prototype.props);

/**
 *
 * @param {FormFeedbackBaseProps} props
 * @returns
 */
const FormFeedbackBase = props => {
  return /*#__PURE__*/jsx(FormFeedback, {
    ...props,
    children: props.children
  });
};
FormFeedbackBase.propTypes = {
  ...(FormFeedback.propTypes && FormFeedback.propTypes)
};

Object.assign({}, FormText.prototype.props);

/**
 *
 * @param {FormTextBaseProps} props
 * @returns
 */
const FormTextBase = props => {
  return /*#__PURE__*/jsx(FormText, {
    ...props,
    children: props.children
  });
};
FormTextBase.propTypes = {
  ...(FormText.propTypes && FormText.propTypes)
};

Object.assign({}, FormGroup.prototype.props);

/**
 *
 * @param {FormGroupBaseProps} props
 * @returns
 */
const FormGroupBase = props => {
  return /*#__PURE__*/jsx(FormGroup, {
    ...props,
    children: props.children
  });
};
FormGroupBase.propTypes = {
  ...(FormGroup.propTypes && FormGroup.propTypes)
};

const formatCreateLabel = (word, inputValue) => {
  return word + " \"" + inputValue + "\"";
};

const CreatableSelectBase = _ref => {
  let {
    leftPhrase = "Add",
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx(CreatableSelect, {
      className: "react-select",
      classNamePrefix: "react-select",
      formatCreateLabel: inputValue => formatCreateLabel(leftPhrase, inputValue),
      ...rest
    })
  });
};
CreatableSelect.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

const ReactSearchBase = _ref => {
  let {
    loadOptions,
    ...rest
  } = _ref;
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const onInputChange = value => {
    if (value.length > 0) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx(AsyncSelect, {
      className: "react-select",
      classNamePrefix: "react-select",
      loadOptions: loadOptions,
      onInputChange: onInputChange,
      menuIsOpen: menuIsOpen,
      ...rest
    })
  });
};
ReactSearchBase.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  //   isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

const ReactSelectBase = _ref => {
  let {
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ReactSelect, {
    classNamePrefix: "react-select",
    className: "react-select",
    ...rest
  });
};
ReactSelect.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string
};

Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */
const InputGroupBase$1 = props => {
  return /*#__PURE__*/jsx(InputGroup, {
    ...props,
    children: props.children
  });
};
InputGroupBase$1.propTypes = {
  ...(InputGroup.propTypes && InputGroup.propTypes)
};

Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */
const InputGroupTextBase$1 = props => {
  return /*#__PURE__*/jsx(InputGroupText, {
    ...props,
    children: props.children
  });
};
InputGroupTextBase$1.propTypes = {
  ...(InputGroupText.propTypes && InputGroupText.propTypes)
};

Object.assign({}, Label.prototype.props);

/**
 *
 * @param {LabelBaseProps} props
 * @returns
 */
const LabelBase = props => {
  return /*#__PURE__*/jsx(Label, {
    ...props,
    children: props.children
  });
};
LabelBase.propTypes = {
  ...(Label.propTypes && Label.propTypes)
};

Object.assign({}, Media$1.prototype.props);

/**
 *
 * @param {MediaBaseProps} props
 * @returns
 */
const MediaBase = props => {
  return /*#__PURE__*/jsx(Media$1, {
    ...props,
    children: props.children
  });
};
MediaBase.propTypes = {
  ...(Media$1.propTypes && Media$1.propTypes)
};

Object.assign({}, Offcanvas.prototype.props);

/**
 *
 * @param {OffcanvasBaseProps} props
 * @returns
 */
const OffcanvasBase = props => {
  return /*#__PURE__*/jsx(Offcanvas, {
    ...props,
    children: props.children
  });
};
OffcanvasBase.propTypes = {
  ...(Offcanvas.propTypes && Offcanvas.propTypes)
};

Object.assign({}, OffcanvasBody.prototype.props);

/**
 *
 * @param {OffcanvasBodyBaseProps} props
 * @returns
 */
const OffcanvasBodyBase = props => {
  return /*#__PURE__*/jsx(OffcanvasBody, {
    ...props,
    children: props.children
  });
};
OffcanvasBodyBase.propTypes = {
  ...(OffcanvasBody.propTypes && OffcanvasBody.propTypes)
};

Object.assign({}, OffcanvasHeader.prototype.props);

/**
 *
 * @param {OffcanvasHeaderBaseProps} props
 * @returns
 */
const OffcanvasHeaderBase = props => {
  return /*#__PURE__*/jsx(OffcanvasHeader, {
    ...props,
    children: props.children
  });
};
OffcanvasHeaderBase.propTypes = {
  ...(OffcanvasHeader.propTypes && OffcanvasHeader.propTypes)
};

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return bytes + " " + sizes[i] + ")";
  return (bytes / 1024 ** i).toFixed(1) + " " + sizes[i];
}
function Attachment(_ref) {
  let {
    file,
    name,
    onDelete,
    ...props
  } = _ref;
  let [processing, setProcessing] = useState({
    action: null,
    id: null
  });
  let [uploading, setUploading] = useState({
    status: false,
    progress: 0
  });
  return /*#__PURE__*/jsx(Col, {
    md: "4",
    children: /*#__PURE__*/jsx(Card, {
      className: "",
      children: /*#__PURE__*/jsxs(CardBody, {
        children: [/*#__PURE__*/jsxs("h5", {
          className: "mb-1",
          children: [/*#__PURE__*/jsx("i", {
            className: "tim-icons icon-paper"
          }), " ", file.path, " "]
        }), /*#__PURE__*/jsxs("h5", {
          className: "m-0",
          children: [!processing.action ? /*#__PURE__*/jsx("i", {
            onClick: e => onDelete(file),
            className: "tim-icons icon-simple-remove"
          }) : /*#__PURE__*/jsx(Spinner, {
            color: "text-damger",
            size: "sm"
          }), " ", /*#__PURE__*/jsx("small", {
            children: bytesToSize(file.size)
          })]
        }), uploading.status && uploading.progress < 100 && /*#__PURE__*/jsx(Progress, {
          value: uploading.progress
        })]
      })
    })
  });
}
/**
 * File drop zone can be used in any form elements along with other bootstrap forms. Allows users to
 * direct file drag and drop from their machine or just simply select ability by clicking anywhere on it
 */
function FileDropZone(_ref2) {
  let {
    onSelected = () => {},
    hint = "Drag 'n' drop, or click to select files",
    ...props
  } = _ref2;
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onDrop = React.useCallback((acceptedFiles, rejectedFiles) => {
    let duplicatePaths = selectedFiles.map(file => file.path) || [];
    acceptedFiles = acceptedFiles.filter(file => !duplicatePaths.includes(file.path));
    setSelectedFiles(previousFiles => [...previousFiles, ...acceptedFiles]);
  }, [selectedFiles]);
  React.useEffect(() => {
    onSelected(selectedFiles);
  }, [selectedFiles]);
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDrop,
    ...(props.acceptedFileTypes && {
      accept: props.acceptedFileTypes
    }),
    multiple: props.noMultiple ? false : true,
    disabled: props.disabled
  });
  const handleRemove = deleteFile => setSelectedFiles(prevFiles => prevFiles.filter(file => file.path !== deleteFile.path));
  return /*#__PURE__*/jsxs("section", {
    children: [/*#__PURE__*/jsx("input", {
      type: "file",
      name: "",
      id: ""
    }), /*#__PURE__*/jsxs("div", {
      ...getRootProps({
        className: "dropzone"
      }),
      children: [/*#__PURE__*/jsx("input", {
        ...getInputProps()
      }), /*#__PURE__*/jsx("p", {
        children: hint
      })]
    }), /*#__PURE__*/jsx("aside", {
      children: /*#__PURE__*/jsx(Row, {
        children: selectedFiles.map(file => /*#__PURE__*/jsx(Attachment, {
          file: file,
          name: props.name,
          onDelete: handleRemove
        }, file.path))
      })
    })]
  });
}
FileDropZone.propTypes = {
  /** `hint` is a place holder or hint for users in the dropzone.  */
  hint: PropTypes.string,
  /**
   * `onSelected` is fired when files are loaded from users system and provides files in the args.
   */
  onSelected: PropTypes.func,
  /**
   * `noMultiple` tells wheter or not multiple file selection is allowed or not.
   */
  noMultiple: PropTypes.bool,
  /**
   * `disabled` disables file selection.
   */
  disabled: PropTypes.bool
};

let ImsInputCheckProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputCheckProps} props
 * @returns
 */

const ImsInputCheck = _ref => {
  let {
    label,
    mandatory = false,
    onChange,
    unselected = false,
    error,
    helperText,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      className: classnames("", {
        "unselected-checkbox": unselected
      }),
      children: [/*#__PURE__*/jsxs(Col, {
        md: "12",
        children: [/*#__PURE__*/jsx(Input, {
          type: "checkbox",
          ...rest
        }), " ", /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          check: true,
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })]
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};
ImsInputCheck.propTypes = {
  ...(ImsInputCheckProps || {}),
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool,
  /** Input Props */
  ...Input.propTypes
};

const DateTimeBase = _ref => {
  let {
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Datetime, {
    ...rest
  });
};

const ImsInputDate = _ref => {
  let {
    label,
    name,
    value,
    onChange,
    error,
    mandatory = false,
    disabled,
    helperText
  } = _ref;
  return /*#__PURE__*/jsxs(FormGroup, {
    row: true,
    children: [/*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsxs(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
          className: "text-danger",
          children: "*"
        }) : ""]
      })
    }), /*#__PURE__*/jsxs(Col, {
      sm: "12",
      children: [/*#__PURE__*/jsx(DateTimeBase, {
        inputProps: {
          disabled,
          placeholder: "Select date",
          className: "form-control",
          value,
          name,
          // this onchange is direct input ...
          onChange,
          autoComplete: "off"
        }
        // this onchange is for calender ...
        ,
        onChange: e => {
          if (typeof e === "object") {
            let currentTarget = {
              name,
              value: e.format("D/M/YYYY")
            };
            onChange({
              currentTarget
            });
          }
        },
        timeFormat: false,
        dateFormat: "D/M/YYYY",
        closeOnSelect: true
      }), error && /*#__PURE__*/jsx("label", {
        className: "text-danger",
        children: /*#__PURE__*/jsx("small", {
          children: error
        })
      }), helperText && /*#__PURE__*/jsx("label", {
        className: "",
        children: /*#__PURE__*/jsx("small", {
          children: helperText
        })
      })]
    })]
  });
};

const ImsInputDropZone = _ref => {
  let {
    label,
    error,
    clearAll = false,
    onLoad,
    name,
    onChange,
    noMultiple,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsxs(FormGroup, {
    row: true,
    children: [/*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsx(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        children: label
      })
    }), /*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsx(FileDropZone, {
        ...rest,
        name: name,
        clearAll: clearAll,
        noMultiple: noMultiple,
        onLoad: files => onLoad(files)
      })
    })]
  });
};

let ImsInputRadioProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputRadioProps} props
 * @returns
 */

const ImsRadioCheckbox = _ref => {
  let {
    label,
    mandatory = false,
    unselected = false,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      className: classnames("", {
        "unselected-radio": unselected
      }),
      children: [/*#__PURE__*/jsx(Input, {
        type: "radio",
        ...rest
      }), " ", /*#__PURE__*/jsxs(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        check: true,
        children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
          className: "text-danger",
          children: "*"
        }) : ""]
      })]
    })
  });
};
ImsRadioCheckbox.propTypes = {
  ...(ImsInputRadioProps || {}),
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool,
  /** Input Props */
  ...Input.propTypes
};

const ImsInputRadio = _ref => {
  let {
    label,
    onChange,
    values,
    unselected,
    defaultChecked,
    verticalAlign = false,
    error,
    helperText,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      check: true,
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          sm: "12",
          children: label
        })
      }), /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx("div", {
          className: classnames("", {
            "d-flex flex-wrap": !verticalAlign
          }),
          children: values && (values == null ? void 0 : values.map((value, index) => /*#__PURE__*/jsx("span", {
            className: classnames("", {
              "mr-3 me-3": !verticalAlign
            }),
            children: /*#__PURE__*/jsx(ImsRadioCheckbox, {
              label: value,
              onChange: onChange,
              unselected: unselected,
              defaultChecked: defaultChecked && defaultChecked === value ? true : false,
              ...rest
            })
          }, index)))
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};

const ImsInputSelect = _ref => {
  let {
    label,
    error,
    name,
    onChange = () => {},
    mandatory = false,
    helperText,
    sideBtn,
    ...rest
  } = _ref;
  const handleChange = changes => {
    if (!changes) {
      let currentTarget = {
        name,
        value: []
      };
      onChange({
        currentTarget
      });
    } else if (Array.isArray(changes)) {
      let currentTarget = {
        name,
        value: changes //changes.map(item => item.value)
      };
      onChange({
        currentTarget
      });
    } else {
      let currentTarget = {
        name,
        value: changes //changes.value
      };
      onChange({
        currentTarget
      });
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        className: "d-flex",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : "", " ", sideBtn && sideBtn]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(ReactSelectBase, {
          ...rest,
          onChange: handleChange
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};

Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */

const InputGroupBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(InputGroup, {
    ...rest,
    children: children
  });
};
InputGroupBase.propTypes = {
  ...(InputGroup.propTypes && InputGroup.propTypes)
};

const handleGroupFocus = e => {
  var _e$target$parentEleme;
  (_e$target$parentEleme = e.target.parentElement.parentElement.children[1]) == null || _e$target$parentEleme.focus();
  if (e.target.parentElement.parentElement.children[0]) {
    var _e$target$parentEleme2;
    (_e$target$parentEleme2 = e.target.parentElement.parentElement.children[0]) == null || _e$target$parentEleme2.focus();
  }
  if (e.target.parentElement.parentElement.children[2]) {
    var _e$target$parentEleme3;
    (_e$target$parentEleme3 = e.target.parentElement.parentElement.children[2]) == null || _e$target$parentEleme3.focus();
  }
};

Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */

const InputGroupTextBase = _ref => {
  let {
    children,
    onClick,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(InputGroupText, {
    onClick: e => {
      if (!onClick) handleGroupFocus(e);else onClick(e);
    },
    ...rest,
    children: children
  });
};
InputGroupTextBase.propTypes = {
  ...(InputGroupText.propTypes && InputGroupText.propTypes)
};

const ImsInputSelectWithIcon = _ref => {
  let {
    label,
    error,
    icon,
    name,
    onChange = () => {},
    mandatory = false,
    helperText,
    ...rest
  } = _ref;
  const handleChange = changes => {
    if (!changes) {
      let currentTarget = {
        name,
        value: []
      };
      onChange({
        currentTarget
      });
    } else if (Array.isArray(changes)) {
      let currentTarget = {
        name,
        value: changes //changes.map(item => item.value)
      };
      onChange({
        currentTarget
      });
    } else {
      let currentTarget = {
        name,
        value: changes //changes.value
      };
      onChange({
        currentTarget
      });
    }
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsxs(InputGroupBase, {
          children: [/*#__PURE__*/jsx(InputGroupTextBase, {
            children: /*#__PURE__*/jsx("i", {
              className: "" + icon
            })
          }), /*#__PURE__*/jsx(ReactSelectBase, {
            ...rest,
            onChange: handleChange
          })]
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

let ImsInputTextProps = Object.assign({}, Input.prototype.props);

/**
 * @param {ImsInputTextProps} props
 * @returns
 */

const ImsInputText = _ref => {
  let {
    label,
    mandatory = false,
    error = "",
    feedbackText = "",
    helperText = "",
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [label && /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(Input, {
          invalid: error,
          ...rest
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsxs("label", {
          children: [" ", /*#__PURE__*/jsx("small", {
            children: helperText
          })]
        })]
      })]
    })
  });
};
ImsInputText.propTypes = {
  ...(ImsInputTextProps && ImsInputTextProps),
  /** Left Icon */
  leftIcon: PropTypes.string,
  /** Right Icon */
  rightIcon: PropTypes.string,
  /** Left Icon Style */
  leftIconStyle: PropTypes.string,
  /** Right Icon Style */
  rightIconStyle: PropTypes.string,
  /** Label */
  label: PropTypes.string,
  /** Type */
  type: PropTypes.string,
  /** Mandatory */
  mandatory: PropTypes.bool,
  /** Error */
  error: PropTypes.string,
  /** Valid */
  //** Helper Text */
  helperText: PropTypes.string,
  valid: PropTypes.bool,
  /** On Change */
  onChange: PropTypes.func,
  /** Label Column */
  labelCol: PropTypes.string,
  /** Input Column */
  inputCol: PropTypes.string,
  /** Value */
  value: PropTypes.string,
  /** Placeholder */
  placeholder: PropTypes.string,
  /** Input Props */
  ...Input.propTypes
};

const ImsInputTextWithIcon = _ref => {
  let {
    label,
    onChange,
    icon,
    type = "text",
    mandatory = false,
    error,
    defaultOpt,
    helperText,
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [label && /*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsxs(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: [label, " ", mandatory ? /*#__PURE__*/jsx("span", {
            className: "text-danger",
            children: "*"
          }) : ""]
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(InputGroupBase, {
          children: /*#__PURE__*/jsx(InputGroupTextBase, {
            children: /*#__PURE__*/jsx("i", {
              className: "" + icon
            })
          })
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          className: "",
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

const ImsInputTime = _ref => {
  let {
    label,
    name,
    value,
    onChange,
    error,
    disabled,
    helperText
  } = _ref;
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsxs(FormGroup, {
      row: true,
      children: [/*#__PURE__*/jsx(Col, {
        sm: "12",
        children: /*#__PURE__*/jsx(Label, {
          style: {
            fontSize: "16px"
          },
          className: "text-dark",
          children: label
        })
      }), /*#__PURE__*/jsxs(Col, {
        sm: "12",
        children: [/*#__PURE__*/jsx(Datetime, {
          dateFormat: false,
          timeIntervals: 30,
          timeFormat: "HH:mm",
          inputProps: {
            disabled,
            className: "form-control",
            placeholder: "Select a time",
            value,
            name,
            // this onchange is direct input ...
            onChange,
            autoComplete: "off"
          }
          // this onchange is for calender ...
          ,
          onChange: e => {
            if (typeof e === "object") {
              let currentTarget = {
                name,
                value: e.format("HH:mm")
              };
              onChange({
                currentTarget
              });
            }
          },
          className: "text-dark"
        }), error && /*#__PURE__*/jsx("label", {
          className: "text-danger",
          children: /*#__PURE__*/jsx("small", {
            children: error
          })
        }), helperText && /*#__PURE__*/jsx("label", {
          children: /*#__PURE__*/jsx("small", {
            children: helperText
          })
        })]
      })]
    })
  });
};

const ELEMENT_TYPES = {
  INLINE_DEFAULT: "inline-default",
  BLOCK_DEFAULT: "block-default",
  ATOMIC_ENTITY: "atomic-entity"
};

const ENTITY_NAME = {
  IMAGE: "image",
  DIVIDER: "divider",
  LINK: "link",
  MENTION: "mention",
  CHECKLIST: "checklist",
  ALIGN_LEFT: "start",
  ALIGN_CENTER: "center",
  ALIGN_RIGHT: "end"
};

function Entry(_ref) {
  let {
    name,
    profileImageSrc,
    _id,
    onSelect = () => {}
  } = _ref;
  let handleSelect = useCallback(e => {
    e.preventDefault();
    onSelect({
      name,
      profileImageSrc,
      _id
    });
  });
  return /*#__PURE__*/jsxs("div", {
    className: "d-flex align-items-center",
    children: [/*#__PURE__*/jsx("div", {
      className: "avatar mb-1",
      children: /*#__PURE__*/jsx("img", {
        src: profileImageSrc || "https://assets.imssystems.tech/images/system/avatar-placeholder.jpg",
        alt: name
      })
    }), /*#__PURE__*/jsx("div", {
      onClick: handleSelect,
      className: "btn btn-link p-2 mb-1",
      children: name
    })]
  });
}

function MentionSuggestions(_ref) {
  let {
    suggestions,
    ...rest
  } = _ref;
  let {
    computedPosForMentionSuggestions
  } = useContext(TextEditorContext);
  return /*#__PURE__*/jsx(Fragment, {
    children: suggestions.length ? /*#__PURE__*/jsx("div", {
      className: "mention-suggestions position-absolute mt-4 p-2 shadow-md",
      style: {
        ...computedPosForMentionSuggestions
      },
      children: suggestions.map((suggestion, index) => {
        return /*#__PURE__*/jsx(Entry, {
          ...suggestion,
          ...rest
        }, suggestion.name + index);
      })
    }) : null
  });
}

function Mention(props) {
  let mentionInputRef = useRef(null);
  let {
    editorRef,
    mentionSuggestions,
    updateComputedPosForMentionSuggestions,
    handleMentionSelect
  } = useContext(TextEditorContext);
  const computeStylePos = useCallback(() => {
    var _editorRef$current;
    const editorRect = (_editorRef$current = editorRef.current) == null || (_editorRef$current = _editorRef$current.editor) == null ? void 0 : _editorRef$current.getBoundingClientRect();
    let leftSpace = editorRect.width - mentionInputRef.current.offsetLeft < 240 ? mentionInputRef.current.offsetLeft - 230 : mentionInputRef.current.offsetLeft;
    return {
      left: leftSpace,
      top: mentionInputRef.current.offsetTop,
      display: "block"
    };
  }, []);
  const hideSuggestions = useCallback(() => {
    return {
      display: "none"
    };
  }, []);
  useEffect(() => {
    if (mentionInputRef.current) updateComputedPosForMentionSuggestions(computeStylePos());
  }, []);
  function retriveEntityData() {
    if (!props.entityKey) return null;
    const entity = props.contentState.getEntity(props.entityKey);
    return {
      ...(entity == null ? void 0 : entity.getData())
    };
  }
  return /*#__PURE__*/jsxs(Fragment, {
    children: [retriveEntityData() ? /*#__PURE__*/jsx("a", {
      href: "/admin/users/" + retriveEntityData()._id,
      className: "text-primary",
      children: retriveEntityData().name
    }) : /*#__PURE__*/jsx("span", {
      ref: mentionInputRef,
      className: "",
      children: props.children
    }), /*#__PURE__*/jsx(MentionSuggestions, {
      suggestions: mentionSuggestions.filter(item => {
        var _props$decoratedText;
        return item.name.toLowerCase().includes(props.decoratedText.slice(1, props == null || (_props$decoratedText = props.decoratedText) == null ? void 0 : _props$decoratedText.length).toLowerCase());
      }),
      onSelect: _ref => {
        let {
          name,
          profileImageSrc,
          _id
        } = _ref;
        let userName = "@" + name.split(" ").join("_");
        handleMentionSelect(props.contentState, props.blockKey, {
          start: props.start,
          end: props.end
        }, {
          mention: userName + " ",
          profileImageSrc,
          _id,
          name
        } // adding a trailing whitespace to create a smooth experience
        );
        updateComputedPosForMentionSuggestions(hideSuggestions());
      }
    })]
  });
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

const HANDLE_REGEX$1 = /\B@\w+/g;
/**
 *
 * @param {*} contentBlock - draft js sends a contentBlock to handle state
 * @param {*} callback - draft js sends a callback to handle state
 * @param {*} contentState - this draft js  parameter is not utilised at the minit
 */
function mentionStrategy(contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX$1, contentBlock, callback);
}

const mentionDecorator = {
  strategy: mentionStrategy,
  component: Mention
};

function HTTPSLink(props) {
  return /*#__PURE__*/jsx("a", {
    href: props.decoratedText,
    title: props.decoratedText,
    target: "_blank",
    rel: "noreferrer",
    children: props.children
  });
}

const HANDLE_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
/**
 *
 * @param {*} contentBlock - draft js sends a contentBlock to handle state
 * @param {*} callback - draft js sends a callback to handle state
 * @param {*} contentState - this draft js  parameter is not utilised at the minit
 */
function strategy(contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

const httpsLinkDecorator = {
  strategy,
  component: HTTPSLink
};

/**
 * TODO: following piece of codes are unstable and buggy need to 
 * work on these before integration.
 */
const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === ENTITY_NAME.LINK;
  }, callback);
};
const textLinkDecorator = {
  strategy: findLinkEntities,
  component: Link
};
const handleCreateLink = editorState => {
  let link = window.prompt("Paste the link bellow:");
  if (link) {
    let linkText = window.prompt("Paste the link-text below:");
    if (linkText) {
      const currentContent = editorState.getCurrentContent();
      currentContent.createEntity(ENTITY_NAME.LINK, "MUTABLE", {
        href: link,
        linkText
      });
      let entityKey = currentContent.getLastCreatedEntityKey();
      const selection = editorState.getSelection();
      const contentWithTextLinkEntity = Modifier.replaceText(currentContent, selection, linkText, null, entityKey);
      const newSelectionState = selection.set("anchorOffset", selection.getAnchorOffset() + linkText.length);
      const editorStateWithTextLinkEntity = EditorState.set(editorState, {
        currentContent: contentWithTextLinkEntity
      }, "create-entity");
      const editorStateWithNewSelection = EditorState.forceSelection(editorStateWithTextLinkEntity, newSelectionState);
      // console.log(
      //   newSelectionState.getAnchorOffset(),
      //   "editor selection anchor offset after link insert:",
      //   editorStateWithNewSelection.getSelection().getAnchorOffset()
      // );
      return editorStateWithNewSelection;
    }
  }
};
function Link(props) {
  let data = props.contentState.getEntity(props.entityKey).getData();
  if (!!data.href) {
    return /*#__PURE__*/jsx("a", {
      href: data.href,
      title: data.linkText,
      target: "_blank",
      rel: "noreferrer",
      children: data.linkText || data.href
    });
  }
  return null;
}

function _catch$3(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
const compositeDecorator = new CompositeDecorator([mentionDecorator, httpsLinkDecorator, textLinkDecorator]);
function useTextEditor(config) {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty(compositeDecorator));
  const [focusedForEditing, setFocusedForEditing] = useState(false);
  const [computedPosForMentionSuggestions, setComputedPosForMentionSuggestions] = useState({
    display: "none"
  });
  const updateComputedPosForMentionSuggestions = position => setComputedPosForMentionSuggestions(position);
  /**
   * the following effect block handles if the component is being
   * controlled by outside values.
   */
  const activateEditor = () => setFocusedForEditing(true);
  const deactivateEditor = () => setFocusedForEditing(false);
  function stateController() {
    let currentContent;
    try {
      if (typeof config.value === "string") {
        currentContent = JSON.parse(config.value);
      }
      if (typeof config.value === "object") {
        currentContent = config.value;
      }
    } catch (err) {
      console.log(err);
      /**
       * here we are handling if the content parsing failes because if preexisting
       * plain text, we are converting that into a draft data structure for future
       * this is usefull for handling legacy data or automatic migration to draft data
       * structure
       */
      if (typeof config.value === "string") return handleEditorStateChange(EditorState.createWithContent(ContentState.createFromText(config.value)));
    }
    if (config.value || currentContent) {
      return handleEditorStateChange(EditorState.push(editorState, convertFromRaw(currentContent), "change-block-data"));
    }
    return handleEditorStateChange(EditorState.createEmpty(compositeDecorator));
  }
  useEffect(() => {
    stateController();
  }, []);
  useEffect(() => {
    if (config.readOnly) {
      return stateController();
    }
    if (!config.value) {
      handleEditorStateChange(EditorState.createEmpty(compositeDecorator));
    }
  }, [config.value]);
  const fileInput = useRef(null);
  const _openFilePrompt = () => fileInput.current.click();
  const _createAtomicBlockEntity = (command, data) => {
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(command, "IMMUTABLE", {
      ...data
    });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    }, "create-entity");
    handleEditorStateChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, " "));
  };
  /**
   * this function allows this component user to define own link generator.
   * usefull if someone wants to preprocess a file through a backend before
   * using as am image src or achor href
   * @param {*} metaData
   * @returns {Promise}
   */
  const generateLink = function (metaData) {
    try {
      if (!config.linkGeneratorFn || typeof config.linkGeneratorFn !== "function") return Promise.resolve(null);
      return Promise.resolve(config.linkGeneratorFn(metaData));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  /**
   * this function updates editors state for the current instance of the component
   * @param {EditorState} editorState
   */
  const handleEditorStateChange = editorState => {
    const contentState = editorState.getCurrentContent();
    setEditorState(editorState);
    console.log(JSON.stringify(convertToRaw(contentState)));
    // check if contentState has text or entity or block data to decide if we should send data to parent component or not to avoid unnecessary re-rendering
    config.onDataStructureChange(JSON.stringify(convertToRaw(contentState)));
    // if (
    //   convertToRaw(contentState).blocks.every(
    //     (block) => block.text.trim() === ""
    //   ) &&
    //   Object.values(convertToRaw(contentState).entityMap).length === 0
    // ) {
    //   config.onDataStructureChange("");
    // } else {
    //   config.onDataStructureChange(JSON.stringify(convertToRaw(contentState)));
    //   //this will set cursor to the end of the editor
    //   setTimeout(() => {
    //     const selection = editorState.getSelection();
    //     const newSelection = selection.merge({
    //       anchorKey: selection.getAnchorKey(),
    //       anchorOffset: selection.getAnchorOffset(),
    //       focusKey: selection.getFocusKey(),
    //       focusOffset: selection.getFocusOffset(),
    //       isBackward: false,
    //       hasFocus: true,
    //     });
    //     const newEditorState = EditorState.forceSelection(
    //       editorState,
    //       newSelection
    //     );
    //     setEditorState(newEditorState);
    //   }, 0);
    // }
  };
  const handleKeyCommand = (command, editorState) => {
    let newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleEditorStateChange(newState);
      return "handled";
    }
    return "not-handled";
  };
  const _handleFiles = function (files) {
    try {
      if (!config.handleUpload) return Promise.resolve(console.log("Uploader function not specified"));
      let areImages = files.every(file => file.type.split("/")[0] === "image");
      /** todo: check file size here */
      if (!areImages) return Promise.resolve(console.log("All files has to be images"));
      return Promise.resolve(_catch$3(function () {
        return Promise.resolve(Promise.all(files.map(file => config.handleUpload(file)))).then(function (storageInformations) {
          console.log(storageInformations);
          if (!storageInformations.every(storageInfo => storageInfo)) console.log("one or mutiple files don't have storage info");
          storageInformations.map(storageInfo => _createAtomicBlockEntity(ENTITY_NAME.IMAGE, {
            storageInfo
          }));
        });
      }, function (err) {
        return console.log(err);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const _handleFileInputChange = e => {
    e.preventDefault();
    let files = e.target.files;
    _handleFiles(Array.from(files));
  };
  const getFileInputProps = () => ({
    ref: fileInput,
    onChange: _handleFileInputChange
  });
  const _atomicEntityController = {
    [ENTITY_NAME.IMAGE]: _openFilePrompt,
    [ENTITY_NAME.LINK]: () => handleEditorStateChange(handleCreateLink(editorState)),
    [ENTITY_NAME.DIVIDER]: () => _createAtomicBlockEntity(ENTITY_NAME.DIVIDER, {}),
    [ENTITY_NAME.MENTION]: () => {},
    [ENTITY_NAME.CHECKLIST]: () => {
      _createAtomicBlockEntity(ENTITY_NAME.CHECKLIST, {});
    }
  };
  const _buttonHandlers = {
    [ELEMENT_TYPES.INLINE_DEFAULT]: command => handleEditorStateChange(RichUtils.toggleInlineStyle(editorState, command)),
    [ELEMENT_TYPES.BLOCK_DEFAULT]: command => handleEditorStateChange(RichUtils.toggleBlockType(editorState, command)),
    [ELEMENT_TYPES.ATOMIC_ENTITY]: command => {
      _atomicEntityController[command]();
    }
  };
  const handleToolClick = (tool, e) => {
    e.preventDefault();
    if (!editorState.getSelection().getHasFocus()) return null;
    if (!(tool != null && tool.element)) return null;
    _buttonHandlers[tool.element](tool.style);
  };
  const handleDroppedFiles = (selection, files) => _handleFiles(files);
  const handlePastedFiles = files => _handleFiles(files);
  const handleMentionSelect = (contentState, blockKey, position, mentionData) => {
    let selectionState = SelectionState.createEmpty(blockKey);
    let newContentState = contentState.createEntity(ENTITY_NAME.MENTION, "IMMUTABLE", {
      ...mentionData
    });
    let entityKey = newContentState.getLastCreatedEntityKey();
    newContentState = Modifier.replaceText(contentState, selectionState.merge({
      // The starting position of the range to be replaced.
      anchorOffset: position.start,
      // The end position of the range to be replaced.
      focusOffset: position.end
    }), mentionData.mention, editorState.getCurrentInlineStyle(), entityKey);
    handleEditorStateChange(
    /**
     * in following solution we had to use moveFocusToEnd() and the force the
     * selecion back to replaced text from  new content through forceSelection().
     * This creates an effect that the cursor is at the end of mentioend name.
     * Draftjs has got an issue with cursor positioning with entity and modifier.
     * see issue : https://github.com/facebook/draft-js/issues/627
     *
     * otherwise expected behaviour is to only do an EditorState.set() to put the
     * mentioned entity in the editor in the identified selection state starting with @.
     */
    EditorState.forceSelection(EditorState.moveFocusToEnd(EditorState.set(editorState, {
      currentContent: newContentState
    })), newContentState.getSelectionAfter()));
  };
  const forceFocusEditorEnd = e => {
    var _editorRef$current$ed;
    (e == null ? void 0 : e.preventDefault) && e.preventDefault();
    (_editorRef$current$ed = editorRef.current.editor) == null || _editorRef$current$ed.focus();
    handleEditorStateChange(EditorState.moveFocusToEnd(editorState));
  };
  const isToolActive = tool => {
    return editorState.getCurrentInlineStyle().has(tool == null ? void 0 : tool.style) || (editorState == null ? void 0 : editorState.getCurrentContent().getBlockForKey(editorState == null ? void 0 : editorState.getSelection().getStartKey()).getType()) === (tool == null ? void 0 : tool.style);
  };
  return {
    editorRef,
    editorState,
    computedPosForMentionSuggestions,
    focusedForEditing,
    getFileInputProps,
    generateLink,
    handleDroppedFiles,
    handlePastedFiles,
    handleEditorStateChange,
    handleKeyCommand,
    handleToolClick,
    forceFocusEditorEnd,
    updateComputedPosForMentionSuggestions,
    handleMentionSelect,
    activateEditor,
    deactivateEditor,
    isToolActive
  };
}

const TextEditorContext = /*#__PURE__*/React.createContext();
const TextEditorContextProvider = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  let {
    ...editorUtils
  } = useTextEditor({
    handleUpload: rest.handleUpload || function () {
      return Promise.resolve();
    },
    linkGeneratorFn: rest.linkGeneratorFn,
    onDataStructureChange: rest.onDataStructureChange || function () {},
    value: rest.value || null,
    readOnly: rest.readOnly
  });
  return /*#__PURE__*/jsx(TextEditorContext.Provider, {
    value: {
      ...editorUtils,
      mentionSuggestions: rest.mentionSuggestions || []
    },
    children: children
  });
};

// import noImagePlaceHolder from "assets/img/default-avatar.png";

function _catch$2(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
function usePreRenderProcessing(config) {
  let [link, setLink] = React.useState(config.src);
  React.useEffect(() => {
    const _prepareSource = function () {
      try {
        /**
         * we are trying to generate the link with some meta data as a second step
         * if src is not provided. if the data can't generate link it will render
         * the empty placeholder. this feature is usefull if someone wants to generate
         * image src/link based on runtime thorugh a backend server.
         */
        return Promise.resolve(function () {
          if (!config.src) {
            return _catch$2(function () {
              if (!config.generateLink || typeof config.generateLink !== "function") throw Error("link gnerator function must be supplied");
              return Promise.resolve(config.generateLink(config.storageInfo)).then(function (link) {
                if (!link) throw new Error("link generator function must return a valid link or else provide a valid  image source");
                setLink(link);
              });
            }, function (err) {
              setLink("https://assets.imssystems.tech/images/system/avatar-placeholder.jpg");
              console.log(err);
            });
          }
        }());
      } catch (e) {
        return Promise.reject(e);
      }
    };
    _prepareSource();
    return () => {};
  }, [config.generateLink]);
  return {
    link
  };
}

function Image(props) {
  if (props.src || props.link) {
    var _props$storageInfo;
    return /*#__PURE__*/jsx("img", {
      src: props.src || props.link,
      alt: props.alt || ((_props$storageInfo = props.storageInfo) == null ? void 0 : _props$storageInfo.Key) || "...",
      className: "unselectable"
    });
  }
  return null;
}

function Divider() {
  return /*#__PURE__*/jsx("hr", {});
}

function CheckListItem(_ref) {
  return /*#__PURE__*/jsx(React.Fragment, {});
}

const partitions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
function StretchBar(_ref) {
  var _editorRef$current;
  let {
    editorRef,
    onResizeEnd,
    reference = "left",
    currentSize = 10,
    ...rest
  } = _ref;
  let [isDragging, setIsDragging] = React.useState(false);
  let [currentlyHoverring, setCurrentlyHovering] = React.useState(currentSize);
  /**
   * we are getting editor bounding client rectangle to calculate
   * styles in mutiple places for better fitting our resizing algorithm
   */
  const editorRect = (_editorRef$current = editorRef.current) == null || (_editorRef$current = _editorRef$current.editor) == null ? void 0 : _editorRef$current.getBoundingClientRect();
  /**
   * following function generates guide positions both in pixels and percentages
   * when user is dragging to resize
   */
  let getGuidePositions = () => partitions.map(part => {
    /**
     * we are mapping out the partitions to it's corresponding
     * abolute "X" pixels. editors left padding is added as an offset
     * balance to all the absolute positioned guide elements.
     */
    parseInt(window.getComputedStyle(document.querySelector(".draft-editor-container"), null).getPropertyValue("padding-left"));
    let offset = editorRect.width * part / 100;
    return {
      percentage: part,
      pixels: Math.ceil(offset)
    };
  });
  let handleMouseDown = React.useCallback(e => {
    e.preventDefault();
    const doDrag = e => {
      /** we are copying the partitions constant so action array is not muted */
      let partitionsCopy = [...partitions];
      setIsDragging(true);
      /** the algorithm finds the closed partiion to the current cursor
       * and sorts the closed at the begining of the array.
       * --------------------------------------------------------------
       * caution: do not use e.offesetX (because event.offsetX changes depending on hovering element)
       * alway good to calculate the offset value
       */
      let fullLength = reference === "center" ? editorRect.width / 2 : editorRect.width;
      let refLine = reference === "center" ? editorRect.left + editorRect.width / 2 : reference === "end" ? editorRect.left + editorRect.width : editorRect.left;
      let calculatedOffsetX = parseInt(Math.abs(e.clientX - refLine));
      let needle = parseInt(calculatedOffsetX / fullLength * 100);
      partitionsCopy.sort((a, b) => {
        return Math.abs(needle - a) - Math.abs(needle - b);
      });
      /** we pick the closest partition position as the reszied to data */
      let resizedTo = partitionsCopy[0];
      setCurrentlyHovering(resizedTo);
      let createdEvent = {
        partition: resizedTo
      };
      onResizeEnd && onResizeEnd(createdEvent);
      let entityKey = rest.block.getEntityAt(0);
      rest.contentState.mergeEntityData(entityKey, {
        size: resizedTo
      });
    };
    const stopDrag = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", doDrag, false);
      document.removeEventListener("mouseup", stopDrag, false);
      /**
       * - handle drag state
       * - handle resized data
       */
    };
    document.addEventListener("mousemove", doDrag, false);
    document.addEventListener("mouseup", stopDrag, false);
  }, [onResizeEnd]);
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx("div", {
      className: "d-inline-block p-2 unselectable",
      style: {
        cursor: "col-resize"
      },
      onMouseDown: handleMouseDown,
      children: /*#__PURE__*/jsx("div", {
        className: "bg-primary rounded resize-bar"
      })
    }), isDragging && /*#__PURE__*/jsx("div", {
      className: "resize-guides-container position-absolute ",
      children: getGuidePositions().map(guide => {
        return /*#__PURE__*/jsx("div", {
          className: classnames("resize-guide position-absolute rounded", {
            "bg-info": /** match if alligned at left/start  */
            reference === "start" && guide.percentage === currentlyHoverring || ( /** match if alligned at right/end  */
            reference === "end" && 100 - guide.percentage === currentlyHoverring)
          }),
          style: {
            left: guide.pixels
          }
        }, guide.pixels);
      })
    })]
  });
}

const alignTools = [{
  label: "Align left",
  style: ENTITY_NAME.ALIGN_LEFT,
  icon: "fa-solid fa-align-left"
}, {
  label: "Align center",
  style: ENTITY_NAME.ALIGN_CENTER,
  icon: "fa-solid fa-align-justify"
}, {
  label: "Align right",
  style: ENTITY_NAME.ALIGN_RIGHT,
  icon: "fa-solid fa-align-right"
}];
function Aligner(_ref) {
  let {
    editorRef,
    onAlignmentChange,
    ...rest
  } = _ref;
  let handleAlignment = useCallback(_ref2 => {
    let {
      alignment
    } = _ref2;
    onAlignmentChange && onAlignmentChange({
      alignment
    });
    let entityKey = rest.block.getEntityAt(0);
    rest.contentState.mergeEntityData(entityKey, {
      alignment: alignment
    });
  }, [onAlignmentChange]);
  return /*#__PURE__*/jsx("div", {
    className: "d-inline-block shadow-md rounded mb-1",
    children: alignTools.map(tool => {
      return /*#__PURE__*/jsx(Button, {
        title: tool == null ? void 0 : tool.label,
        type: "button",
        className: classnames("btn btn-icon m-0 text-muted", {}),
        onClick: e => handleAlignment({
          alignment: tool == null ? void 0 : tool.style
        }),
        children: tool.icon ? /*#__PURE__*/jsx("i", {
          className: tool.icon
        }) : tool == null ? void 0 : tool.label
      }, tool == null ? void 0 : tool.style);
    })
  });
}

function Resizer(_ref) {
  let {
    children,
    ...rest
  } = _ref;
  let [isActive, setIsActive] = React.useState(false);
  let toggleIsActive = () => setIsActive(curret => !curret);
  let [currentSize, setCurrentSize] = React.useState(rest.size || 30);
  let [alignment, setAlignment] = React.useState(rest.alignment || ENTITY_NAME.ALIGN_LEFT);
  let alignementClasses = () => ({
    "justify-content-start": alignment === "start",
    "justify-content-center": alignment === "center",
    "justify-content-end": alignment === "end"
  });
  return /*#__PURE__*/jsxs(Fragment, {
    children: [isActive && alignment && /*#__PURE__*/jsx("div", {
      className: classnames("d-flex", alignementClasses()),
      children: /*#__PURE__*/jsx(Aligner, {
        onAlignmentChange: e => setAlignment(e.alignment),
        ...rest
      })
    }), /*#__PURE__*/jsxs("div", {
      className: classnames("d-flex align-items-center position-relative", alignementClasses()),
      children: [isActive && alignment !== "start" && /*#__PURE__*/jsx(StretchBar, {
        ...rest,
        reference: alignment,
        onResizeEnd: e => setCurrentSize(e.partition)
      }), /*#__PURE__*/jsx("div", {
        className: classnames("d-inline-block rounded resize-container unselectable", {
          "resize-focused": isActive,
          "w-10": currentSize === 10,
          "w-15": currentSize === 15,
          "w-20": currentSize === 20,
          "w-25": currentSize === 25,
          "w-30": currentSize === 30,
          "w-35": currentSize === 35,
          "w-40": currentSize === 40,
          "w-45": currentSize === 45,
          "w-50": currentSize === 50,
          "w-55": currentSize === 55,
          "w-60": currentSize === 60,
          "w-65": currentSize === 65,
          "w-70": currentSize === 70,
          "w-75": currentSize === 75,
          "w-80": currentSize === 80,
          "w-85": currentSize === 85,
          "w-90": currentSize === 90,
          "w-95": currentSize === 95,
          "w-100": currentSize === 100
        }),
        onClick: toggleIsActive,
        children: children
      }), isActive && alignment !== "end" && /*#__PURE__*/jsx(StretchBar, {
        ...rest,
        reference: alignment,
        currentSize: currentSize,
        onResizeEnd: e => setCurrentSize(e.partition)
      })]
    })]
  });
}

function Media(_ref) {
  let {
    type,
    data,
    editorControllers,
    ...rest
  } = _ref;
  let media = null;
  let toolProperties = {
    ...data,
    ...editorControllers,
    ...rest
  };
  if (type === ENTITY_NAME.IMAGE) {
    media = /*#__PURE__*/jsx(Resizer, {
      ...toolProperties,
      children: /*#__PURE__*/jsx(Image, {
        ...data
      })
    });
  }
  if (type === ENTITY_NAME.DIVIDER) {
    media = /*#__PURE__*/jsx(Divider, {
      ...data
    });
  }
  if (type === ENTITY_NAME.CHECKLIST) {
    media = /*#__PURE__*/jsx(CheckListItem, {
      ...data
    });
  }
  return media;
}

const editorMediaBlockRenderer = block => {
  if (block.getType() === "atomic") {
    return {
      component: ProcessedMedia,
      editable: false
    };
  }
  return null;
};
const ProcessedMedia = props => {
  const entityKey = props.block.getEntityAt(0);
  const entity = entityKey && props.contentState.getEntity(entityKey);
  const type = entity == null ? void 0 : entity.getType();
  const {
    generateLink,
    ...rest
  } = useContext(TextEditorContext);
  let processedResults = usePreRenderProcessing({
    generateLink,
    ...(entity == null ? void 0 : entity.getData())
  });
  return /*#__PURE__*/jsx(Media, {
    type: type,
    data: {
      ...(entity == null ? void 0 : entity.getData()),
      ...processedResults
    },
    editorControllers: {
      ...rest
    },
    ...props
  });
};

function TextEditor(_ref) {
  let {
    readOnly = false,
    ...props
  } = _ref;
  const {
    editorRef,
    editorState,
    handleEditorStateChange,
    handleDroppedFiles,
    handlePastedFiles,
    handleKeyCommand,
    activateEditor,
    deactivateEditor
  } = React.useContext(TextEditorContext);
  return /*#__PURE__*/jsx(Fragment, {
    children: /*#__PURE__*/jsx(Editor, {
      ref: editorRef,
      blockRendererFn: editorMediaBlockRenderer,
      placeholder: props.placeholder,
      onChange: handleEditorStateChange,
      editorState: editorState,
      spellCheck: true,
      handleKeyCommand: handleKeyCommand,
      handleDroppedFiles: handleDroppedFiles,
      handlePastedFiles: handlePastedFiles,
      readOnly: readOnly,
      onFocus: activateEditor,
      onBlur: deactivateEditor
    })
  });
}

const INLINE_TYPES = [{
  label: "Underline",
  style: "UNDERLINE",
  icon: "gns-icons-16 icon-icon-textunderline-24",
  element: ELEMENT_TYPES.INLINE_DEFAULT
}, {
  label: "Bold",
  style: "BOLD",
  icon: "gns-icons-16 icon-icon-textbolder-24",
  element: ELEMENT_TYPES.INLINE_DEFAULT
}, {
  label: "Italic",
  style: "ITALIC",
  icon: "gns-icons-16 icon-icon-textitalic-24",
  element: ELEMENT_TYPES.INLINE_DEFAULT
}, {
  label: "Strike through",
  style: "STRIKETHROUGH",
  icon: "gns-icons-16 icon-icon-textstrikethrough-24",
  element: ELEMENT_TYPES.INLINE_DEFAULT
}];
const BLOCK_TYPES = [{
  label: "Header",
  style: "header-three",
  icon: "gns-icons-16 icon-icon-header-24",
  element: ELEMENT_TYPES.BLOCK_DEFAULT
}, {
  label: "UL",
  style: "unordered-list-item",
  icon: "gns-icons-16 icon-icon-listdashes-24",
  element: ELEMENT_TYPES.BLOCK_DEFAULT
}, {
  label: "OL",
  style: "ordered-list-item",
  icon: "gns-icons-16 icon-icon-listnumbers-24",
  element: ELEMENT_TYPES.BLOCK_DEFAULT
}, {
  label: "Blockquote",
  style: "blockquote",
  icon: "gns-icons-16 icon-icon-quotes-24",
  element: ELEMENT_TYPES.BLOCK_DEFAULT
}, {
  label: "Code block",
  style: "code-block",
  icon: "gns-icons-16 icon-icon-codesimple-24",
  element: ELEMENT_TYPES.BLOCK_DEFAULT
}
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
const ENTITY_TYPES = [
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
  element: ELEMENT_TYPES.ATOMIC_ENTITY
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
  element: ELEMENT_TYPES.ATOMIC_ENTITY
}];
const toolType = {
  INLINE_TYPES,
  BLOCK_TYPES,
  ENTITY_TYPES
};

function ButtonSeparator(props) {
  return /*#__PURE__*/jsx("span", {
    className: "draft-toolbar-button-separator",
    children: "|"
  });
}

const FilePicker = /*#__PURE__*/React.forwardRef((props, ref) => {
  return /*#__PURE__*/jsx("input", {
    ...props,
    ref: ref,
    className: "d-none",
    type: "file",
    accept: props.accept || "image/*"
  });
});

function ToolBar(props) {
  const {
    getFileInputProps,
    isToolActive,
    handleToolClick,
    focusedForEditing
  } = React.useContext(TextEditorContext);
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx(FilePicker, {
      ...getFileInputProps()
    }), Object.keys(toolType).map((type, index) => {
      var _toolTypes$type;
      return /*#__PURE__*/jsxs(React.Fragment, {
        children: [(_toolTypes$type = toolType[type]) == null ? void 0 : _toolTypes$type.map(tool => {
          return /*#__PURE__*/jsx(Button, {
            title: tool == null ? void 0 : tool.label,
            type: "button",
            color: "link",
            className: classnames("text-toolbar-btn", {
              "text-muted": !focusedForEditing,
              "text-secondary": focusedForEditing,
              "text-primary": isToolActive(tool) && focusedForEditing
            }),
            onMouseDown: e => handleToolClick(tool, e),
            children: tool.icon ? /*#__PURE__*/jsx("i", {
              className: classnames(tool.icon, {
                "text-primary": isToolActive(tool)
              })
            }) : tool == null ? void 0 : tool.label
          }, tool == null ? void 0 : tool.style);
        }), index < Object.keys(toolType).length - 1 && /*#__PURE__*/jsx(ButtonSeparator, {})]
      }, type);
    })]
  });
}

function WrappedEditor(props) {
  const {
    forceFocusEditorEnd,
    focusedForEditing
  } = React.useContext(TextEditorContext);
  return /*#__PURE__*/jsxs("div", {
    className: classnames("draft-editor-container d-flex flex-column", {
      "editor-disabled": props.readOnly,
      "editor-active": focusedForEditing
    }),
    children: [!props.readOnly && /*#__PURE__*/jsx("div", {
      className: "bg-light toolbar",
      children: /*#__PURE__*/jsx(ToolBar, {
        ...props
      })
    }), /*#__PURE__*/jsxs("div", {
      className: classnames("", {
        "d-flex flex-column input-area bg-light m-3": !props.readOnly
      }),
      children: [/*#__PURE__*/jsx("div", {
        className: classnames("", {
          "px-3 pt-3": !props.readOnly
        }),
        children: /*#__PURE__*/jsx(TextEditor, {
          ...props
        })
      }), !props.readOnly && /*#__PURE__*/jsx("div", {
        className: "flex-grow-1",
        onMouseDown: forceFocusEditorEnd
      })]
    })]
  });
}

function Index(props) {
  return /*#__PURE__*/jsx(TextEditorContextProvider, {
    ...props,
    children: /*#__PURE__*/jsx(WrappedEditor, {
      ...props
    })
  });
}
Index.propTypes = {
  /** pre populated contents in the editor */
  value: PropTypes.string,
  /** link generator function helps to  get the file links */
  linkGeneratorFn: PropTypes.func,
  /** helps to specify where any media resource should be stored */
  handleUpload: PropTypes.func
};

const ImsTextEditor = _ref => {
  let {
    label,
    error,
    name,
    linkGenerator,
    handleUpload,
    onChange = () => {},
    helperText,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsxs(FormGroup, {
    row: true,
    children: [label && /*#__PURE__*/jsx(Col, {
      sm: "12",
      children: /*#__PURE__*/jsx(Label, {
        style: {
          fontSize: "16px"
        },
        className: "text-dark",
        children: label
      })
    }), /*#__PURE__*/jsxs(Col, {
      sm: "12",
      children: [/*#__PURE__*/jsx(Index, {
        onDataStructureChange: draftDataStructure => onChange({
          currentTarget: {
            name,
            value: draftDataStructure
          }
        }),
        linkGeneratorFn: linkGenerator,
        handleUpload: handleUpload,
        ...rest
      }), error && /*#__PURE__*/jsx("label", {
        className: "text-danger",
        children: /*#__PURE__*/jsx("small", {
          children: error
        })
      }), helperText && /*#__PURE__*/jsxs("label", {
        className: "",
        children: [" ", /*#__PURE__*/jsx("small", {
          children: helperText
        })]
      })]
    })]
  });
};

Object.assign({}, Input.prototype.props);

Object.assign({
  separated: PropTypes.bool
}, Pagination$1.prototype.props);
/**
 *
 * @param {PaginationBaseProps} props
 * @returns
 */

const PaginationBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Pagination$1, {
    className: classnames("pagination-separated " + rest.className, {}),
    ...rest,
    children: children
  });
};
PaginationBase.propTypes = {
  separated: PropTypes.bool,
  ...(Pagination$1.propTypes && Pagination$1.propTypes)
};

Object.assign({}, PaginationItem.prototype.props);
/**
 *
 * @param {PaginationItemBaseProps} props
 * @returns
 */

const PaginationItemBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(PaginationItem, {
    ...rest,
    children: children
  });
};
PaginationItemBase.propTypes = {
  ...(PaginationItem.propTypes && PaginationItem.propTypes)
};

Object.assign({}, PaginationLink.prototype.props);
/**
 *
 * @param {PaginationLinkBaseProps} props
 * @returns
 */

const PaginationLinkBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ButtonBase, {
    className: classnames("page-link " + rest.className, {}),
    ...rest,
    children: children
  });
};
PaginationLinkBase.propTypes = {
  ...(PaginationLink.propTypes && PaginationLink.propTypes)
};

var _TabContent$prototype;
Object.assign({}, (_TabContent$prototype = TabContent.prototype) == null ? void 0 : _TabContent$prototype.props);

/**
 *
 * @param {TabContentBaseProps} props
 * @returns
 */
const TabContentBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(TabContent, {
    ...rest,
    children: children
  });
};
TabContentBase.propTypes = {
  ...(TabContent.propTypes && TabContent.propTypes)
};

var _TabPane$prototype;
Object.assign({}, (_TabPane$prototype = TabPane.prototype) == null ? void 0 : _TabPane$prototype.props);

/**
 *
 * @param {TabPaneBaseProps} props
 * @returns
 */

const TabPaneBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(TabPane, {
    ...rest,
    children: children
  });
};
TabPaneBase.propTypes = {
  ...(TabPane.propTypes && TabPane.propTypes)
};

var _Alert$prototype;
Object.assign({}, (_Alert$prototype = Alert.prototype) == null ? void 0 : _Alert$prototype.props);

/**
 * @param {AlertBaseProps} props
 * @returns
 * */

const AlertBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Alert, {
    children: children
  });
};
AlertBase.propTypes = {
  ...(Alert.propTypes && Alert.propTypes)
};

var _UncontrolledAlert$pr;
Object.assign({}, (_UncontrolledAlert$pr = UncontrolledAlert.prototype) == null ? void 0 : _UncontrolledAlert$pr.props);

/**
 * @param {UncontrolledAlertBaseProps} props
 * @returns
 * */

const UncontrolledAlertBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledAlert, {
    ...rest,
    children: children
  });
};
UncontrolledAlertBase.propTypes = {
  ...(UncontrolledAlert.propTypes && UncontrolledAlert.propTypes)
};

var _Toast$prototype;
Object.assign({}, (_Toast$prototype = Toast.prototype) == null ? void 0 : _Toast$prototype.props);

/**
 * @param {ToastBaseProps} props
 * @returns
 * */

const ToastBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Toast, {
    ...rest,
    children: children
  });
};
ToastBase.propTypes = {
  ...(Toast.propTypes && Toast.propTypes)
};

var _ToastBody$prototype;
Object.assign({}, (_ToastBody$prototype = ToastBody.prototype) == null ? void 0 : _ToastBody$prototype.props);

/**
 * @param {ToastBodyBaseProps} props
 *  @returns
 * */

const ToastBodyBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ToastBody, {
    ...rest,
    children: children
  });
};
ToastBodyBase.propTypes = {
  ...(ToastBody.propTypes && ToastBody.propTypes)
};

var _ToastHeader$prototyp;
Object.assign({}, (_ToastHeader$prototyp = ToastHeader.prototype) == null ? void 0 : _ToastHeader$prototyp.props);

/**
 * @param {ToastHeaderBaseProps} props
 * @returns
 * */

const ToastHeaderBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(ToastHeader, {
    ...rest,
    children: "ToastHeaderBase"
  });
};
ToastHeaderBase.propTypes = {
  ...(ToastHeader.propTypes && ToastHeader.propTypes)
};

var _Collapse$prototype;
Object.assign({}, (_Collapse$prototype = Collapse.prototype) == null ? void 0 : _Collapse$prototype.props);

/**
 * @param {CollapseBaseProps} props
 * @returns
 * */

const CollapseBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Collapse, {
    ...rest,
    children: children
  });
};
CollapseBase.propTypes = {
  ...(Collapse.propTypes && Collapse.propTypes)
};

var _UncontrolledCollapse;
Object.assign({}, (_UncontrolledCollapse = UncontrolledCollapse.prototype) == null ? void 0 : _UncontrolledCollapse.props);

/**
 * @param {UncontrolledCollapseBaseProps} props
 * @returns
 * */

const UncontrolledCollapseBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(UncontrolledCollapse, {
    ...rest,
    children: children
  });
};
UncontrolledCollapseBase.propTypes = {
  ...(UncontrolledCollapse.propTypes && UncontrolledCollapse.propTypes)
};

Object.assign({}, Progress.prototype.props);

/**
 *
 * @param {ProgressBaseProps} props
 * @returns
 */
const ProgressBase = props => {
  return /*#__PURE__*/jsx(Progress, {
    ...props
  });
};
ProgressBase.propTypes = {
  ...(Progress.propTypes && Progress.propTypes)
};

Object.assign({}, Spinner.prototype.props);

/**
 * @param {SpinnerBaseProps} props
 * @returns
 * */

const SpinnerBase = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsx(Spinner, {
    ...rest,
    children: children
  });
};
SpinnerBase.propTypes = {
  ...(Spinner.propTypes && Spinner.propTypes)
};

Object.assign({}, Placeholder.prototype.props);

/**
 *
 * @param {PlaceholderBaseProps} props
 * @returns
 */
const PlaceholderBase = props => {
  return /*#__PURE__*/jsx(Placeholder, {
    ...props,
    children: props.children
  });
};
PlaceholderBase.propTypes = {
  ...(Placeholder.propTypes && Placeholder.propTypes)
};

Object.assign({}, PlaceholderButton.prototype.props);

/**
 *
 * @param {PlaceholderButtonBaseProps} props
 * @returns
 */
const PlaceholderButtonBase = props => {
  return /*#__PURE__*/jsx(PlaceholderButton, {
    ...props,
    children: props.children
  });
};
PlaceholderButtonBase.propTypes = {
  ...(PlaceholderButton.propTypes && PlaceholderButton.propTypes)
};

const ActivityBase = _ref => {
  let {
    avatar,
    name,
    subHeading,
    activity,
    footer,
    ...rest
  } = _ref;
  return /*#__PURE__*/jsxs(Card, {
    className: "bg-transparent border-0 shadow-none activity ms-5 ml-5 mb-0",
    children: [/*#__PURE__*/jsx(CardHeaderBase, {
      className: "bg-transparent border-0 shadow-none ",
      children: /*#__PURE__*/jsxs("div", {
        className: "d-flex",
        children: [/*#__PURE__*/jsx("div", {
          className: "avatar-container",
          children: /*#__PURE__*/jsx("img", {
            src: avatar,
            alt: "avatar",
            className: "avatar mt-1 ms-3 ml-3"
          })
        }), /*#__PURE__*/jsxs("div", {
          children: [/*#__PURE__*/jsx("p", {
            className: "m-0 font-size-body-2 text-type-dark",
            children: name
          }), subHeading && /*#__PURE__*/jsx("h6", {
            className: "mb-1  font-size-caption text-type-medium",
            children: subHeading
          })]
        })]
      })
    }), /*#__PURE__*/jsx(CardBodyBase, {
      className: "bg-transparent border-0 shadow-none p-0 ",
      children: activity
    }), /*#__PURE__*/jsx(CardFooterBase, {
      className: "bg-transparent border-0 shadow-none pt-2",
      children: footer
    })]
  });
};

Object.assign({
  cardProps: {
    type: Object,
    default: () => {}
  },
  cardHeaderProps: {
    type: Object,
    default: () => {}
  },
  cardFooterProps: {
    type: Object,
    default: () => {}
  },
  cardBodyProps: {
    type: Object,
    default: () => {}
  }
}, Card.prototype.props);

/**
 *
 * @param {ImsCardProps} props
 * @returns
 */

const ImsCard = _ref => {
  let {
    children,
    cardProps,
    cardHeaderProps,
    cardFooterProps,
    cardBodyProps
  } = _ref;
  return /*#__PURE__*/jsxs(Card, {
    ...cardProps,
    children: [(cardHeaderProps == null ? void 0 : cardHeaderProps.children) && /*#__PURE__*/jsx(CardHeaderBase, {
      ...cardHeaderProps,
      children: cardHeaderProps == null ? void 0 : cardHeaderProps.children
    }), /*#__PURE__*/jsx(CardBodyBase, {
      ...cardBodyProps,
      children: children
    }), (cardFooterProps == null ? void 0 : cardFooterProps.children) && /*#__PURE__*/jsx(CardFooterBase, {
      ...cardFooterProps,
      children: cardFooterProps == null ? void 0 : cardFooterProps.children
    })]
  });
};
ImsCard.propTypes = {
  ...(Card.propTypes && Card.propTypes),
  cardProps: PropTypes.object,
  cardHeaderProps: PropTypes.object,
  cardFooterProps: PropTypes.object,
  cardBodyProps: PropTypes.object
};

const PanelWindow = _ref => {
  let {
    children,
    tabId
  } = _ref;
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(TabPane, {
      tabId: tabId,
      children: children
    })
  });
};

const PanelTab = _ref => {
  let {
    children,
    onClick,
    active,
    index,
    label,
    ...props
  } = _ref;
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(NavItemBase, {
      ...props,
      children: /*#__PURE__*/jsx(NavLinkBase, {
        "data-toggle": "tab",
        href: "#",
        className: classnames("nav-link", {
          " active": active
        }),
        onClick: onClick,
        id: "ims-tab-" + index,
        "aria-controls": "ims-tabpanel-" + index,
        ...props,
        children: children
      })
    })
  });
};

const PanelTabs = _ref => {
  let {
    children,
    activeTab = 0,
    variant,
    ...props
  } = _ref;
  const [value, setValue] = React.useState(activeTab);
  const handleChange = (e, index) => {
    setValue(index);
  };
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsxs("div", {
      className: "panel-tabs",
      children: [/*#__PURE__*/jsx(NavBase, {
        tabs: true,
        variant: variant && variant,
        children: /*#__PURE__*/jsx("div", {
          className: "d-flex flex-fill gx-0 gy-3",
          children: React.Children.map(children, (child, index) => {
            if (child.type === PanelTab) return /*#__PURE__*/React.cloneElement(child, {
              onClick: e => handleChange(e, index),
              active: index === value,
              index: index,
              ...props
            });
          })
        })
      }), /*#__PURE__*/jsx(TabContentBase, {
        activeTab: value,
        className: "panel-windows",
        ...props,
        children: React.Children.map(children, (child, index) => {
          if (child.type === PanelWindow) return /*#__PURE__*/React.cloneElement(child, {
            ...props
          });
        })
      })]
    })
  });
};

function ImsCarousel(_ref) {
  let {
    children,
    slidesPerView = 3,
    spaceBetween = 30,
    navigation = false
  } = _ref;
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  React.useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.params.slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
        swiperRef.current.swiper.update();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/jsxs(React.Fragment, {
    children: [navigation && /*#__PURE__*/jsxs("div", {
      className: "my-2 d-flex justify-content-end align-items-center",
      children: [/*#__PURE__*/jsx(Button, {
        outline: true,
        className: "border-0",
        onClick: handlePrev,
        children: /*#__PURE__*/jsx("i", {
          class: "fa-solid fa-angle-left p-0"
        })
      }), /*#__PURE__*/jsx(Button, {
        outline: true,
        className: "border-0",
        onClick: handleNext,
        children: /*#__PURE__*/jsx("i", {
          class: "fa-solid fa-angle-right p-0"
        })
      })]
    }), /*#__PURE__*/jsx(Swiper, {
      ref: swiperRef,
      slidesPerView: window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : slidesPerView,
      spaceBetween: spaceBetween,
      grabCursor: true,
      mousewheel: true,
      navigation: true,
      modules: [Mousewheel, Navigation],
      className: "ims-swiper-carousel",
      children: React.Children.map(children, child => {
        if (child) {
          return /*#__PURE__*/jsx(SwiperSlide, {
            children: child
          });
        } else {
          // Return null if the condition is not met
          return null;
        }
      })
    })]
  });
}

function RadialProgressBar(_ref) {
  let {
    percentage = 0,
    customPercentage = 0.75,
    ...props
  } = _ref;
  let text = props.text || percentage + "%";
  let options = {
    pathColor: "blue",
    rotation: 0.63,
    strokeLinecap: "butt",
    textSize: "16px",
    ...props.options
  };
  return /*#__PURE__*/jsx("div", {
    className: "radial-progress-bar",
    children: /*#__PURE__*/jsx(CircularProgressbar, {
      value: percentage * customPercentage,
      text: text,
      styles: buildStyles(options)
    })
  });
}
RadialProgressBar.propTypes = {
  ...(ProgressBase.propTypes && ProgressBase.propTypes)
};

function useDrawerStore(config) {
  const [openDrawers, setOpenDrawers] = useState([]);
  function toggle(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids.filter(id => id !== drawerId);else return [...ids, drawerId];
    });
  }
  function isOpen(drawerId) {
    return openDrawers.includes(drawerId);
  }
  //close function for the top most drawer
  function closeDrawer(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids.filter(id => id !== drawerId);else return ids;
    });
  }
  //function to only open drawer
  function openDrawer(drawerId) {
    setOpenDrawers(ids => {
      if (ids.includes(drawerId)) return ids;else return [...ids, drawerId];
    });
  }
  //function to close all drawers
  function closeAllDrawers() {
    setOpenDrawers([]);
  }
  return {
    isOpen,
    toggle,
    openDrawer,
    closeDrawer,
    closeAllDrawers
  };
}

const DrawerContext = /*#__PURE__*/React.createContext();
const DrawerContextProvider = _ref => {
  let {
    children,
    ...rest
  } = _ref;
  let {
    ...store
  } = useDrawerStore();
  return /*#__PURE__*/jsx(DrawerContext.Provider, {
    value: {
      ...store
    },
    children: children
  });
};

function useDrawer() {
  const {
    ...store
  } = useContext(DrawerContext);
  return {
    ...store
  };
}

const DrawerOpener = _ref => {
  let {
    drawerId = "",
    children,
    onClick = () => {},
    ...rest
  } = _ref;
  const {
    openDrawer
  } = useDrawer();
  return /*#__PURE__*/jsx("span", {
    onClick: e => {
      openDrawer(drawerId);
      onClick(e);
    },
    ...rest,
    children: children
  });
};

function useInternalState() {
  const {
    isOpen,
    toggle,
    closeDrawer,
    openDrawer,
    closeAllDrawers
  } = useDrawer();
  //get window inner width form size prop
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function _getSize(size) {
    if (windowWidth > 1300) return size + "vw";
    if (windowWidth > 1200) return "50vw";
    if (windowWidth > 992) return "60vw";
    return "100vw";
  }
  return {
    isOpen,
    toggle,
    _getSize,
    closeDrawer,
    openDrawer,
    closeAllDrawers
  };
}
const DrawerRight = _ref => {
  let {
    drawerId = "",
    children,
    size = 40,
    toolbar = null,
    containerRef,
    onDrawerClose = () => {},
    onScroll = () => {}
  } = _ref;
  const {
    isOpen,
    _getSize,
    closeDrawer
  } = useInternalState();
  return /*#__PURE__*/jsx(React.Fragment, {
    children: /*#__PURE__*/jsx(Drawer, {
      lockBackgroundScroll: true,
      open: isOpen(drawerId),
      onClose: () => {
        closeDrawer(drawerId);
        onDrawerClose();
      },
      direction: "right",
      size: _getSize(size),
      zIndex: 1051,
      children: /*#__PURE__*/jsxs("div", {
        ref: containerRef,
        onScroll: onScroll,
        className: "p-4 h-100 overflow-y-scroll scrollbar-primary",
        children: [/*#__PURE__*/jsx(RowBase, {
          children: /*#__PURE__*/jsx(ColBase, {
            md: "12",
            children: /*#__PURE__*/jsxs("div", {
              className: "d-flex flex-row-reverse align-items-center",
              children: [/*#__PURE__*/jsx(ButtonBase, {
                className: "border-0 pull-right",
                onClick: () => {
                  closeDrawer(drawerId);
                  onDrawerClose();
                },
                color: "danger",
                outline: true,
                size: "sm",
                children: /*#__PURE__*/jsx("i", {
                  className: "ims-icons icon-icon-cross-24"
                })
              }), toolbar]
            })
          })
        }), children]
      })
    })
  });
};

const useAPIError = () => {
  function isAPIError(err) {
    return err instanceof AxiosError;
  }
  function hanldeAPIError(err) {
    /** we only allowd netword of api realted error here */
    if (err instanceof AxiosError) {
      var _err$response, _err$response2, _err$response3;
      let statusCode = (_err$response = err.response) == null ? void 0 : _err$response.status;
      /** here we have set up the priority levels of messages */
      let message = ((_err$response2 = err.response) == null || (_err$response2 = _err$response2.data.details) == null ? void 0 : _err$response2.description) || ((_err$response3 = err.response) == null ? void 0 : _err$response3.data.message) || err.message;
      /** 4xx errors need to be shown to users. */
      if (statusCode >= 400 && statusCode <= 499) {
        return toast.error(message);
      }
      if (statusCode >= 500 && statusCode <= 599) {
        if (process.env.NODE_ENV === "development") {
          return toast.error(message);
        } else {
          return toast.error("Unexpected server error occured. Please contact support for help at support@imssystems.tech");
        }
      }
    }
    /**
     * if code reaches here it means an UI or frontend related error.
     * we only show toast in development mode for better development experience.
     */
    if (process.env.NODE_ENV === "development") {
      return toast.error("Unknown error detected in API Error handler: ", err.message);
    }
  }
  return {
    isAPIError,
    hanldeAPIError
  };
};

function useError() {
  const {
    isAPIError,
    hanldeAPIError
  } = useAPIError();
  function handleError(error) {
    if (isAPIError(error)) {
      return hanldeAPIError(error);
    }
  }
  return {
    handleError
  };
}

function useQuery(initial) {
  const initialQueryState = {
    required: _buildDefault(initial).required,
    filter: _buildDefault(initial).filter,
    search: _buildDefault(initial).search,
    pagination: _buildDefault(initial).pagination
  };
  const initialToolState = {
    filter: initial && initial.filter || {},
    required: initial && initial.required || {},
    search: "",
    pagination: initial && initial.pagination || {
      page: 1,
      size: 10
    }
  };
  let [query, setQuery] = useState(initialQueryState);
  let [toolState, setToolState] = useState(initialQueryState);
  function fullReset() {
    setQuery(initialQueryState);
    setToolState(initialToolState);
  }
  function _buildDefault(initial) {
    return {
      required: initial && initial.required ? objectToQuery(initial.required.value) : "",
      filter: initial && initial.filter ? objectToQuery(initial.filter.value) : "",
      search: initial && initial.search ? objectToQuery(initial.search.value) : "",
      pagination: initial && initial.pagination ? objectToQuery(initial.pagination.value) : "page=1"
    };
  }
  function isObject(object) {
    return object !== null && typeof object === "object";
  }
  function objectToQuery(object) {
    if (!object) return "";
    const queryBucket = [];
    function dig(obj, build) {
      if (build === void 0) {
        build = "";
      }
      if (!isObject(obj)) return queryBucket.push(build + ("=" + encodeURIComponent(obj)));
      const keys = Object.keys(obj);
      for (let key of keys) {
        if (isObject(obj)) {
          let attach = !build ? "" + key : !Array.isArray(obj) ? "[" + key + "]" : "[]";
          dig(obj[key], build + attach);
        }
      }
      return obj;
    }
    dig(object);
    return queryBucket.join("&");
  }
  let formatString = str => str ? "&" + str : str;
  function getQuery() {
    let processedString = "";
    let keys = Object.keys(query);
    for (let key of keys) {
      processedString = processedString ? processedString + formatString(query[key]) : query[key];
    }
    return processedString;
  }
  function handleRequired(requiredQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        required: objectToQuery(requiredQuery.value),
        pagination: "page=1"
      };
    });
    _updateRequired(requiredQuery);
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function handleFilter(filterQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        filter: objectToQuery(filterQuery.value),
        pagination: "page=1"
      };
    });
    _updateFilter(filterQuery);
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function handlePagination(page, size) {
    if (page === void 0) {
      page = 1;
    }
    if (size === void 0) {
      size = 10;
    }
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        pagination: objectToQuery({
          page,
          size
        })
      };
    });
    _updatePagination({
      page,
      size
    });
  }
  function handleSearch(searchQuery) {
    setQuery(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        search: objectToQuery(searchQuery.value),
        pagination: "page=1"
      };
    });
    _updatePagination({
      page: 1,
      size: 10
    });
  }
  function _updatePagination(pagination) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        pagination
      };
    });
  }
  function _updateFilter(filter) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        filter
      };
    });
  }
  function _updateRequired(required) {
    setToolState(prevState => {
      /**
       * I'm using JSON to avoid object mutation, this is used only for performence.
       * Date, function, Infinity , Maps , Blobs are not cloned. So be mindfull of using,
       * basic and simple objects in state.
       */
      return {
        ...JSON.parse(JSON.stringify(prevState)),
        required
      };
    });
  }
  return {
    query,
    toolState,
    fullReset,
    getQuery,
    handleFilter,
    handlePagination,
    handleSearch,
    handleRequired
  };
}

const byString = function (object, accessString) {
  accessString = accessString.replace(/\[(\w+)\]/g, ".$1");
  accessString = accessString.replace(/^\./, "");
  let accessKeys = accessString.split(".");
  for (let i = 0, n = accessKeys.length; i < n; ++i) {
    let key = accessKeys[i];
    if (key in object) {
      object = object[key];
    } else {
      return;
    }
  }
  return object;
};

function _catch$1(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, result);
}
Object.byString = byString;
const useForm = (initdataModel, schema) => {
  const [dataModel, setDataModel] = useState(initdataModel);
  const [validationErrors, setValidationErrors] = useState({});
  const [isBusy, setIsBusy] = useState(false);
  const validate = function () {
    try {
      const options = {
        abortEarly: false
      };
      const errors = {};
      return Promise.resolve(_catch$1(function () {
        return Promise.resolve(schema.validate(dataModel, options)).then(function () {
          return null;
        });
      }, function (err) {
        err.inner.forEach(item => {
          errors[item.path] = item.message;
        });
        return errors;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const validateProperty = function (field, value) {
    try {
      const errors = {
        ...validationErrors
      };
      const _temp = _finallyRethrows(function () {
        return _catch$1(function () {
          const objSchema = yup.reach(schema, field);
          return Promise.resolve(objSchema.validate(value)).then(function () {
            /**
             * if reached this block after promise it means validation success.
             * remove the errors if there is any regarding this field.
             */
            delete errors[field];
          });
        }, function (err) {
          /**
           * invalid input detected. update with proper error message on the
           * respective field.
           */
          errors[field] = err.message;
        });
      }, function (_wasThrown, _result) {
        /**
         * finally we are just setting the erros to state.
         */
        setValidationErrors(errors);
        if (_wasThrown) throw _result;
        return _result;
      });
      return Promise.resolve(_temp && _temp.then ? _temp.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const handleSubmit = function (e, doSubmit, reset, options) {
    if (reset === void 0) {
      reset = true;
    }
    try {
      e.preventDefault();
      return Promise.resolve(validate()).then(function (errors) {
        function _temp3() {
          setIsBusy(false);
        }
        // Form submission logic here ....
        function submission() {
          return new Promise(function (resolve, reject) {
            try {
              return Promise.resolve(_catch$1(function () {
                return Promise.resolve(doSubmit(dataModel, e)).then(function () {
                  if (reset) resetForm();
                  return resolve();
                });
              }, function (err) {
                return reject(err);
              }));
            } catch (e) {
              return Promise.reject(e);
            }
          });
        }
        if (errors) return setValidationErrors(errors);
        const _temp2 = _catch$1(function () {
          setIsBusy(true);
          return Promise.resolve(submission()).then(function () {});
        }, function (err) {
          console.log(err);
        });
        return _temp2 && _temp2.then ? _temp2.then(_temp3) : _temp3(_temp2);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const handleChange = _ref => {
    let {
      field,
      value
    } = _ref;
    const data = {
      ...dataModel
    };
    data[field] = value;
    setDataModel(data);
    validateProperty(field, value);
  };
  const handleFileChange = (files, name) => {
    const data = {
      ...dataModel
    };
    data[name] = files;
    setDataModel(data);
    validateProperty(name, files);
  };
  const resetForm = () => {
    setDataModel(initdataModel);
    setValidationErrors({});
  };
  const _isObject = object => object !== null && typeof object === "object";
  const _deepEqual = (referenceObject, testObject) => {
    const referenceKeys = Object.keys(referenceObject);
    const testKeys = Object.keys(testObject);
    if (referenceKeys.length !== testKeys.length) return false;
    for (const key of referenceKeys) {
      const referenceValue = referenceObject[key];
      const testValue = testObject[key];
      const hasProperties = _isObject(referenceValue);
      if (!hasProperties && referenceValue !== testValue) return false;
      if (hasProperties && !_deepEqual(referenceValue, testValue)) return false;
    }
    return true;
  };
  const hasUnsavedData = () => !_deepEqual(initdataModel, dataModel);
  const isFormValid = () => Object.keys(validationErrors).length === 0;
  useEffect(() => {
    console.log("datamodel", dataModel);
    console.log("validation error:", validationErrors);
  }, [dataModel, validationErrors]);
  /** validation runner is required the first time the form renders. */
  useEffect(() => {
    // (async function () {
    //   const errors = await validate();
    //   if (errors) return setValidationErrors(errors);
    // })();
  }, []);
  return {
    dataModel,
    validationErrors,
    isBusy,
    handleChange,
    handleSubmit,
    isFormValid,
    resetForm,
    hasUnsavedData,
    handleFileChange
  };
};

const useDualStateController = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return {
    isOpen,
    toggle
  };
};

const defaultPaginationState = {
  currentPage: 1,
  hasNextPage: false,
  hasPrevPage: false,
  nextPage: null,
  prevPage: null,
  size: 10,
  totalPages: 0,
  totalResults: 0
};
const usePaginationState = () => {
  const [pagination, setPagination] = useState(defaultPaginationState);
  function updatePaginaion(pagination) {
    if (pagination === void 0) {
      pagination = defaultPaginationState;
    }
    setPagination(pagination);
  }
  return {
    pagination,
    updatePaginaion
  };
};

const useProcessing = initializers => {
  let initState = {};
  initializers.forEach(process => {
    initState[process.action] = {
      status: process.status,
      id: null
    };
  });
  let [processing, setProcessing] = useState(initState);
  let dispatch = state => {
    setProcessing(currentProcesses => {
      let key = Object.keys(state)[0];
      let value = Object.values(state)[0];
      let updatedProcesses = {
        ...currentProcesses
      };
      updatedProcesses[key] = value;
      return updatedProcesses;
    });
  };
  return {
    processing,
    dispatch
  };
};

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
const SUCCESS_TIMEOUT = 2500;
const useClipboard = () => {
  const copyPlainTextToClipBoard = function (value, cb) {
    try {
      const _temp5 = function () {
        if (navigator.clipboard) {
          setCopySuccess(true);
          return Promise.resolve(navigator.clipboard.writeText(value)).then(function () {
            setTimeout(() => setCopySuccess(false), SUCCESS_TIMEOUT);
          });
        }
      }();
      return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const copyFormatedToClipboard = function () {
    try {
      const _temp4 = function () {
        if (contentElementReference.current) {
          const _temp3 = function () {
            if (navigator.clipboard) {
              function _temp2() {
                setTimeout(() => setCopySuccess(false), SUCCESS_TIMEOUT);
              }
              const _temp = _catch(function () {
                return Promise.resolve(navigator.clipboard.write([new ClipboardItem({
                  "text/html": new Blob([contentElementReference.current.innerHTML], {
                    type: "text/html"
                  })
                })])).then(function () {
                  setCopySuccess(true);
                  console.log("Contentns copied.");
                });
              }, function (err) {
                console.log("Error copying to clipboard.");
                console.log(err);
              });
              return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
            }
          }();
          if (_temp3 && _temp3.then) return _temp3.then(function () {});
        }
      }();
      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const [copySuccess, setCopySuccess] = useState(false);
  const contentElementReference = useRef(null);
  return {
    contentElementReference,
    copySuccess,
    copyFormatedToClipboard,
    copyPlainTextToClipBoard
  };
};

export { AccordionBase as Accordion, AccordionBodyBase as AccordionBody, AccordionHeaderBase as AccordionHeader, AccordionItemBase as AccordionItem, ActivityBase as Activity, Table as AdvancedExpandedTable, Table$1 as AdvancedTable, AlertBase as Alert, BadgeBase as Badge, BreadcrumbBase as Breadcrumb, BreadcrumbItemBase as BreadcrumbItem, ButtonBase as Button, ButtonDropdownBase as ButtonDropdown, ButtonGroupBase as ButtonGroup, ButtonToggleBase as ButtonToggle, ButtonToolbarBase as ButtonToolbar, CardBodyBase as CardBody, CardColumnsBase as CardColumns, CardDeckBase as CardDeck, CardFooterBase as CardFooter, CardGroupBase as CardGroup, CardHeaderBase as CardHeader, CardImgBase as CardImg, CardImgOverlayBase as CardImgOverlay, CardLinkBase as CardLink, CardSubtitleBase as CardSubtitle, CardTextBase as CardText, CardTitleBase as CardTitle, CarouselBase as Carousel, CarouselCaptionBase as CarouselCaption, CarouselControlBase as CarouselControl, CarouselIndicatorsBase as CarouselIndicators, CarouselItemBase as CarouselItem, CloseButtonBase as CloseButton, ColBase as Col, CollapseBase as Collapse, ContainerBase as Container, CreatableSelectBase as CreatableSelect, DrawerContextProvider, DrawerOpener, DrawerRight, DropdownBase as Dropdown, DropdownItemBase as DropdownItem, DropdownMenuBase as DropdownMenu, DropdownToogleBase as DropdownToggle, FadeBase as Fade, FileDropZone as FileDropzone, FormBase as Form, FormFeedbackBase as FormFeedback, FormGroupBase as FormGroup, FormTextBase as FormText, ImsCard, ImsCarousel, ImsInputCheck, ImsInputDate, ImsInputDropZone, ImsInputRadio, ImsInputSelect, ImsInputSelectWithIcon, ImsInputText, ImsInputTextWithIcon, ImsInputTime, ImsTextEditor, InputBase as Input, InputGroupBase$1 as InputGroup, InputGroupTextBase$1 as InputGroupText, LabelBase as Label, ListBase as List, ListGroupBase as ListGroup, ListGroupItemBase as ListGroupItem, ListGroupItemHeadingBase as ListGroupItemHeading, ListGroupItemTextBase as ListGroupItemText, ListInlineItemBase as ListInlineItem, MediaBase as Media, ModalBase as Modal, ModalBodyBase as ModalBody, ModalFooterBase as ModalFooter, ModalHeaderBase as ModalHeader, NavBase as Nav, NavItemBase as NavItem, NavLinkBase as NavLink, NavBarBase as Navbar, NavbarBrandBase as NavbarBrand, NavbarTextBase as NavbarText, NavbarTogglerBase as NavbarToggler, OffcanvasBase as Offcanvas, OffcanvasBodyBase as OffcanvasBody, OffcanvasHeaderBase as OffcanvasHeader, PaginationBase as Pagination, PaginationItemBase as PaginationItem, PaginationLinkBase as PaginationLink, PanelTab, PanelTabs, PanelWindow, PlaceholderBase as Placeholder, PlaceholderButtonBase as PlaceholderButton, PopoverBase as Popover, PopoverBodyBase as PopoverBody, PopoverHeaderBase as PopoverHeader, PopperContentBase as PopperContent, PopperTargetHelperBase as PopperTargetHelper, ProgressBase as Progress, RadialProgressBar, ImsRadioCheckbox as RadioCheckbox, RowBase as Row, ReactSearchBase as SearchSelect, ReactSelectBase as Select, ImsSimpleTable as SimpleTable, SpinnerBase as Spinner, TabContentBase as TabContent, TabPaneBase as TabPane, TableBase as Table, Index as TextEditor, ToastBase as Toast, ToastBodyBase as ToastBody, ToastHeaderBase as ToastHeader, UncontrolledTooltipBase as Tooltip, UncontrolledAccordionBase as UncontrolledAccordion, UncontrolledAlertBase as UncontrolledAlert, UncontrolledButtonDropdownBase as UncontrolledButtonDropdown, UncontrolledCarouselBase as UncontrolledCarousel, UncontrolledCollapseBase as UncontrolledCollapse, UncontrolledDropdownBase as UncontrolledDropdown, UncontrolledPopoverBase as UncontrolledPopover, useError as useAPIError, useClipboard, useDrawer, useDualStateController, useForm, usePaginationState, useProcessing, useQuery };
//# sourceMappingURL=index.modern.js.map
